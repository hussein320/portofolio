import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import TimelineItem from "@/components/TimelineItem";
import InfoCard from "@/components/InfoCard";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import projects from "@/data/projects";
import { skillCategories, languages } from "@/data/skills";
import profileData from "@/data/profile";

export default function Page() {
  const volunteering = profileData.volunteering ?? [];
  const contact = profileData.profile.contact;
  const featuredProject = projects.find((p) => p.featured) ?? projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <main className="bg-white text-slate-900 antialiased overflow-x-hidden">
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 pt-20 pb-40"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-32 right-32 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-3xl" />
          <div className="absolute bottom-0 left-20 w-[400px] h-[400px] rounded-full bg-violet-100/30 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 w-fit">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600">Available for opportunities</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-slate-900">
              Hussein<br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Maatouk</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed max-w-lg">
              Cloud Data Engineer &middot; AI&nbsp;&amp;&nbsp;ML Practitioner
            </p>
            <p className="text-base text-slate-600 leading-relaxed max-w-lg">
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200 to-violet-200 rotate-3 scale-105 opacity-60" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-indigo-100 to-sky-100 -rotate-2 opacity-40" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/80">
                <Image
                  src="/images/my_pic.jpeg"
                  alt="Hussein Maatouk &mdash; Cloud Data Engineer"
                  fill
                  sizes="(max-width:768px) 320px, (max-width:1024px) 384px, 440px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">MSc Grade</p>
                <p className="text-2xl font-extrabold text-slate-900">110<span className="text-indigo-500">/110</span></p>
                <p className="text-xs text-slate-500 font-medium">Cum Laude</p>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "110/110", label: "MSc Cum Laude", sub: "University of Genoa · Based in Italy" },
            { value: "3+", label: "Years Experience", sub: "Cloud Data Engineering" },
            { value: "5M+", label: "Data Records", sub: "Processed & Analysed" },
            { value: "3", label: "Languages", sub: "Arabic · English · Italian" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-100 bg-white px-5 py-5 shadow-lg shadow-slate-200/60 flex flex-col gap-1"
            >
              <span className="text-3xl font-extrabold text-indigo-600 leading-none">{stat.value}</span>
              <span className="text-sm font-bold text-slate-800 mt-1">{stat.label}</span>
              <span className="text-xs text-slate-400">{stat.sub}</span>
            </div>
          ))}
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
            <h2 id="profile-heading" className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Turning complex data into<br />
              <span className="text-indigo-600">strategic decisions</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              I am a Cloud Data Engineer with hands-on expertise in designing end-to-end ELT pipelines, orchestrating distributed workflows, and building reliable data platforms that transform large-scale datasets into actionable intelligence. My academic background &mdash; an MSc in Data Science and AI with honours &mdash; underpins a rigorous, research-informed approach to engineering.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              I thrive at the intersection of cloud infrastructure, machine learning, and data engineering &mdash; building systems that are not only technically sound but genuinely useful to the people who depend on data every day.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Apache Kafka", "Apache Airflow", "dbt", "Dataform", "BigQuery", "GCP", "PySpark", "Tableau", "Python", "SQL"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col gap-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Contact Details</h3>
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
                      <span className="text-xs text-slate-400 font-medium">{c.type}</span>
                      {c.href ? (
                        <Link href={c.href} className="text-sm text-slate-700 font-medium hover:text-indigo-600 transition-colors">
                          {c.value}
                        </Link>
                      ) : (
                        <span className="text-sm text-slate-700 font-medium">{c.value}</span>
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
        className="bg-slate-50/60 py-24"
        aria-labelledby="experience-heading"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Professional Experience" variant="accent" />
            <h2 id="experience-heading" className="text-4xl font-extrabold tracking-tight text-slate-900">Where I have made an impact</h2>
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
            <h2 id="research-heading" className="text-4xl font-extrabold tracking-tight text-slate-900">Fairness-Aware Geospatial Research</h2>
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
                <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-indigo-700 shadow">
                  MSc Thesis &mdash; University of Genova
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 w-fit">
                <span className="text-amber-600 font-bold text-sm">110/110</span>
                <span className="text-xs font-semibold text-amber-700">Cum Laude Honours</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">Fairness-Aware Geospatial Data Preprocessing</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Researched and implemented fairness-aware preprocessing techniques for geospatial datasets, addressing spatial bias in location-based machine learning models. Leveraged PostGIS and PostgreSQL for large-scale spatial analysis, and developed Python pipelines for feature engineering, bias detection, and fairness metric evaluation.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Produced academic findings on ethical AI implications in geospatial contexts, contributing novel insights to responsible data science &mdash; a domain increasingly critical as AI systems influence real-world spatial decision-making.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "PostGIS", "PostgreSQL", "Geospatial Analysis", "Fairness-Aware ML", "Ethical AI", "Research"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
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
        className="bg-slate-50/60 py-24"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Projects" variant="accent" />
            <h2 id="projects-heading" className="text-4xl font-extrabold tracking-tight text-slate-900">Selected work &amp; builds</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <InfoCard
                title={featuredProject.title}
                description={featuredProject.description}
                tags={featuredProject.tags.slice(0, 6)}
                link={featuredProject.links?.[0]}
                imagePath="/images/project-techeur-insights.png"
                imageAlt={featuredProject.title}
                variant="featured"
                className="h-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              {otherProjects.slice(0, 2).map((project) => (
                <InfoCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags.slice(0, 4)}
                  link={project.links?.[0]}
                  variant="standard"
                  className="flex-1"
                />
              ))}
            </div>
          </div>
          {otherProjects.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {otherProjects.slice(2).map((project) => (
                <InfoCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags.slice(0, 4)}
                  link={project.links?.[0]}
                  variant="compact"
                />
              ))}
            </div>
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
            <h2 id="education-heading" className="text-4xl font-extrabold tracking-tight text-slate-900">Academic foundation</h2>
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
        className="bg-slate-50/60 py-24"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-3 mb-14">
            <SectionLabel text="Skills & Languages" variant="accent" />
            <h2 id="skills-heading" className="text-4xl font-extrabold tracking-tight text-slate-900">Technical expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-colors duration-150"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-violet-50/40 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-6">Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {languages.map((lang) => (
                <div key={lang.language} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">{lang.language}</span>
                  </div>
                  <span className="text-sm text-slate-500">{lang.level}</span>
                  <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
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
            <h2 id="volunteering-heading" className="text-4xl font-extrabold tracking-tight text-slate-900">Giving back to the community</h2>
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
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="text-base font-bold text-slate-900">{vol.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="font-medium text-slate-700">{vol.organization}</span>
                      <span className="text-slate-300" aria-hidden="true">&middot;</span>
                      <span>
                        {new Date(vol.startDate).getFullYear()}&ndash;{vol.endDate ? new Date(vol.endDate).getFullYear() : "Present"}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{vol.description}</p>
                  <ul className="space-y-1.5">
                    {(vol.highlights ?? []).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
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
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s build something great together
            </h2>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Open to new opportunities in cloud data engineering and distributed data platforms. Feel free to reach out directly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {contact.filter((c) => c.href).map((c) => (
              <Link
                key={c.type}
                href={c.href!}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-200"
              >
                <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors shrink-0">
                  {c.icon === "mail" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  )}
                  {c.icon === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  )}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{c.type}</span>
                  <span className="text-sm font-semibold text-white truncate group-hover:text-indigo-300 transition-colors">{c.value}</span>
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