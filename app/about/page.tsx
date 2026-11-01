import type { Metadata } from "next";
import { About, Closing } from "../components/sections";

export const metadata: Metadata = {
  title: "About Us | Kinlight",
  description: "Who we are and why we built Kinlight.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Closing />
    </>
  );
}
