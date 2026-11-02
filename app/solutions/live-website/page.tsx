import type { Metadata } from "next";
import { SolutionPage } from "../../components/solution-page";

export const metadata: Metadata = {
  title: "Live Website | Kinlight",
  description: "A website that shows what life is really like there, not a brochure.",
};

export default function LiveWebsitePage() {
  return <SolutionPage id="website" />;
}
