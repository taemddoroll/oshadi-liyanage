import type { SkillCategory } from "@/data/skills";

export function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon;
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Icon className="h-6 w-6 text-indigo-500" />
      <h3 className="mt-4 font-medium">{category.title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
