import type { Metadata } from "next";
import { SolutionPage } from "../../components/solution-page";

export const metadata: Metadata = {
  title: "Inquiries & Tours | Kinlight",
  description: "Every inquiry reaches your team, and your site is built for Google and AI search.",
};

export default function InquiriesToursPage() {
  return <SolutionPage id="inquiries" />;
}
