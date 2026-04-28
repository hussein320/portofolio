import type { ExperienceEntry } from "@/types/profile";

export const experience: ExperienceEntry[] = [
  {
    id: "horsa-big-data-cloud",
    company: "Horsa",
    role: "Big Data & Cloud Engineer",
    startDate: "2024-01",
    endDate: null,
    location: "Turin, Italy",
    bullets: [
      { text: "Designed and maintained scalable ELT pipelines using dbt and Dataform, enabling reliable data transformation across multi-source cloud environments." },
      { text: "Orchestrated end-to-end data workflows with Apache Airflow and Kafka, reducing pipeline latency and improving fault tolerance across distributed systems." },
      { text: "Integrated REST APIs and automated ingestion routines to connect disparate enterprise data sources into unified analytical layers." },
      { text: "Collaborated on CI/CD practices for data pipeline deployments, ensuring version-controlled, reproducible transformations in cloud-native stacks." },
      { text: "Contributed to cloud architecture decisions supporting business intelligence reporting and near-real-time analytics for enterprise clients." }
    ],
    tags: ["dbt", "Dataform", "Apache Airflow", "Kafka", "REST APIs", "CI/CD", "Cloud Engineering", "ELT Pipelines"]
  },
  {
    id: "visualitics-bi-architect-intern",
    company: "Visualitics",
    role: "BI Architect Intern",
    startDate: "2023-04",
    endDate: "2023-12",
    location: "Turin, Italy",
    bullets: [
      { text: "Architected and deployed Tableau Server environments, delivering interactive dashboards that translated complex datasets into actionable business insights." },
      { text: "Built and optimized data models in PostgreSQL, designing schema structures that supported high-performance analytical queries for client reporting." },
      { text: "Developed Python-based automation scripts for data extraction, transformation, and loading, streamlining recurring reporting workflows." },
      { text: "Collaborated with stakeholders to gather requirements and translate business needs into scalable BI solutions across multiple client engagements." }
    ],
    tags: ["Tableau Server", "PostgreSQL", "Python", "BI Architecture", "Data Modeling", "ETL"]
  },
  {
    id: "unige-master-thesis",
    company: "University of Genova",
    role: "Master Thesis Researcher — Fairness-Aware Geospatial Data Preprocessing",
    startDate: "2022-10",
    endDate: "2023-03",
    location: "Genova, Italy",
    bullets: [
      { text: "Researched and implemented fairness-aware preprocessing techniques for geospatial datasets, addressing bias in location-based machine learning models." },
      { text: "Leveraged PostGIS and PostgreSQL to store, query, and analyze large-scale spatial datasets, enabling reproducible geospatial experiments." },
      { text: "Developed Python pipelines for spatial feature engineering, bias detection, and fairness metric evaluation across geographic data distributions." },
      { text: "Produced academic findings on ethical AI implications in geospatial contexts, contributing novel insights to responsible data science research." }
    ],
    tags: ["Python", "PostGIS", "PostgreSQL", "Geospatial Analysis", "Fairness-Aware ML", "Data Preprocessing", "Research"]
  }
];
