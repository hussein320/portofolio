export type NavItem = {
  label: string;
  href: string;
};

export type ContactDetail = {
  type: string;
  value: string;
  href?: string;
  icon?: string;
};

export type LanguageProficiency = {
  language: string;
  level: string;
};

export type StatItem = {
  label: string;
  value: string | number;
};

export type ProfileSummary = {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  contact: ContactDetail[];
  languages: LanguageProficiency[];
  stats: StatItem[];
};

export type ExperienceBullet = {
  text: string;
};

export type ExperienceRole = {
  title: string;
  employmentType?: string;
  startDate: string;
  endDate: string | null;
  summary?: string;
  bullets: ExperienceBullet[];
};

export type ExperienceEntry = {
  id: string;
  company: string;
  // Square logo under /public, shown in a small tile.
  logo?: string;
  role: string;
  employmentType?: string;
  startDate: string;
  endDate: string | null;
  location?: string;
  workMode?: string;
  summary?: string;
  bullets: ExperienceBullet[];
  // Earlier positions held at the same company, most recent first.
  previousRoles?: ExperienceRole[];
  tags: string[];
};

export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  location?: string;
  description?: string;
  achievements?: string[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  links?: ProjectLink[];
  imageUrl?: string;
  startDate?: string;
  endDate?: string | null;
};

export type SkillItem = {
  name: string;
  level?: number;
};

export type SkillCategory = {
  id: string;
  category: string;
  skills: SkillItem[];
};

export type VolunteerEntry = {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description?: string;
  highlights?: string[];
};

export type HighlightItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
};

export type PortfolioData = {
  navigation: NavItem[];
  profile: ProfileSummary;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  projects: ProjectEntry[];
  skills: SkillCategory[];
  volunteering?: VolunteerEntry[];
  highlights?: HighlightItem[];
};
