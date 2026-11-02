import { cn } from "@/lib/utils";

export default function OutlineNumber({ index, className }: { index: number; className?: string }) {
  return (
    <span
      className={cn(
        "font-black leading-none text-transparent select-none [-webkit-text-stroke:1px_rgba(100,116,139,0.55)] dark:[-webkit-text-stroke:1px_rgba(148,163,184,0.45)]",
        className
      )}
      aria-hidden="true"
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}
