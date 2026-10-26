import type { LucideIcon } from "lucide-react";
import { Code2, Database, Palette, Server, Wrench, Cloud } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Development",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-End Development",
    icon: Server,
    items: ["Node.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database Management",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    items: ["Vercel", "Docker", "CI/CD"],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    items: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: ["Git", "GitHub", "Testing & Debugging"],
  },
];
