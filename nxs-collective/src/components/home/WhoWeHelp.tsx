import { Container, SectionHeading } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Check } from "lucide-react";

const groups = [
  "Office workers with neck, back or shoulder discomfort",
  "Individuals recovering from injuries",
  "Recreational and competitive athletes",
  "Clients returning to exercise",
  "Beginners requiring structured guidance",
  "Individuals pursuing strength, muscle gain or fat loss",
  "People managing recurring musculoskeletal symptoms",
];

export default function WhoWeHelp() {
  return (
    <section className="border-b border-hairline bg-ink py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for a wide range of people and goals"
          description="Wherever you are starting from, the same integrated approach applies: assess, treat, rebuild, perform."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <li key={group}>
              <Card className="flex h-full items-start gap-3 !p-5">
                <Check size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-sand" />
                <span className="text-sm leading-relaxed text-mist">{group}</span>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
