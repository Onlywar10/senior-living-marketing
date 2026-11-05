import type { Metadata } from "next";
import { Offer } from "../components/sections";

export const metadata: Metadata = {
  title: "The Founding Offer | Kinlight",
  description: "Your first 3 months free, guaranteed, with no setup fee. You only stay on if we keep every promise. If not, you owe nothing.",
};

export default function OfferPage() {
  return <Offer />;
}
