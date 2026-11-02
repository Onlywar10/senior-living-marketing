import type { Metadata } from "next";
import { SolutionPage } from "../../components/solution-page";

export const metadata: Metadata = {
  title: "Family Connection | Kinlight",
  description: "Families who feel close to daily life, in their own language.",
};

export default function FamilyConnectionPage() {
  return <SolutionPage id="family" />;
}
