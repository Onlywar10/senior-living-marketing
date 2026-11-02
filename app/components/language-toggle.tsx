"use client";

import { useEffect, useSyncExternalStore } from "react";
import { zh } from "../zh";

type Lang = "en" | "zh";

const STORAGE_KEY = "kinlight-lang";
const ATTRIBUTES = ["aria-label", "alt", "title", "placeholder"];

const originalText = new WeakMap<Text, string>();
const originalAttrs = new WeakMap<Element, Record<string, string>>();
const listeners = new Set<() => void>();
let lang: Lang = "en";
let observer: MutationObserver | null = null;

function lookup(value: string) {
  const text = value.replace(/\s+/g, " ");
  if (text in zh) return zh[text];
  const trimmed = text.trim();
  if (!(trimmed in zh)) return null;
  const [lead] = value.match(/^\s*/)!;
  const [trail] = value.match(/\s*$/)!;
  return `${lead}${zh[trimmed]}${trail}`;
}

function translateText(node: Text) {
  const next = lookup(node.nodeValue ?? "");
  if (next === null || next === node.nodeValue) return;
  originalText.set(node, node.nodeValue ?? "");
  node.nodeValue = next;
}

function translateAttrs(el: Element) {
  for (const name of ATTRIBUTES) {
    const value = el.getAttribute(name);
    const next = value ? lookup(value) : null;
    if (next === null || next === value) continue;
    originalAttrs.set(el, { ...originalAttrs.get(el), [name]: value! });
    el.setAttribute(name, next);
  }
}

function walk(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    if (!root.parentElement?.closest("[data-no-translate], script, style")) translateText(root as Text);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  if (el.matches("[data-no-translate], script, style")) return;
  translateAttrs(el);
  root.childNodes.forEach(walk);
}

function restore(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    const original = originalText.get(root as Text);
    if (original !== undefined) root.nodeValue = original;
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const attrs = originalAttrs.get(root as Element);
  if (attrs) Object.entries(attrs).forEach(([name, value]) => (root as Element).setAttribute(name, value));
  root.childNodes.forEach(restore);
}

function setLang(next: Lang) {
  if (next === lang) return;
  lang = next;
  const html = document.documentElement;
  if (next === "zh") {
    html.lang = "zh-Hans";
    walk(html);
    // The site keeps changing as animations play and pages change, so new text is caught as it appears.
    observer = new MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "characterData") walk(change.target);
        else if (change.type === "attributes") walk(change.target);
        else change.addedNodes.forEach(walk);
      }
    });
    observer.observe(html, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRIBUTES });
  } else {
    observer?.disconnect();
    observer = null;
    html.lang = "en";
    restore(html);
  }
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useLang() {
  return useSyncExternalStore(subscribe, () => lang, () => "en" as Lang);
}

export function LanguageToggle() {
  const current = useLang();

  useEffect(() => {
    // Waits until React has finished with the page, since it expects the English it was served.
    let timer = 0;
    const apply = () => {
      timer = window.setTimeout(() => {
        try {
          if (localStorage.getItem(STORAGE_KEY) === "zh") setLang("zh");
        } catch {}
      }, 250);
    };
    if (document.readyState === "complete") apply();
    else window.addEventListener("load", apply, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", apply);
    };
  }, []);

  const toChinese = current === "en";
  return (
    <button
      type="button"
      data-no-translate=""
      lang={toChinese ? "zh-Hans" : "en"}
      aria-label={toChinese ? "切换到简体中文" : "Switch to English"}
      onClick={() => setLang(toChinese ? "zh" : "en")}
      className="btn btn-secondary !min-h-11 !px-3 !py-1.5"
    >
      {toChinese ? "中文" : "English"}
    </button>
  );
}
