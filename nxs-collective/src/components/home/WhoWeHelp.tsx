import { Container, SectionHeading } from "@/components/ui/Container";
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
    <section className="border-b border-hairline bg-ink py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for a wide range of people and goals"
          description="Wherever you are starting from, the same integrated approach applies: assess, treat, rebuild, perform."
        />

        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {groups.map((group) => (
            <li key={group} className="flex items-start gap-3 border-b border-hairline pb-5 text-sm text-mist md:text-base">
              <Check size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-silver" />
              {group}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
