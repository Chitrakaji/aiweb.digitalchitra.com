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
    <div className={cn("space-y-2.5", align === "center" && "mx-auto max-w-3xl text-center")}>
      <span className="section-label">{eyebrow}</span>
      <div className="space-y-2">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-950 sm:text-[2.35rem]">
          {title}
        </h2>
        {description ? (
          <p className="text-balance text-sm leading-6 text-muted sm:text-base">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
