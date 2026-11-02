import type { Metadata } from "next";
import { SolutionPage } from "../../components/solution-page";

export const metadata: Metadata = {
  title: "Post Once | Kinlight",
  description: "One post reaches your website, your families and paper.",
};

export default function PostOncePage() {
  return <SolutionPage id="post" />;
}
