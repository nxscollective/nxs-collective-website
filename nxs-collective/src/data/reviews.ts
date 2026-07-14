/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ⚠️  PLACEHOLDER REVIEWS — DO NOT PUBLISH AS-IS
 * ─────────────────────────────────────────────────────────────────────────
 *  Every entry below is a FICTIONAL placeholder written only to preview the
 *  homepage reviews carousel layout. None of these people exist and none of
 *  these reviews were actually posted on Google.
 *
 *  BEFORE THIS SITE GOES LIVE, replace every entry with a real, approved
 *  Google review copied from your NXS Collective Google Business Profile:
 *    1. Go to your Google Business Profile → Reviews.
 *    2. Pick reviews you have permission to feature.
 *    3. Copy the reviewer's first name + last initial (as shown on Google),
 *       their star rating, and the review text, into the fields below.
 *    4. Keep the wording exactly as posted — don't edit or embellish a real
 *       review's claims.
 *    5. Remove any of these placeholder entries you don't replace.
 *
 *  Do not write or approve reviews that state guaranteed results, specific
 *  medical outcomes, or claims a client didn't actually make.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface Review {
  id: string;
  /** First name + last initial only, matching how it appears on Google. */
  name: string;
  /** Which service the review relates to. */
  category: "Physiotherapy" | "Sports Therapy" | "Personal Training";
  /** Star rating out of 5. */
  rating: number;
  /** The review text. Keep this verbatim once replaced with a real review. */
  quote: string;
}

export const reviews: Review[] = [
  {
    id: "placeholder-1",
    name: "Rachel T.", // PLACEHOLDER — replace with a real reviewer name
    category: "Physiotherapy",
    rating: 5,
    quote:
      "The initial assessment was thorough and everything was explained clearly before we started. I always know what we're working on and why.",
  },
  {
    id: "placeholder-2",
    name: "Daniel K.", // PLACEHOLDER — replace with a real reviewer name
    category: "Physiotherapy",
    rating: 5,
    quote:
      "Appointments are easy to book through Mindbody and the Clarke Quay location is genuinely convenient before work.",
  },
  {
    id: "placeholder-3",
    name: "Michelle O.", // PLACEHOLDER — replace with a real reviewer name
    category: "Sports Therapy",
    rating: 5,
    quote:
      "The hands-on sessions are always professional, and the therapist talks me through what they're doing throughout the session.",
  },
  {
    id: "placeholder-4",
    name: "Farhan A.", // PLACEHOLDER — replace with a real reviewer name
    category: "Sports Therapy",
    rating: 5,
    quote:
      "The studio itself feels calm and clinical rather than like a typical gym, which I appreciate as someone who was a little nervous at first.",
  },
  {
    id: "placeholder-5",
    name: "Priya S.", // PLACEHOLDER — replace with a real reviewer name
    category: "Personal Training",
    rating: 5,
    quote:
      "My programme is reviewed and adjusted regularly based on how I'm progressing, which keeps every session purposeful.",
  },
  {
    id: "placeholder-6",
    name: "Marcus L.", // PLACEHOLDER — replace with a real reviewer name
    category: "Personal Training",
    rating: 5,
    quote:
      "My coach takes the time to check my form properly rather than just rushing through a workout — it's clear they're paying attention.",
  },
];
