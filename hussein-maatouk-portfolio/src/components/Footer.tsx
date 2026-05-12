"use client";
import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import profileData from "@/data/profile";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { profile } = profileData;
  const email = profile.contact.find((c) => c.type === "Email");
  const location = profile.contact.find((c) => c.type === "Location");
  const linkedin = profile.contact.find((c) => c.type === "LinkedIn");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">Identity</p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                {profile.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500 font-medium">{profile.title}</p>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Turning complex data into clarity — one dashboard, one insight, one decision at a time.
            </p>
            {linkedin?.href && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 group w-fit"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 group-hover:bg-blue-100 transition-colors duration-200">
                  <FaLinkedinIn className="w-4 h-4" />
                </span>
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-1">Contact</p>
            <ul className="flex flex-col gap-4">
              {email?.href && (
                <li>
                  <a
                    href={email.href}
                    aria-label="Send email"
                    className="group flex items-start gap-3 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-slate-400 group-hover:text-blue-500 transition-colors duration-200">
                      <FiMail className="w-4 h-4" />
                    </span>
                    <span className="font-medium break-all">{email.value}</span>
                  </a>
                </li>
              )}
              {location && (
                <li>
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex-shrink-0 text-slate-400">
                      <FiMapPin className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{location.value}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 text-center sm:text-right">
            Designed with precision &mdash; Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
