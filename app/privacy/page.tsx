import type { Metadata } from "next";
import { CatapultLink } from "../components/catapult-link";
import { LegalPage } from "../components/legal-page";
import { contact } from "../content";

export const metadata: Metadata = { title: "Privacy | Kinward", robots: { index: false, follow: false } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy">
      <p className="lede">This is a short draft, and a full privacy policy will replace it before launch.</p>
      <p>The forms on this site check what you type and thank you, but they don&apos;t send or store anything yet.</p>
      <p>When they do, we&apos;ll use what you share only to reply to you. We won&apos;t sell it. We&apos;ll contact you by phone or text only if you tick the box that says we may.</p>
      <p>
        Questions? Ask {contact.name}, {contact.role}, <CatapultLink />, at {contact.email}.
      </p>
    </LegalPage>
  );
}
