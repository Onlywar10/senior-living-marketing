import type { Metadata } from "next";
import { Closing, SolutionsHead } from "../components/sections";

export const metadata: Metadata = {
  title: "Solutions | Kinlight",
  description: "Live Website, Post Once, Family Messaging and Conversion Tools. What each one does and what's included.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SolutionsHead />
      {children}
      <Closing />
    </>
  );
}
