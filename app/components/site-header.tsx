"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { bookHref, solutions, tabs } from "../content";
import { LanguageToggle } from "./language-toggle";
import { TopLink } from "./top-link";


export function Wordmark({ alt = "Kinlight", className = "h-9 sm:h-11" }: { alt?: string; className?: string }) {
  return <Image src="/brand/kinlight-logo.png" alt={alt} width={1940} height={587} preload className={`w-auto ${className}`} />;
}

const tabClass =
  "inline-flex items-center gap-1.5 border-b-[3px] border-transparent py-1.5 font-display font-semibold hover:border-ink aria-[current=page]:border-signal-ink aria-[current=page]:font-bold";

function SolutionsTab({ current }: { current: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <TopLink href="/solutions/live-website" aria-current={current ? "page" : undefined} className={tabClass}>
        Solutions
        <svg aria-hidden="true" viewBox="0 0 24 24" className={`chevron size-4 ${open ? "rotate-180" : ""}`}>
          <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        </svg>
      </TopLink>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul className="lift w-[27rem] overflow-hidden rounded-md border border-rule bg-paper">
            {solutions.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <TopLink href={item.href} onClick={() => setOpen(false)} className="block px-4 py-3 no-underline hover:bg-mist">
                  <span className="block font-display font-bold">{item.title}</span>
                  <span className="mt-0.5 block text-[0.92rem] leading-snug text-ink-soft">{item.promise}</span>
                </TopLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="z-40 bg-mist lg:sticky lg:top-[2.6rem]">
      <div className="mx-auto flex max-w-[86rem] flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-2 sm:px-10 lg:gap-x-6 lg:py-3">
        <TopLink href="/" aria-label="Kinlight home" className="rounded-sm no-underline">
          <Wordmark alt="" />
        </TopLink>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex gap-x-6">
            {tabs.map((link) =>
              link.href === "/solutions/live-website" ? (
                <SolutionsTab key={link.href} current={pathname.startsWith("/solutions")} />
              ) : (
                <li key={link.href}>
                  <TopLink href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={tabClass}>
                    {link.label}
                  </TopLink>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-2 lg:gap-3">
          <LanguageToggle />
          <TopLink href={bookHref} className="btn btn-primary !min-h-11 !py-1.5 hidden xl:inline-flex">
            Book a meeting
          </TopLink>
          <button type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)} className="btn btn-secondary !min-h-11 !px-3 !py-1.5 xl:hidden">
            Menu
          </button>
        </div>
      </div>
      {open && (
        <nav id="site-menu" aria-label="Menu" className="border-y border-rule bg-paper xl:hidden">
          <ul>
            {tabs.map((link) => (
              <li key={link.href} className="border-b border-rule last:border-b-0">
                <TopLink
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-display text-[1.15rem] font-semibold aria-[current=page]:font-bold aria-[current=page]:text-signal-ink sm:px-10"
                >
                  {link.label}
                </TopLink>
                {link.href === "/solutions/live-website" && (
                  <ul className="pb-2">
                    {solutions.map((item) => (
                      <li key={item.href}>
                        <TopLink href={item.href} onClick={() => setOpen(false)} className="block py-2 pl-8 pr-4 sm:pl-14">
                          <span className="block font-bold">{item.title}</span>
                          <span className="block text-[0.92rem] leading-snug text-ink-soft">{item.promise}</span>
                        </TopLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="p-4 sm:px-10">
              <TopLink href={bookHref} onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Book a meeting
              </TopLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
