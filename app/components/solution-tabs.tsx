"use client";

import { usePathname } from "next/navigation";
import { solutions } from "../content";
import { TopLink } from "./top-link";

export function SolutionTabs() {
  const pathname = usePathname();
  return (
    <nav aria-label="Solutions" className="mx-auto max-w-[86rem] px-5 sm:px-10">
      <ul className="grid grid-cols-2 gap-1.5 lg:grid-cols-4">
        {solutions.map((item) => (
          <li key={item.href}>
            <TopLink
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="flex min-h-14 items-center justify-center rounded-t-md border border-b-0 border-ink-rule px-3 py-2 text-center font-display text-[1.05rem] font-bold leading-tight no-underline hover:bg-ink-rule aria-[current=page]:border-mist aria-[current=page]:bg-mist aria-[current=page]:text-ink sm:text-[1.25rem]"
            >
              {item.title}
            </TopLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
