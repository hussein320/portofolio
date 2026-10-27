import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import projects from "@/data/projects";
import { skillCategories, languages } from "@/data/skills";
import profileData from "@/data/profile";
import { cn } from "@/lib/utils";
import type { ProjectEntry } from "@/types/profile";
import type { IconType } from "react-icons";
import { HiAcademicCap, HiBriefcase, HiCode, HiTranslate } from "react-icons/hi";

const careerStart = new Date("2023-04-01");
const yearsOfExperience = Math.floor((Date.now() - careerStart.getTime()) / (365.25 * 24 * 3600 * 1000));

const liveProjects = projects.filter((p) => p.links?.length).length;

const snapshotStats: { value: string; label: string; sub?: string; Icon: IconType; chips?: string[] }[] = [
  { value: "110/110", label: "MSc Data Science & AI", sub: "Cum Laude · University of Genoa", Icon: HiAcademicCap },
  { value: `${yearsOfExperience}+`, label: "Years in Data Engineering", sub: "Cloud pipelines, BI & analytics", Icon: HiBriefcase },
  { value: String(projects.length), label: "Data & AI Projects", sub: `Pipelines, ML & web apps · ${liveProjects} live`, Icon: HiCode },
  { value: String(languages.length), label: "Languages Spoken", Icon: HiTranslate, chips: languages.map((l) => l.language) },
];

const heroParticles = [
  "left-[8%] top-[22%] h-2 w-2 bg-indigo-400/50",
  "left-[18%] top-[68%] h-1.5 w-1.5 bg-cyan-400/50",
  "left-[48%] top-[18%] h-2.5 w-2.5 bg-violet-400/40",
  "right-[18%] top-[30%] h-2 w-2 bg-indigo-300/50",
  "right-[8%] bottom-[24%] h-1.5 w-1.5 bg-sky-400/50",
  "left-[58%] bottom-[16%] h-2 w-2 bg-fuchsia-300/40",
];

type CodeLine = { text: string; kind?: "comment" | "keyword" | "string" | "output" };

type ProjectMeta = {
  category: string;
  accent: string;
  screenshot?: string;
  aspect?: string;
  enlarge?: string;
  file?: string;
  code?: CodeLine[];
};

const projectMeta: Record<string, ProjectMeta> = {
  "deutsch-master": {
    category: "EdTech · Full-stack web app",
    accent: "from-amber-400 via-rose-500 to-sky-500",
    screenshot: "/images/project-deutsch-master.png",
    aspect: "aspect-[9/4]",
    enlarge: "lg:-ml-28 xl:-ml-36",
  },
  "techeur-insights": {
    category: "Data visualisation · Web",
    accent: "from-sky-400 to-blue-600",
    screenshot: "/images/project-techeur-live.png",
  },
  "jade-supply-chain": {
    category: "Multiagent systems",
    accent: "from-emerald-400 to-teal-500",
    file: "SupplierAgent.java",
    code: [
      { text: "// agents negotiate stock on their own", kind: "comment" },
      { text: "ACLMessage cfp = new ACLMessage(ACLMessage.CFP);", kind: "keyword" },
      { text: 'cfp.addReceiver(new AID("warehouse-2", AID.ISLOCALNAME));' },
      { text: 'cfp.setContent("order:qty=120;deadline=48h");', kind: "string" },
      { text: "send(cfp);  // → PROPOSE | REFUSE", kind: "output" },
    ],
  },
  "sql-vs-pyspark": {
    category: "Big data · Benchmark",
    accent: "from-amber-400 to-orange-500",
    file: "benchmark.py",
    code: [
      { text: "-- SQL", kind: "comment" },
      { text: "SELECT region, AVG(sales) FROM orders GROUP BY region;", kind: "keyword" },
      { text: "# PySpark", kind: "comment" },
      { text: 'df.groupBy("region").agg(F.avg("sales"))', kind: "string" },
      { text: "# same result → compare plans, readability, scale", kind: "output" },
    ],
  },
  "rasa-chatbot-sql": {
    category: "Conversational AI",
    accent: "from-cyan-400 to-sky-500",
    file: "nl_to_sql.yml",
    code: [
      { text: 'user: "show customers from Milan"', kind: "string" },
      { text: "intent: query_table", kind: "keyword" },
      { text: "entities: { table: customers, city: Milan }" },
      { text: "# generated query", kind: "comment" },
      { text: "SELECT * FROM customers WHERE city = 'Milan';", kind: "output" },
    ],
  },
  "image-captioning": {
    category: "Deep learning · Research",
    accent: "from-sky-400 to-indigo-500",
    file: "caption.py",
    code: [
      { text: "features = cnn_encoder(image)", kind: "keyword" },
      { text: "caption = lstm_decoder(features, attention=True)" },
      { text: ">>> \"a dog running along the beach\"", kind: "string" },
      { text: "# scored with BLEU and METEOR", kind: "comment" },
    ],
  },
};

