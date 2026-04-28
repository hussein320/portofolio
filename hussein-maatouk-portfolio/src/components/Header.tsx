"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sections = navigationItems.map((item) => item.href.replace("#", ""));
    let current = "hero";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) {
          current = id;
        }
      }
    }
    setActiveSection(`#${current}`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-b border-slate-200/80 shadow-sm py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="group flex flex-col leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-sm"
            aria-label="Hussein Maatouk — home"
          >
            <span
              className={cn(
                "font-bold tracking-tight transition-colors duration-300 text-lg",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              Hussein Maatouk
            </span>
            <span
              className={cn(
                "text-xs font-medium tracking-widest uppercase transition-colors duration-300",
                scrolled ? "text-indigo-600" : "text-indigo-300"
              )}
            >
              Data Analyst · BI Engineer
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                  activeSection === item.href
                    ? scrolled
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-white bg-white/15"
                    : scrolled
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 shadow-sm hover:shadow-md active:scale-95",
                scrolled
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white text-indigo-700 hover:bg-indigo-50"
              )}
            >
              Get in Touch
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-base tracking-tight">
              Hussein Maatouk
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile primary navigation"
            className="flex-1 flex flex-col px-4 py-6 gap-1 overflow-y-auto"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  activeSection === item.href
                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-8">
            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="flex items-center justify-center w-full px-5 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
