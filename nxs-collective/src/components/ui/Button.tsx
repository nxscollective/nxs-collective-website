import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps { variant?: ButtonVariant; className?: string; children: React.ReactNode; showExternalIcon?: boolean; }
interface LinkButtonProps extends BaseProps { href: string; external?: boolean; onClick?: never; type?: never; }
interface NativeButtonProps extends BaseProps { href?: never; external?: never; onClick?: () => void; type?: "button" | "submit"; }
type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-sand text-ink hover:bg-[#d5bb94] border border-sand shadow-[0_8px_30px_rgba(188,166,135,.12)]",
  secondary: "bg-transparent text-bone border border-sand/70 hover:bg-sand hover:text-ink",
  ghost: "bg-transparent text-mist hover:text-bone border border-transparent underline underline-offset-4 decoration-hairline",
};
const baseStyles = "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[.08em] transition-all duration-300 whitespace-nowrap";

export default function Button({ href, external, onClick, type = "button", variant = "primary", className, children, showExternalIcon = true }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);
  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}{showExternalIcon && <ArrowUpRight size={16} strokeWidth={1.75} />}</a>;
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
