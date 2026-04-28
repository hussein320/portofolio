import { cn } from "@/lib/utils";

type SectionLabelVariant = "default" | "subtle" | "accent";

interface SectionLabelProps {
  text: string;
  variant?: SectionLabelVariant;
  className?: string;
}

const variantStyles: Record<SectionLabelVariant, string> = {
  default: "text-neutral-400",
  subtle: "text-neutral-300",
  accent: "text-neutral-500",
};

export default function SectionLabel({
  text,
  variant = "default",
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "inline-block text-xs font-semibold uppercase tracking-widest",
          variantStyles[variant]
        )}
      >
        {text}
      </span>
      <span
        className="flex-1 h-px max-w-[48px] rounded-full"
        style={{
          background:
            "linear-gradient(to right, rgba(156,163,175,0.5), transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}