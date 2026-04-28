"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProjectLink, SkillItem } from "@/types/profile";

export type InfoCardVariant = "standard" | "featured" | "compact" | "tinted";

export interface InfoCardProps {
  title: string;
  description?: string;
  meta?: string;
  tags?: string[];
  link?: ProjectLink;
  imagePath?: string;
  imageAlt?: string;
  variant?: InfoCardVariant;
  className?: string;
  skills?: SkillItem[];
  stat?: { label: string; value: string | number };
}

const tagColorMap: Record<string, string> = {
  React: "bg-sky-50 text-sky-700 border border-sky-200",
  TypeScript: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  Python: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  Node: "bg-green-50 text-green-700 border border-green-200",
  default: "bg-slate-50 text-slate-600 border border-slate-200",
};

function getTagClass(tag: string): string {
  return tagColorMap[tag] ?? tagColorMap["default"];
}

export default function InfoCard({
  title,
  description,
  meta,
  tags,
  link,
  imagePath,
  imageAlt,
  variant = "standard",
  className,
  skills,
  stat,
}: InfoCardProps) {
  const isCompact = variant === "compact";
  const isFeatured = variant === "featured";
  const isTinted = variant === "tinted";

  const cardBase = cn(
    "group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm",
    "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-slate-300",
    isFeatured && "ring-2 ring-indigo-500/20 shadow-indigo-100 shadow-md",
    isTinted && "bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border-indigo-100",
    isCompact && "flex-row items-start gap-4 p-4",
    !isCompact && "overflow-hidden",
    className
  );

  const content = (
    <>
      {imagePath && !isCompact && (
        <div className={cn("relative w-full overflow-hidden", isFeatured ? "h-52" : "h-40")}>
          <Image
            src={imagePath}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {isFeatured && (
            <span className="absolute top-3 right-3 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
              Featured
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          "flex flex-col flex-1",
          isCompact ? "" : "p-5",
          isFeatured && "p-6"
        )}
      >
        {stat && (
          <div className="mb-3 flex flex-col">
            <span className={cn("font-extrabold leading-none tracking-tight text-indigo-600", isFeatured ? "text-4xl" : "text-3xl")}>
              {stat.value}
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-widest text-slate-400">
              {stat.label}
            </span>
          </div>
        )}

        {imagePath && isCompact && (
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-100">
            <Image
              src={imagePath}
              alt={imageAlt ?? title}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          {meta && (
            <p className="mb-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
              {meta}
            </p>
          )}

          <h3
            className={cn(
              "font-bold leading-snug text-slate-900",
              isFeatured ? "text-xl" : isCompact ? "text-base" : "text-lg"
            )}
          >
            {title}
          </h3>

          {description && (
            <p
              className={cn(
                "mt-2 leading-relaxed text-slate-500",
                isCompact ? "text-xs" : "text-sm"
              )}
            >
              {description}
            </p>
          )}

          {skills && skills.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{skill.name}</span>
                  {skill.level !== undefined && (
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-1.5 w-4 rounded-full transition-colors",
                            i < Math.round((skill.level ?? 0) / 20)
                              ? "bg-indigo-500"
                              : "bg-slate-100"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}

          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    getTagClass(tag)
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {link && (
            <div className="mt-4">
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold",
                  "bg-indigo-600 text-white shadow-sm transition-all duration-200",
                  "hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                )}
              >
                {link.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return <article className={cardBase}>{content}</article>;
}
