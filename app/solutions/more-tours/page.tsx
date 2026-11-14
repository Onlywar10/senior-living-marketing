import type { Metadata } from "next";
import { SolutionPage } from "../../components/solution-page";

export const metadata: Metadata = {
  title: "Every Inquiry Answered | Kinlight",
  description: "A website chat that answers real questions about daily life, and every inquiry and tour request at your front desk.",
};

export default function MoreToursPage() {
  return <SolutionPage id="inquiries" />;
}
