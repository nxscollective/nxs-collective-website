import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-bone">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-mist leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
