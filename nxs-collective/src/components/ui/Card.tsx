import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
  highlighted = false,
}: {
  className?: string;
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative border bg-graphite p-8 md:p-9 transition-colors duration-300",
        highlighted
          ? "border-sand/50 bg-graphite-alt"
          : "border-hairline hover:border-silver/40",
        className
      )}
    >
      {children}
    </div>
  );
}
