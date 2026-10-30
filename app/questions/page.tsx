import type { Metadata } from "next";
import { Questions, NextStep, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "Questions | Kinward",
  description: "Straight answers about Kinward.",
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
