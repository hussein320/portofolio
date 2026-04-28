"use client";
import React from "react";
import { cn } from "@/lib/utils";
import type { ExperienceEntry, EducationEntry } from "@/types/profile";

type TimelineAlign = "left" | "right";

type BaseTimelineProps = {
  align?: TimelineAlign;
  isLast?: boolean;
  className?: string;
};

type ExperienceProps = BaseTimelineProps & {
  variant: "experience";
  data: ExperienceEntry;
};

type EducationProps = BaseTimelineProps & {
  variant: "education";
  data: EducationEntry;
};

type TimelineItemProps = ExperienceProps | EducationProps;

function formatDateRange(startDate: string, endDate: string | null | undefined): string {
  const formatSingle = (d: string): string => {
    const dt = new Date(d);
    if (isNaN(dt.getTime())) return d;
    return dt.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  const start = formatSingle(startDate);
  const end = endDate ? formatSingle(endDate) : "Present";
  return `${start} \\ ${end}`;
}

export default function TimelineItem(props: TimelineItemProps) {
  const { align = "left", isLast = false, className } = props;
  const isRight = align === "right";

  let title: string;
  let organization: string;
  let location: string | undefined;
  let startDate: string;
  let endDate: string | null | undefined;
  let bullets: string[];
  let description: string | undefined;
  let tags: string[];

  if (props.variant === "experience") {
    const d = props.data;
    title = d.role;
    organization = d.company;
    location = d.location;
    startDate = d.startDate;
    endDate = d.endDate;
    bullets = d.bullets.map((b) => b.text);
    description = undefined;
    tags = d.tags;
  } else {
    const d = props.data;
    title = d.field ? `${d.degree} · ${d.field}` : d.degree;
    organization = d.institution;
    location = d.location;
    startDate = d.startDate;
    endDate = d.endDate;
    bullets = d.achievements ?? [];
    description = d.description;
    tags = [];
  }

  const dateRange = formatDateRange(startDate, endDate);

  return (
    <article
      className={cn(
        "group relative flex gap-6 md:gap-10 flex-col",
        isRight ? "md:flex-row-reverse" : "md:flex-row",
        className
      )}
      aria-label={`${title} at ${organization}`}
    >
      <div
        className={cn(
          "hidden md:flex flex-col min-w-[160px] pt-1",
          isRight ? "items-start" : "items-end"
        )}
      >
        <time
          dateTime={startDate}
          className="text-xs font-semibold tracking-widest uppercase text-indigo-500 whitespace-nowrap"
        >
          {dateRange}
        </time>
      </div>

      <div className="relative flex flex-col items-center">
        <div
          className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-400 bg-white shadow-md mt-1.5 transition-all duration-300 group-hover:scale-125 group-hover:border-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-200"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors duration-300" />
        </div>
        {!isLast && (
          <div
            className="flex-1 w-px bg-gradient-to-b from-indigo-300 via-indigo-100 to-transparent mt-1"
            aria-hidden="true"
          />
        )}
      </div>

      <div
        className={cn(
          "flex-1 mb-10",
          isRight ? "md:text-right" : "md:text-left"
        )}
      >
        <time
          dateTime={startDate}
          className="md:hidden block text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-2"
        >
          {dateRange}
        </time>

        <div
          className={cn(
            "rounded-2xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm",
            "transition-all duration-300 ease-out",
            "group-hover:shadow-lg group-hover:shadow-slate-200/60 group-hover:-translate-y-0.5"
          )}
        >
          <h3 className="text-base font-bold text-slate-900 leading-snug mb-0.5">
            {title}
          </h3>

          <div
            className={cn(
              "flex flex-wrap gap-x-3 gap-y-0.5 text-sm text-slate-500 mb-3",
              isRight ? "md:justify-end" : "justify-start"
            )}
          >
            <span className="font-medium text-slate-700">{organization}</span>
            {location && (
              <>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span>{location}</span>
              </>
            )}
          </div>

          {description && (
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {bullets.length > 0 && (
            <ul
              className={cn("space-y-1.5 mb-4", isRight ? "md:text-right" : "")}
              aria-label="Key highlights"
            >
              {bullets.map((bullet, idx) => (
                <li
                  key={`bullet-${idx}-${bullet.slice(0, 12)}`}
                  className={cn(
                    "flex items-start gap-2 text-sm text-slate-600 leading-relaxed",
                    isRight ? "md:flex-row-reverse" : ""
                  )}
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {tags.length > 0 && (
            <div
              className={cn(
                "flex flex-wrap gap-1.5 mt-1",
                isRight ? "md:justify-end" : ""
              )}
              aria-label="Skills and technologies"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 transition-colors duration-200 hover:bg-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
