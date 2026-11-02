import { cn } from "@/lib/utils";

type SectionLabelVariant = "default" | "subtle" | "accent";

interface SectionLabelProps {
  text: string;
  variant?: SectionLabelVariant;
  className?: string;
}

// "default" sits on dark backgrounds (e.g. the contact section); "accent" on light/themed ones.
const variantStyles: Record<SectionLabelVariant, { text: string; line: string }> = {
  default: { text: "text-sky-300", line: "bg-sky-300/60" },
  subtle: { text: "text-slate-500 dark:text-slate-400", line: "bg-slate-300 dark:bg-white/10" },
  accent: { text: "text-sky-600 dark:text-sky-300", line: "bg-sky-500/60 dark:bg-sky-300/60" },
};

export default function SectionLabel({
  text,
  variant = "default",
  className,
}: SectionLabelProps) {
  const styles = variantStyles[variant];
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em]",
        styles.text,
        className
      )}
    >
      <span className={cn("h-px w-10", styles.line)} aria-hidden="true" />
      {text}
    </p>
  );
}
