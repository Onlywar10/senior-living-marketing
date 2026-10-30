import type { Metadata } from "next";
import { About, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "About Us | Kinward",
  description: "Who we are and why we built Kinward.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Closing />
    </>
  );
}
