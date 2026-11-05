"use client";

import type { SolutionId } from "../solutions-content";
import { FamilyStory } from "./family-story";
import { LiveWebsiteStory } from "./live-website-story";
import { PostFlow } from "./post-flow";
import { ToursStory } from "./tours-story";

export function SignatureScene({ id }: { id: SolutionId }) {
  if (id === "website") return <LiveWebsiteStory />;
  if (id === "family") return <FamilyStory />;
  if (id === "inquiries") return <ToursStory />;
  return <PostFlow receipt />;
}
