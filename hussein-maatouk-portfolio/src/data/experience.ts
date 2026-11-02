import type { ExperienceEntry } from "@/types/profile";

export const experience: ExperienceEntry[] = [
  {
    id: "horsa-big-data-cloud",
    company: "Horsa",
    role: "Big Data & Cloud Engineer",
    employmentType: "Full-time",
    startDate: "2025-11",
    endDate: null,
    location: "Turin, Italy",
    workMode: "Hybrid",
    summary: "Consultant on the global CRM / Customer Data Platform of a major international eyewear and retail group, running on Google Cloud across two regional platforms, EMEA and US. The platform unifies customer, order and consent data from all the group's brands into one view of each customer for CRM and marketing teams.",
    bullets: [
      { text: "Build and maintain Airflow DAGs on Cloud Composer for ingestion, transformations, exports and monitoring." },
      { text: "Create and develop Dataform jobs across the Bronze → Silver → Gold layers in BigQuery, covering data cleansing, customer matching and business-ready tables." },
      { text: "Develop ingestion pipelines for batch files and real-time events (Cloud Functions, Pub/Sub, Kafka, Dataflow)." },
      { text: "Deploy and maintain BigQuery tables and views on both the EMEA and US environments, across dev, UAT and prod, following each region's data residency rules." },
      { text: "Handle GDPR requests (data erasure and access) and maintain privacy controls such as policy tags, row-level security and data masking." },
      { text: "Analyze and resolve support tickets: investigate pipeline failures and data issues, find the root cause and ship fixes to production." },
      { text: "Work in a multi-vendor team using GitLab CI/CD, merge requests and code reviews." }
    ],
    tags: ["Google Cloud", "BigQuery", "Dataform", "Apache Airflow", "Cloud Composer", "Pub/Sub", "Kafka", "Dataflow", "Cloud Functions", "GitLab CI/CD", "GDPR"]
  },
  {
    id: "visualitics-data-platform",
    company: "Visualitics",
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