const codeColors: Record<NonNullable<CodeLine["kind"]> | "plain", string> = {
  comment: "text-slate-500",
  keyword: "text-sky-300",
  string: "text-emerald-300",
  output: "text-amber-200",
  plain: "text-slate-200",
};

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function WindowDots() {
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
    </div>
  );
}

function ProjectLinkButton({ project }: { project: ProjectEntry }) {
  const link = project.links?.[0];
  if (!link) return null;
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-3 rounded-full bg-slate-950 py-2 pl-5 pr-2 text-sm font-bold text-white transition-all duration-200 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-100"
    >
      Visit {hostname(link.url)}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover/link:rotate-[-45deg] dark:bg-slate-950 dark:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    </Link>
  );
}

function ProjectNumber({ index, className }: { index: number; className?: string }) {
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

function ProjectShowcase({ project, index }: { project: ProjectEntry; index: number }) {
  const meta = projectMeta[project.id];
  const flipped = index % 2 === 1;
  const link = project.links?.[0];

  return (
    <article className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className={cn("relative lg:col-span-7", flipped && "lg:order-2", meta.enlarge)}>
        <div
          className={cn(
            "absolute -inset-4 rounded-[2rem] bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40 dark:opacity-25 dark:group-hover:opacity-45",
            meta.accent
          )}
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50 transition-transform dark:border-white/10 dark:bg-slate-900 dark:shadow-black/40 duration-500 group-hover:-translate-y-1.5">
          <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-100 px-4 py-3 dark:border-white/10 dark:bg-slate-900/90">
            <WindowDots />
            {link && (
              <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center font-mono text-[0.7rem] text-slate-500 dark:bg-white/5 dark:text-slate-400">
                {hostname(link.url)}
              </span>
            )}
          </div>
          <div className={cn("relative overflow-hidden bg-slate-100", meta.aspect ?? "aspect-[16/10]")}>
            <Image
              src={meta.screenshot!}
              alt={`${project.title} — screenshot`}
              fill
              sizes="(max-width:1024px) 100vw, 640px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className={cn("lg:col-span-5", flipped && "lg:order-1")}>
        <div className="flex items-end gap-4">
          <ProjectNumber index={index} className="text-6xl md:text-7xl" />
          <span className={cn("mb-2 h-px flex-1 bg-gradient-to-r opacity-60", meta.accent)} aria-hidden="true" />
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">{meta.category}</p>
        <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white md:text-4xl">{project.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.slice(0, 8).map((tag) => (
            <li key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ProjectLinkButton project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectTerminalCard({ project, index }: { project: ProjectEntry; index: number }) {
  const meta = projectMeta[project.id] ?? { category: "Project", accent: "from-sky-400 to-blue-600" };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/[0.06] dark:hover:shadow-none">
      <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-70", meta.accent)} aria-hidden="true" />
      {meta.code && (
        <div className="overflow-hidden rounded-xl border border-slate-900/10 bg-slate-900 dark:border-white/10 dark:bg-slate-950/80">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
            <WindowDots />
            <span className="font-mono text-[0.7rem] text-slate-500">{meta.file}</span>
          </div>
          <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.72rem] leading-relaxed" aria-hidden="true">
            {meta.code.map((line, i) => (
              <div key={`${project.id}-code-${i}`} className="flex gap-4">
                <span className="w-3 shrink-0 text-right text-slate-600">{i + 1}</span>
                <span className={codeColors[line.kind ?? "plain"]}>{line.text}</span>
              </div>
            ))}
          </pre>
        </div>
      )}
      <div className="mt-6 flex items-start justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">{meta.category}</p>
        <ProjectNumber index={index} className="text-4xl" />
      </div>
      <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
      <p className="mt-3 truncate-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Technologies">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag} className="rounded-full border border-slate-200 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-500 dark:border-white/10 dark:text-slate-400">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Page() {
  const volunteering = profileData.volunteering ?? [];
  const contact = profileData.profile.contact;
  const showcaseProjects = projects.filter((p) => projectMeta[p.id]?.screenshot);
  const otherProjects = projects.filter((p) => !projectMeta[p.id]?.screenshot);

  return (
    <main className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white antialiased overflow-x-hidden">
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 dark:from-slate-950 via-white dark:via-slate-950 to-indigo-50/40 dark:to-indigo-950/40 pt-20 pb-40"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 right-12 h-[680px] w-[680px] rounded-full bg-indigo-200/35 dark:bg-indigo-500/15 blur-3xl motion-safe:animate-float-slow" />
          <div className="absolute bottom-0 left-10 h-[480px] w-[480px] rounded-full bg-violet-200/35 dark:bg-violet-500/10 blur-3xl motion-safe:animate-float" />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/40 dark:bg-cyan-500/10 blur-3xl motion-safe:animate-pulse-soft" />
          <div className="absolute inset-0 bg-grid opacity-60" />
          {heroParticles.map((particle) => (
            <span key={particle} className={cn("absolute rounded-full shadow-[0_0_30px_currentColor] motion-safe:animate-float", particle)} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-400/30 bg-white/70 dark:bg-slate-900/70 px-4 py-1.5 w-fit shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">Available for opportunities</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-slate-950 dark:text-white">
              Hussein<br />
              <span className="bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-violet-600 dark:to-violet-400 bg-clip-text text-transparent">Maatouk</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-300 leading-snug max-w-xl">
              Cloud Data Engineer &middot; AI&nbsp;&amp;&nbsp;ML Practitioner
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Designing scalable cloud data pipelines and reliable analytics foundations that bridge raw data to real-world impact &mdash; from distributed systems to production-ready data platforms.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                View Experience
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200 dark:from-indigo-500/40 to-violet-200 dark:to-violet-500/40 rotate-3 scale-105 opacity-60" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-indigo-100 dark:from-indigo-500/20 to-sky-100 dark:to-sky-500/20 -rotate-2 opacity-40" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-white/10">
                <Image
                  src="/images/my_pic.png"
                  alt="Hussein Maatouk &mdash; Cloud Data Engineer"
                  fill
                  sizes="(max-width:768px) 320px, (max-width:1024px) 384px, 440px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="snapshot"
        className="relative z-20 -mt-24 max-w-6xl mx-auto px-6 lg:px-12"
        aria-label="Career snapshot"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-2xl shadow-slate-300/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" aria-hidden="true" />
          <div className="grid grid-cols-2 lg:grid-cols-4 [&>*]:border-slate-200/80 dark:[&>*]:border-white/10 [&>*:nth-child(odd)]:border-r [&>*:nth-child(-n+2)]:border-b lg:[&>*]:border-b-0 lg:[&>*]:border-r lg:[&>*:last-child]:border-r-0">
            {snapshotStats.map(({ value, label, sub, Icon, chips }) => (
              <div key={label} className="group relative flex flex-col gap-3 p-5 md:p-7 transition-colors duration-300 hover:bg-sky-50/60 dark:hover:bg-white/[0.03]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition-transform duration-300 group-hover:scale-110 dark:bg-sky-400/10 dark:text-sky-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="bg-gradient-to-br from-slate-900 to-blue-600 bg-clip-text text-4xl md:text-5xl font-black leading-none tracking-tight text-transparent dark:from-white dark:to-sky-300">
                  {value}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{label}</span>
                  {sub && <span className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{sub}</span>}
                </div>
                {chips && (
                  <ul className="flex flex-wrap gap-1" aria-label="Languages">
                    {chips.map((chip) => (
                      <li key={chip} className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[0.7rem] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        {chip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="max-w-6xl mx-auto px-6 lg:px-12 py-24"
        aria-labelledby="profile-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <SectionLabel text="Professional Profile" variant="accent" />
            <h2 id="profile-heading" className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
              Turning complex data into<br />
              <span className="text-indigo-600 dark:text-indigo-400">strategic decisions</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a Cloud Data Engineer with hands-on expertise in designing end-to-end ELT pipelines, orchestrating distributed workflows, and building reliable data platforms that transform large-scale datasets into actionable intelligence. My academic background &mdash; an MSc in Data Science and AI with honours &mdash; underpins a rigorous, research-informed approach to engineering.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              I thrive at the intersection of cloud infrastructure, machine learning, and data engineering &mdash; building systems that are not only technically sound but genuinely useful to the people who depend on data every day.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Apache Kafka", "Apache Airflow", "dbt", "Dataform", "BigQuery", "GCP", "PySpark", "Tableau", "Python", "SQL"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-indigo-100 dark:border-indigo-400/20 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 p-6 flex flex-col gap-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Contact Details</h3>
              <ul className="flex flex-col gap-3">
                {contact.map((c) => (
                  <li key={c.type} className="flex items-start gap-3">
                    <span className="mt-0.5 text-indigo-500">
                      {c.icon === "mail" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      )}
                      {c.icon === "map-pin" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                      )}
                      {c.icon === "flag" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" /></svg>
                      )}
                      {c.icon === "linkedin" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      )}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{c.type}</span>
                      {c.href ? (
                        <Link href={c.href} className="text-sm text-slate-700 dark:text-slate-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                          {c.value}
                        </Link>
                      ) : (
                        <span className="text-sm text-slate-700 dark:text-slate-200 font-medium">{c.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="bg-slate-50/60 dark:bg-slate-900/40 py-24"
        aria-labelledby="experience-heading"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Professional Experience" variant="accent" />
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">Where I have made an impact</h2>
          </div>
          <div className="flex flex-col">
            {experience.map((exp, idx) => (
              <TimelineItem
                key={exp.id}
                variant="experience"
                data={exp}
                align={idx % 2 === 0 ? "left" : "right"}
                isLast={idx === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="research"
        className="py-24"
        aria-labelledby="research-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-12">
            <SectionLabel text="Thesis & Research" variant="accent" />
            <h2 id="research-heading" className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">Fairness-Aware Geospatial Research</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100/60 aspect-[4/3]">
              <Image
                src="/images/research-geospatial-fairness.png"
                alt="Fairness-aware geospatial data preprocessing research"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 shadow">
                  MSc Thesis &mdash; University of Genova
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 dark:border-amber-400/30 bg-amber-50 dark:bg-amber-400/10 px-4 py-1.5 w-fit">
                <span className="text-amber-600 dark:text-amber-400 font-bold text-sm">110/110</span>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">Cum Laude Honours</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">Fairness-Aware Geospatial Data Preprocessing</h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Researched and implemented fairness-aware preprocessing techniques for geospatial datasets, addressing spatial bias in location-based machine learning models. Leveraged PostGIS and PostgreSQL for large-scale spatial analysis, and developed Python pipelines for feature engineering, bias detection, and fairness metric evaluation.
              </p>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Produced academic findings on ethical AI implications in geospatial contexts, contributing novel insights to responsible data science &mdash; a domain increasingly critical as AI systems influence real-world spatial decision-making.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "PostGIS", "PostgreSQL", "Geospatial Analysis", "Fairness-Aware ML", "Ethical AI", "Research"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-indigo-100 dark:border-indigo-400/20 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative overflow-hidden bg-slate-50 py-28 text-slate-900 dark:bg-slate-950 dark:text-white"
        aria-labelledby="projects-heading"
      >
        <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-[0.15]" aria-hidden="true" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/20" aria-hidden="true" />
        <div className="absolute -right-40 bottom-40 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/20" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
                <span className="h-px w-10 bg-sky-500/60 dark:bg-sky-300/60" aria-hidden="true" />
                Projects
              </p>
              <h2 id="projects-heading" className="mt-5 text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-7xl">
                Things I&apos;ve{" "}
                <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text dark:from-sky-300 dark:via-blue-400 dark:to-cyan-300 text-transparent">built</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-slate-600 dark:text-slate-400">
              From a live language academy to research on distributed agents and deep learning: {projects.length} projects, built end to end.
            </p>
          </div>

          <div className="flex flex-col gap-28">
            {showcaseProjects.map((project, idx) => (
              <ProjectShowcase key={project.id} project={project} index={idx} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <div className="mb-10 mt-28 flex items-center gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">More builds &amp; research</h3>
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {otherProjects.map((project, idx) => (
                  <ProjectTerminalCard key={project.id} project={project} index={showcaseProjects.length + idx} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section
        id="education"
        className="py-24"
        aria-labelledby="education-heading"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Education" variant="accent" />
            <h2 id="education-heading" className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">Academic foundation</h2>
          </div>
          <div className="flex flex-col">
            {education.map((edu, idx) => (
              <TimelineItem
                key={edu.id}
                variant="education"
                data={edu}
                align="left"
                isLast={idx === education.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="bg-slate-50/60 dark:bg-slate-900/40 py-24"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Skills & Languages" variant="accent" />
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">Technical expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:border-indigo-200 dark:hover:border-indigo-400/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-150"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-indigo-100 dark:border-indigo-400/20 bg-gradient-to-br from-indigo-50/60 dark:from-indigo-500/10 to-violet-50/40 dark:to-violet-500/5 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-6">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {languages.map((lang) => (
                <div key={lang.language} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900 dark:text-white">{lang.language}</span>
                  </div>
                  <span className="flex-1 text-sm text-slate-500 dark:text-slate-400">{lang.level}</span>
                  <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      style={{
                        width:
                          lang.level === "Native"
                            ? "100%"
                            : lang.level.toLowerCase().includes("advanced")
                            ? "88%"
                            : lang.level.toLowerCase().includes("professional")
                            ? "72%"
                            : "55%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="volunteering"
        className="py-24"
        aria-labelledby="volunteering-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Volunteering" variant="accent" />
            <h2 id="volunteering-heading" className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">Giving back to the community</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
              <Image
                src="/images/volunteering-community.png"
                alt="Community volunteering and humanitarian work"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="lg:col-span-3 flex flex-col gap-8">
              {volunteering.map((vol) => (
                <div
                  key={vol.id}
                  className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{vol.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-slate-700 dark:text-slate-200">{vol.organization}</span>
                      <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">&middot;</span>
                      <span>
                        {new Date(vol.startDate).getFullYear()}&ndash;{vol.endDate ? new Date(vol.endDate).getFullYear() : "Present"}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{vol.description}</p>
                  <ul className="space-y-1.5">
                    {(vol.highlights ?? []).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <SectionLabel text="Get In Touch" />
            <h2 id="contact-heading" className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Let&apos;s build something great together
            </h2>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Open to new opportunities in cloud data engineering and distributed data platforms. Feel free to reach out directly.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {contact
              .filter((c) => c.icon === "mail" || c.icon === "linkedin")
              .map((c) => (
              <Link
                key={c.type}
                href={c.href!}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex w-full max-w-xs flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-200 sm:w-auto sm:min-w-[14rem]"
              >
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors shrink-0">
                  {c.icon === "mail" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  )}
                  {c.icon === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  )}
                </span>
                <div className="flex flex-col items-center min-w-0">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{c.type}</span>
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{c.value}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-center">
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Hussein Maatouk &mdash; Cloud Data Engineer &middot; AI Practitioner
        </p>
      </footer>
    </main>
  );
}