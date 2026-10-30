import type { Metadata } from "next";
import { Pilot } from "../components/sections";

export const metadata: Metadata = {
  title: "The Founding Offer | Kinward",
  description: "We build it. No setup fee. You pay nothing until it hits the results we agree on.",
};

export default function OfferPage() {
  return (
    <>
      <Pilot />
    </>
  );
}
