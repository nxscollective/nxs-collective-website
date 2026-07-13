import { SearchCheck, HeartPulse, Layers, TrendingUp } from "lucide-react";

const stages = [
  {
    label: "Assess",
    description: "Clinical and movement assessment to understand the root cause.",
    icon: SearchCheck,
  },
  {
    label: "Treat",
    description: "Targeted therapy to reduce pain and restore function.",
    icon: HeartPulse,
  },
  {
    label: "Rebuild",
    description: "Structured rehabilitation to rebuild capacity and control.",
    icon: Layers,
  },
  {
    label: "Perform",
    description: "Progressive strength and conditioning for long-term performance.",
    icon: TrendingUp,
  },
];

export default function PathwaySteps() {
  return (
    <div className="relative">
      {/* Connecting line: vertical on mobile, horizontal on desktop */}
      <div
        aria-hidden="true"
        className="absolute left-[27px] top-2 bottom-2 w-px bg-hairline md:left-0 md:right-0 md:top-[27px] md:bottom-auto md:h-px md:w-auto"
      />

      <ol className="relative flex flex-col gap-10 md:flex-row md:justify-between md:gap-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <li key={stage.label} className="relative flex gap-5 md:flex-col md:gap-5 md:flex-1">
              <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center border border-hairline bg-ink">
                <Icon size={22} strokeWidth={1.5} className="text-sand" />
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-2 h-2 w-2 rounded-full bg-sand/80 animate-pulseNode"
                />
              </div>
              <div className="pt-1 md:pt-2">
                <p className="eyebrow !text-mist mb-1">0{index + 1}</p>
                <h3 className="font-display text-lg font-semibold text-bone">
                  {stage.label}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-mist">
                  {stage.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
