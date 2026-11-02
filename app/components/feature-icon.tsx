import type { IconName } from "../solutions-content";

const paths: Record<IconName, string> = {
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  pages: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
  share: "M6 12a2.5 2.5 0 1 0 0 .01M18 6a2.5 2.5 0 1 0 0 .01M18 18a2.5 2.5 0 1 0 0 .01M8.5 11l7-4M8.5 13l7 4",
  translate: "M4 5h10M9 3v2M12 5c-1 5-4 8-7 9M6 9c1 3 4 5 7 6M13 21l4-9 4 9M14.5 18h5",
  calendar: "M4 6h16v15H4zM4 10h16M8 3v4M16 3v4M8 14h3M8 17h3M14 14h2",
  bell: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4",
  palette: "M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-2 0-3 2 0 3.5 0S21 14 21 12a9 9 0 0 0-9-9M8 10h.01M12 7h.01M16 10h.01",
  chart: "M4 20V4M4 20h16M8 16v-4M13 16V8M18 16v-7",
  check: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M8 12l3 3 5-6",
  access: "M12 5a1.5 1.5 0 1 0 0 .01M5 9l7 1 7-1M12 10v5M12 15l-3 6M12 15l3 6",
  license: "M4 5h16v14H4zM8 10a1.5 1.5 0 1 0 0 .01M6 15c1-2 3-2 4 0M13 9h4M13 12h4M13 15h3",
  pulse: "M3 12h4l2-6 4 12 2-6h6",
  send: "M3 11l18-8-6 18-3-8zM12 13l9-10",
  route: "M6 12h6M12 12V6h6M12 12v6h6M6 12a1.5 1.5 0 1 0 0 .01M18 6a1.5 1.5 0 1 0 0 .01M18 18a1.5 1.5 0 1 0 0 .01",
  print: "M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z",
  book: "M5 4h6a2 2 0 0 1 1 1 2 2 0 0 1 1-1h6v15h-6a2 2 0 0 0-1 1 2 2 0 0 0-1-1H5zM12 5v15",
  camera: "M3 8h4l2-3h6l2 3h4v12H3zM12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7",
  spark: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 16v5M16.5 18.5h5",
  mail: "M3 6h18v13H3zM3 7l9 7 9-7",
  target: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 12h.01",
  ticket: "M3 8h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4zM14 8v2M14 13v1M14 17v1",
  users: "M9 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M3 20c0-4 3-6 6-6s6 2 6 6M16 5a3.5 3.5 0 0 1 0 7M18 14c2 .5 3.5 3 3.5 6",
  reply: "M4 5h16v11H10l-5 4v-4H4zM9 10l-2 0M9 10l2-2M9 10l2 2M9 10h5c1 0 2 1 2 2",
  idea: "M12 3a6 6 0 0 0-4 10.5c1 1 1 2 1 3h6c0-1 0-2 1-3A6 6 0 0 0 12 3M10 20h4",
  survey: "M6 3h12v18H6zM9 8l1 1 2-2M9 13l1 1 2-2M14 8h2M14 13h2M9 17h7",
  home: "M3 11l9-8 9 8M5 10v11h14V10M10 21v-6h4v6",
  alert: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4M12 8v4M12 14h.01",
  chat: "M4 5h16v11H10l-5 4v-4H4zM8 10h.01M12 10h.01M16 10h.01",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14M16 16l5 5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5",
};

export function FeatureIcon({ name }: { name: IconName }) {
  return (
    <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded bg-ink text-signal-bright">
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[name]} />
      </svg>
    </span>
  );
}
