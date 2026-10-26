export type ExperienceTopic = {
  slug: string;
  title: string;
  coverImage?: string;
};

export type ExperienceEntry = {
  topicSlug: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  photos: string[];
  videoUrl?: string;
};

export const experienceTopics: ExperienceTopic[] = [
  { slug: "projects", title: "Projects" },
  { slug: "b2b-sales-cx", title: "B2B, Sales & Customer Experience" },
  { slug: "leadership", title: "Leadership & Events" },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    topicSlug: "b2b-sales-cx",
    title: "Business Development — B2B Partnerships",
    organization: "AIESEC in Sri Lanka",
    period: "2024 — Present",
    description:
      "Sourced and closed corporate partnerships with local businesses, managing the full B2B sales cycle from outreach to signed agreement. Worked directly with client stakeholders to align partnership terms with both organizational goals and customer needs.",
    photos: ["/images/b2b-1.svg", "/images/b2b-2.svg"],
  },
  {
    topicSlug: "b2b-sales-cx",
    title: "Customer Experience & Account Support",
    organization: "AIESEC in Sri Lanka",
    period: "2023 — 2024",
    description:
      "Owned the post-sale relationship for partner accounts, handling onboarding, issue resolution, and renewal conversations to keep satisfaction and retention high across the partner portfolio.",
    photos: ["/images/b2b-3.svg", "/images/b2b-4.svg"],
  },
  {
    topicSlug: "leadership",
    title: "Team Leader, Organizing Committee",
    organization: "AIESEC in Sri Lanka",
    period: "2023 — 2024",
    description:
      "Led a cross-functional team through planning and delivery of a national-scale conference, coordinating logistics, delegate experience, and a committee of volunteers to hit every deadline.",
    photos: ["/images/leadership-1.svg", "/images/leadership-2.svg"],
  },
  {
    topicSlug: "leadership",
    title: "Event Coordinator",
    organization: "University of Moratuwa IT Society",
    period: "2022 — 2023",
    description:
      "Coordinated end-to-end logistics for university tech events, managing vendor communication, scheduling, and on-the-day execution for audiences of 100+ attendees.",
    photos: ["/images/leadership-3.svg", "/images/leadership-4.svg"],
  },
  {
    topicSlug: "projects",
    title: "Personal Portfolio Website",
    organization: "Independent Project",
    period: "2026",
    description:
      "Designed and built this portfolio end-to-end with Next.js, Tailwind CSS, and Framer Motion, deployed on Vercel — a technical foundation that supports the business-facing work above.",
    photos: ["/images/projects-1.svg", "/images/projects-2.svg"],
  },
  {
    topicSlug: "projects",
    title: "Campus Event Management App",
    organization: "University Coursework Project",
    period: "2025",
    description:
      "Built a small web app for managing event registrations and attendance tracking for university society events, reducing manual sign-up handling for organizers.",
    photos: ["/images/projects-3.svg", "/images/projects-4.svg"],
  },
];
