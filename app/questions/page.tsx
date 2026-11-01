import type { Metadata } from "next";
import { Questions, NextStep, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "Questions | Kinlight",
  description: "Straight answers about Kinlight.",
};

export default function QuestionsPage() {
  return (
    <>
      <Questions />
      <NextStep href="/offer" label="Next: the offer" />
      <Closing />
    </>
  );
}
