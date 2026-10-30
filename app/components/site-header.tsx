"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { bookHref, solutions, tabs } from "../content";


export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-[1.3rem] font-bold tracking-tight sm:text-[1.6rem] ${className}`}>
      <span className="inline-flex size-7 items-center justify-center rounded-[0.3rem] bg-ink text-signal-bright sm:size-8">
        <svg aria-hidden="true" viewBox="0 0 21 21" className="size-[1.15rem] sm:size-[1.35rem]">
          <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9" /><path d="m2.5 7.5v8c0 .5522847.44771525 1 1 1h3c.55228475 0 1-.4477153 1-1v-4c0-.5522847.44771525-1 1-1h2c.5522847 0 1 .4477153 1 1v4c0 .5522847.4477153 1 1 1h3c.5522847 0 1-.4477153 1-1v-8" /></g>
        </svg>
      </span>
      Kinward
    </span>
  );
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
      <Link href="/solutions" aria-current={current ? "page" : undefined} className={tabClass}>
        Solutions
        <svg aria-hidden="true" viewBox="0 0 24 24" className={`chevron size-4 ${open ? "rotate-180" : ""}`}>
          <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
        </svg>
      </Link>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul className="lift w-[22rem] overflow-hidden rounded-md border border-rule bg-paper">
            {solutions.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link href={item.href} onClick={() => setOpen(false)} className="block px-4 py-3 font-display font-semibold no-underline hover:bg-mist hover:text-signal-ink">
                  {item.title}
                </Link>
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
        <Link href="/" aria-label="Kinward home" className="rounded-sm no-underline">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex gap-x-6">
            {tabs.map((link) =>
              link.href === "/solutions" ? (
                <SolutionsTab key={link.href} current={pathname.startsWith("/solutions")} />
              ) : (
                <li key={link.href}>
                  <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={tabClass}>
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-2 lg:gap-3">
          <Link href={bookHref} className="btn btn-primary !min-h-11 !py-1.5 hidden xl:inline-flex">
            Book a meeting
          </Link>
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
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-display text-[1.15rem] font-semibold aria-[current=page]:font-bold aria-[current=page]:text-signal-ink sm:px-10"
                >
                  {link.label}
                </Link>
                {link.href === "/solutions" && (
                  <ul className="pb-2">
                    {solutions.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setOpen(false)} className="block py-2 pl-8 pr-4 sm:pl-14">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="p-4 sm:px-10">
              <Link href={bookHref} onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Book a meeting
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
