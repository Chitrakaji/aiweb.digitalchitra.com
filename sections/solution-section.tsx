import { BarChart3, BadgeDollarSign, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { solutionPoints } from "@/lib/data";

const iconMap = [Users, BadgeDollarSign, BarChart3];

export function SolutionSection() {
  return (
    <section className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="The Solution"
            title="You don’t need just a website. You need a Website Revenue System."
            description="A strong website does more than look modern. It attracts, qualifies, reassures, and moves visitors toward action."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {solutionPoints.map((item, index) => {
            const Icon = iconMap[index];

            return (
              <div key={item} className="card-surface p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-slate-950">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
