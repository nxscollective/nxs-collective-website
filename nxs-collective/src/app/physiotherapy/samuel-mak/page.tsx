import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Samuel Mak Han Wei | Physiotherapist at NXS Collective",
  description:
    "Meet Samuel Mak Han Wei, AHPC-registered physiotherapist and Clinical Director at NXS Collective in Clarke Quay, Singapore.",
};

const clinicalInterests = [
  "Racket-sport injuries",
  "Badminton and tennis-related injuries",
  "Pre-operative knee rehabilitation",
  "Post-operative knee rehabilitation",
  "Neck and lower-back pain",
  "Musculoskeletal injuries",
  "Return to exercise and sport",
  "Progressive strength rehabilitation",
];

const approach = [
  {
    index: "01",
    title: "Assess",
    description: "Understand your condition, movement and current physical capacity.",
  },
  {
    index: "02",
    title: "Treat",
    description: "Use appropriate hands-on treatment to support pain relief and movement.",
  },
  {
    index: "03",
    title: "Rebuild",
    description: "Progressively restore strength, control and confidence.",
  },
  {
    index: "04",
    title: "Return",
    description: "Prepare you for everyday activity, exercise or sport.",
  },
];

export default function SamuelMakPage() {
  return (
    <>
      <section className="border-b border-hairline bg-ink pt-20">
        <Container className="grid min-h-[600px] items-stretch gap-0 px-0 md:grid-cols-[.92fr_1.08fr] md:px-10">
          <div className="relative min-h-[470px] overflow-hidden md:order-2 md:min-h-[600px]">
            <Image
              src="/images/team/samuel-mak-han-wei.webp"
              alt="Samuel Mak Han Wei, Clinical Director and Principal Physiotherapist at NXS Collective"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent md:bg-gradient-to-r md:from-ink/35 md:to-transparent" />
          </div>
          <div className="flex flex-col justify-center bg-graphite p-7 md:order-1 md:p-12 lg:p-16">
            <p className="eyebrow mb-5">Meet Your Physiotherapist</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-bone md:text-5xl">
              Samuel Mak Han Wei
            </h1>
            <p className="mt-5 font-display text-sm uppercase leading-relaxed tracking-[.16em] text-silver">
              Clinical Director &amp; Principal Physiotherapist
            </p>
            <p className="mt-3 text-xs uppercase tracking-[.16em] text-mist">
              AHPC Registration No. A2300445F
            </p>
            <div className="mt-8 h-px w-16 bg-sand" />
            <p className="mt-8 text-lg leading-relaxed text-mist">
              Helping clients move beyond pain, rebuild confidence and return to the activities that matter to them.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Clinical Experience" title="A foundation in hospital and musculoskeletal care" />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist">
            <p>
              Samuel is an AHPC-registered physiotherapist who began his career at Singapore General Hospital (SGH), gaining experience across inpatient orthopaedics and outpatient musculoskeletal physiotherapy.
            </p>
            <p>
              His clinical interests include racket-sport injuries, pre- and post-operative knee rehabilitation, and spinal conditions such as neck and lower-back pain.
            </p>
            <p>
              Having played competitive badminton during his school years, Samuel has a particular understanding of the physical demands involved in racket sports and the challenges clients face when working towards a safe and confident return to play.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-ink py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Treatment Approach"
            title="A structured approach to recovery"
            description="Samuel combines hands-on treatment, where appropriate, with progressive exercise rehabilitation, strength training and objective assessment."
          />
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-mist">
            Rather than focusing only on short-term symptom relief, he works to understand each client&apos;s condition, physical capacity and individual goals. This allows him to identify potential limitations, develop a structured rehabilitation plan and track meaningful progress throughout the recovery process.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <article key={item.title} className="border border-hairline bg-graphite p-6">
                <p className="eyebrow mb-4 !text-mist">{item.index}</p>
                <h3 className="font-display text-xl font-semibold text-bone">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-hairline bg-graphite py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Clinical Interests" title="Areas Samuel commonly works with" />
          <ul className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {clinicalInterests.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-mist md:text-base">
                <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-sand" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Getting You Back to What Matters</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-bone md:text-4xl">
              Recovery should lead back to real life.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-mist md:text-lg">
              What Samuel finds most rewarding about physiotherapy is seeing his clients return to the activities they enjoy. Whether that means returning to the tennis or badminton court, getting back into the gym, walking confidently after knee surgery, travelling comfortably, or simply managing everyday life without constantly being held back by pain, his goal is to help every client rebuild the confidence and physical capacity needed to move forward.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
