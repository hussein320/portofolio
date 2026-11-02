import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import OutlineNumber from "@/components/OutlineNumber";
import type { ExperienceEntry, ExperienceRole } from "@/types/profile";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const accents = [
  {
    bar: "from-sky-500 to-blue-600",
    dot: "border-sky-500 bg-sky-500 ring-4 ring-sky-500/15",
    dash: "bg-sky-400",
  },
  {
    bar: "from-cyan-400 to-teal-500",
    dot: "border-cyan-500 bg-cyan-500 ring-4 ring-cyan-500/15",
    dash: "bg-cyan-400",
  },
  {
    // Amber ties the academic role to the MSc tile in the snapshot section.
    bar: "from-amber-400 to-orange-500",
    dot: "border-amber-500 bg-amber-500 ring-4 ring-amber-500/15",
    dash: "bg-amber-400",
  },
];

// Months since year 0, so date spans can be compared and subtracted directly.
function monthIndex(date: string | null): number {
  if (!date) {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [year, month = 1] = date.split("-").map(Number);
  return year * 12 + (month - 1);
}

function formatMonth(date: string | null): string {
  if (!date) return "Present";
  const idx = monthIndex(date);
  return `${MONTHS[idx % 12]} ${Math.floor(idx / 12)}`;
}

// Inclusive of both months, matching how LinkedIn counts tenure.
function formatDuration(startDate: string, endDate: string | null): string {
  const months = monthIndex(endDate) - monthIndex(startDate) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}

function rolesOf(entry: ExperienceEntry): ExperienceRole[] {
  return [
    {
      title: entry.role,
      employmentType: entry.employmentType,
      startDate: entry.startDate,
      endDate: entry.endDate,
      summary: entry.summary,
      bullets: entry.bullets,
    },
    ...(entry.previousRoles ?? []),
  ];
}

function companyStart(entry: ExperienceEntry): string {
  const roles = rolesOf(entry);
  return roles[roles.length - 1].startDate;
}

// Company logo tile, falling back to initials on the accent gradient when no logo is set.
function CompanyMark({ entry, fallback, className }: { entry: ExperienceEntry; fallback: string; className?: string }) {
  if (entry.logo) {
    return (
      <span
        className={cn(
          "relative shrink-0 overflow-hidden bg-white ring-1 ring-slate-200 dark:ring-white/10",
          className
        )}
      >
        <Image src={entry.logo} alt={`${entry.company} logo`} fill sizes="48px" className="object-cover" />
      </span>
    );
  }
  const initials = entry.company
    .split(/\s+/)
    .filter((word) => /^[A-Z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center bg-gradient-to-br font-bold tracking-wide text-white",
        fallback,
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function CareerAxis({ entries }: { entries: ExperienceEntry[] }) {
  const spans = entries.map((entry) => ({
    entry,
    start: monthIndex(companyStart(entry)),
    end: monthIndex(entry.endDate) + 1,
    promotions: rolesOf(entry).slice(0, -1).map((r) => monthIndex(r.startDate)),
  }));
  const firstYear = Math.floor(Math.min(...spans.map((s) => s.start)) / 12);
  const lastYear = Math.floor((Math.max(...spans.map((s) => s.end)) - 1) / 12);
  const axisStart = firstYear * 12;
  const axisLength = (lastYear + 1) * 12 - axisStart;
  const pct = (month: number) => ((month - axisStart) / axisLength) * 100;
  // Ongoing roles run to the edge of the axis so they read as "still going".
  for (const span of spans) {
    if (span.entry.endDate === null) span.end = axisStart + axisLength;
  }
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);

  const yearLines = years.slice(1).map((year) => (
    <span
      key={year}
      className="absolute inset-y-0 w-px bg-slate-200 dark:bg-slate-800"
      style={{ left: `${pct(year * 12)}%` }}
      aria-hidden="true"
    />
  ));

  return (
    <figure
      className="mb-10 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5 md:p-6 backdrop-blur-sm"
      aria-label="Career timeline"
    >
      <figcaption className="mb-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest text-slate-400">
        <span>Career timeline</span>
        <span className="font-mono normal-case tracking-normal">
          {firstYear} — {lastYear}
        </span>
      </figcaption>

      <div className="grid grid-cols-1 gap-y-3 md:grid-cols-[9rem_1fr] md:gap-x-4">
        <div className="hidden md:block" />
        <div className="relative h-4">
          {years.map((year) => (
            <span
              key={year}
              className="absolute top-0 font-mono text-[11px] text-slate-400"
              style={{ left: `calc(${pct(year * 12)}% + 6px)` }}
            >
              {year}
            </span>
          ))}
        </div>

        {spans.map(({ entry, start, end, promotions }, i) => {
          const accent = accents[i % accents.length];
          return (
            <React.Fragment key={entry.id}>
              <span className="flex min-w-0 items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 md:justify-end md:self-center">
                <CompanyMark entry={entry} fallback={accent.bar} className="h-5 w-5 rounded text-[9px]" />
                <span className="truncate">{entry.company}</span>
              </span>
              <div className="relative h-3 rounded-full bg-slate-100 dark:bg-slate-800/70 -mt-2 md:mt-0">
                {yearLines}
                <a
                  href={`#exp-${entry.id}`}
                  className={cn(
                    "group/seg absolute inset-y-0 rounded-full bg-gradient-to-r shadow-sm transition-all duration-300 hover:brightness-110 hover:shadow-md",
                    accent.bar
                  )}
                  style={{ left: `${pct(start)}%`, width: `${pct(end) - pct(start)}%` }}
                  aria-label={`${entry.company}: ${formatMonth(companyStart(entry))} to ${formatMonth(entry.endDate)}`}
                >
                  {promotions.map((month) => (
                    <span
                      key={month}
                      className="absolute inset-y-0 w-0.5 bg-white/80 dark:bg-slate-900/80"
                      style={{ left: `${((month - start) / (end - start)) * 100}%` }}
                      aria-hidden="true"
                    />
                  ))}
                  {entry.endDate === null && (
                    <span className="absolute right-0 top-1/2 flex h-3 w-3 -translate-y-1/2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500" />
                    </span>
                  )}
                </a>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </figure>
  );
}

type ExperienceCardProps = {
  data: ExperienceEntry;
  index: number;
  className?: string;
};

export default function ExperienceCard({ data, index, className }: ExperienceCardProps) {
  const accent = accents[index % accents.length];
  const roles = rolesOf(data);
  const start = companyStart(data);
  const isCurrent = data.endDate === null;
  const meta = [data.location, data.workMode].filter(Boolean).join(" · ");

  return (
    <article
      id={`exp-${data.id}`}
      className={cn(
        "group relative scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-none dark:hover:border-slate-700",
        className
      )}
      aria-label={`${roles[0].title} at ${data.company}`}
    >
      <span className={cn("absolute inset-y-0 left-0 w-1 bg-gradient-to-b", accent.bar)} aria-hidden="true" />
      <div className="relative p-6 pl-7 md:p-8 md:pl-10">
        <div className="mb-6 flex items-end gap-4">
          <OutlineNumber index={index} className="text-5xl md:text-6xl" />
          <span className={cn("mb-2 h-px flex-1 bg-gradient-to-r opacity-60", accent.bar)} aria-hidden="true" />
        </div>

        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <CompanyMark
              entry={data}
              fallback={accent.bar}
              className="h-10 w-10 rounded-lg text-sm shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">{data.company}</h3>
              {meta && <p className="text-sm text-slate-500 dark:text-slate-400">{meta}</p>}
            </div>
          </div>

          <div className="flex flex-col items-start gap-1.5 sm:items-end">
            {isCurrent && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-400/20 bg-emerald-50 dark:bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Current
              </span>
            )}
            <p className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
              <time dateTime={start}>{formatMonth(start)}</time>
              {" — "}
              {data.endDate ? <time dateTime={data.endDate}>{formatMonth(data.endDate)}</time> : "Present"}
              <span className="text-slate-300 dark:text-slate-600"> · </span>
              {formatDuration(start, data.endDate)}
            </p>
          </div>
        </header>

        <ol className="mt-7 space-y-7">
          {roles.map((role, i) => {
            const isLatest = i === 0;
            return (
              <li key={role.title} className="relative pl-7">
                {i < roles.length - 1 && (
                  <span
                    className="absolute left-[5px] top-4 -bottom-7 w-px bg-slate-200 dark:bg-slate-700"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2",
                    isLatest ? accent.dot : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"
                  )}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h4 className="text-base font-semibold leading-snug text-slate-900 dark:text-white">{role.title}</h4>
                  {role.employmentType && (
                    <span className="rounded-md border border-slate-200 dark:border-slate-700 px-1.5 py-px text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {role.employmentType}
                    </span>
                  )}
                </div>

                {roles.length > 1 && (
                  <p className="mt-1 font-mono text-xs tabular-nums text-slate-400">
                    {formatMonth(role.startDate)} — {formatMonth(role.endDate)} · {formatDuration(role.startDate, role.endDate)}
                  </p>
                )}

                {role.summary && (
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{role.summary}</p>
                )}

                {role.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2" aria-label="Key responsibilities">
                    {role.bullets.map((bullet) => (
                      <li
                        key={bullet.text}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                      >
                        <span className={cn("mt-[0.6rem] h-px w-3 shrink-0", accent.dash)} aria-hidden="true" />
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>

        {data.tags.length > 0 && (
          <div
            className="mt-7 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800 pt-5"
            aria-label="Skills and technologies"
          >
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/10 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-500 dark:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
