import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      <span className="section-label">{eyebrow}</span>
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-balance text-base leading-7 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
