import type { Metadata } from "next";
import { CatapultLink } from "../components/catapult-link";
import { LegalPage } from "../components/legal-page";
import { contact } from "../content";

export const metadata: Metadata = { title: "Accessibility statement | Kinward", robots: { index: false, follow: false } };

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility statement">
      <p className="lede">We want this site to work well for everyone, including people who use screen readers, keyboards or larger text.</p>
      <p>Our goal is to meet the Web Content Accessibility Guidelines (WCAG) 2.1, level AA.</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Use your browser&apos;s zoom to make the text larger. The page reflows to fit.</li>
        <li>Every part of the page can be reached with a keyboard.</li>
        <li>Photos have written descriptions, and animation stops if your device asks for less motion.</li>
      </ul>
      <p>
        If something is hard to use, please tell us and we&apos;ll fix it: {contact.name}, {contact.role}, <CatapultLink />, {contact.email} or {contact.phone}.
      </p>
    </LegalPage>
  );
}
