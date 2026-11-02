import type { ExperienceEntry } from "@/types/profile";

export const experience: ExperienceEntry[] = [
  {
    id: "horsa-big-data-cloud",
    company: "Horsa Insight",
    logo: "/images/logos/horsa-insight.png",
    role: "Cloud Data Engineer",
    employmentType: "Full-time",
    startDate: "2025-11",
    endDate: null,
    location: "Turin, Italy",
    workMode: "Hybrid",
    summary: "Consultant on a global Customer Data Platform for a major international retail group, built on Google Cloud. The platform brings customer data from across the group's brands into a single, trusted view for CRM and marketing teams.",
    bullets: [
      { text: "Build and maintain Airflow workflows on Cloud Composer to orchestrate data ingestion, transformation and delivery." },
      { text: "Develop layered BigQuery transformations with Dataform, turning raw data into clean, business-ready tables." },
      { text: "Build batch and real-time ingestion pipelines on Google Cloud, using Pub/Sub, Kafka and Dataflow." },
      { text: "Deploy and maintain data models across development, test and production environments, in line with data residency requirements." },
      { text: "Support GDPR compliance by handling data subject requests and maintaining privacy and access controls." },
      { text: "Investigate and resolve production data issues, from root-cause analysis to deployed fixes." },
      { text: "Collaborate in a multi-vendor team using GitLab CI/CD, merge requests and code reviews." }
    ],
    tags: ["Google Cloud", "BigQuery", "Dataform", "Apache Airflow", "Cloud Composer", "Pub/Sub", "Kafka", "Dataflow", "Cloud Functions", "GitLab CI/CD", "GDPR"]
  },
  {
    id: "visualitics-data-platform",
    company: "Visualitics",
    logo: "/images/logos/visualitics.png",
    role: "Data Platform Engineer – Tableau",
    employmentType: "Full-time",
    startDate: "2025-04",
    endDate: "2025-10",
    location: "Turin, Italy",
    bullets: [
      { text: "Led migration of Tableau Server content and data sources to Tableau Cloud, using Python and SQL-based scripting." },
      { text: "Collaborated with stakeholders to gather requirements and translate business needs into scalable BI solutions across multiple client engagements." }
    ],
    previousRoles: [
      {
        title: "Data Platform Engineer Intern",
        employmentType: "Internship",
        startDate: "2024-10",
        endDate: "2025-03",
        bullets: [
          { text: "Architected and deployed Tableau Server environments, delivering interactive dashboards that translated complex datasets into actionable business insights." },
          { text: "Built and optimized data models in PostgreSQL, designing schema structures that supported high-performance analytical queries for client reporting." },
          { text: "Developed Python-based automation scripts for data extraction, transformation, and loading, streamlining recurring reporting workflows." }
        ]
      }
    ],
    tags: ["Tableau Server", "Tableau Cloud", "Python", "SQL", "PostgreSQL", "Data Modeling", "ETL"]
  },
  {
    id: "unige-master-thesis",
    company: "University of Genoa",
    logo: "/images/logos/unige.png",
    role: "Data Science Researcher – Geospatial Data & ML",
    employmentType: "Full-time",
    startDate: "2024-04",
    endDate: "2025-03",
    location: "Genoa, Italy",
    summary: "Fairness-aware geospatial data processing.",
    bullets: [
      { text: "Researched and implemented fairness-aware preprocessing techniques for geospatial datasets, addressing bias in location-based machine learning models." },
      { text: "Leveraged PostGIS and PostgreSQL to store, query, and analyze large-scale spatial datasets, enabling reproducible geospatial experiments." },
      { text: "Developed Python pipelines for spatial feature engineering, bias detection, and fairness metric evaluation across geographic data distributions." },
      { text: "Produced academic findings on ethical AI implications in geospatial contexts, contributing novel insights to responsible data science research." }
    ],
    tags: ["Python", "PostGIS", "PostgreSQL", "Geospatial Analysis", "Fairness-Aware ML", "ETL", "Visualization", "Research"]
  }
];
