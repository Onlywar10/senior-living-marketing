"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

// Always lands at the very top of the new page. Links to an #anchor keep the normal jump.
export function TopLink({ onClick, ...props }: ComponentProps<typeof Link>) {
  if (typeof props.href === "string" && props.href.includes("#")) return <Link {...props} onClick={onClick} />;
  return (
    <Link
      {...props}
      scroll={false}
      onClick={(event) => {
        window.scrollTo({ top: 0, behavior: "instant" });
        onClick?.(event);
      }}
    />
  );
}
