import type { PortfolioData } from "@/types/profile";

const profileData: PortfolioData = {
  navigation: [
    { label: "Profile", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Volunteering", href: "#volunteering" },
    { label: "Contact", href: "#contact" }
  ],
  profile: {
    name: "Hussein Maatouk",
    title: "Cloud Data Engineer",
    bio: "Cloud data engineer with a Cum Laude honours degree in Geographic Information Systems and hands-on experience building scalable pipelines, orchestrating workloads on cloud platforms, and turning large datasets into reliable analytics foundations. Focused on end-to-end data engineering across distributed systems, geospatial analytics, and applied AI.",
    avatarUrl: "/avatar.jpg",
    contact: [
      { type: "Email", value: "husseinmaatouk506@gmail.com", href: "mailto:husseinmaatouk506@gmail.com", icon: "mail" },
      { type: "Location", value: "Italy", icon: "map-pin" },
      { type: "Nationality", value: "Lebanese", icon: "flag" },
      { type: "LinkedIn", value: "linkedin.com/in/hussein-maatouk-0032a51a6", href: "https://www.linkedin.com/in/hussein-maatouk-0032a51a6/", icon: "linkedin" }
    ],
    languages: [
      { language: "Arabic", level: "Native" },
      { language: "English", level: "Professional Proficiency" },
      { language: "French", level: "Intermediate" }
    ],
    stats: [
      { label: "GPA Honours", value: "Cum Laude" },
      { label: "Languages", value: 3 },
      { label: "Tree Records Explored", value: "5M+" },
      { label: "Core Domains", value: "Cloud · Data Engineering · AI · Geospatial" }
    ]
  },
  experience: [
    {
      id: "exp-1",
      company: "Lebanese Agricultural Research Institute (LARI)",
      role: "GIS & Data Analyst",
      startDate: "2022-01",
      endDate: null,
      location: "Lebanon",
      bullets: [
        { text: "Processed and analysed over 5 million tree records from national forestry datasets using spatial SQL and Python." },
        { text: "Built interactive geospatial dashboards to communicate land-cover change and forest health metrics to stakeholders." },
        { text: "Automated recurring ETL pipelines reducing manual data preparation time by 60%." },
        { text: "Collaborated with research teams to model deforestation risk using satellite imagery and machine learning classifiers." },
        { text: "Produced high-quality cartographic outputs and technical reports for government and international bodies." }
      ],
      tags: ["GIS", "Python", "SQL", "Remote Sensing", "ETL", "Data Visualisation"]
    },
    {
      id: "exp-2",
      company: "Freelance & Consulting",
      role: "BI Developer & Data Consultant",
      startDate: "2021-06",
      endDate: null,
      location: "Remote",
      bullets: [
        { text: "Designed and delivered Power BI and Tableau dashboards for SME clients across retail, logistics, and agriculture sectors." },
        { text: "Implemented cloud-based data solutions on Azure, including Data Factory pipelines and Synapse Analytics workspaces." },
        { text: "Advised clients on data governance frameworks and KPI strategy aligned with business objectives." },
        { text: "Integrated AI-powered analytics using Azure Cognitive Services and OpenAI APIs for predictive reporting use cases." }
      ],
      tags: ["Power BI", "Tableau", "Azure", "Data Factory", "Synapse", "OpenAI"]
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Lebanese University — Faculty of Engineering",
      degree: "Bachelor of Engineering",
      field: "Geographic Information Systems (GIS)",
      startDate: "2018-09",
      endDate: "2022-06",
      location: "Lebanon",
      description: "Graduated Cum Laude with honours. Coursework spanned spatial databases, remote sensing, cartography, programming, and urban planning analytics.",
      achievements: [
        "Graduated Cum Laude — top academic distinction",
        "Final year thesis on automated forest cover classification using deep learning and Sentinel-2 imagery",
        "Recipient of faculty merit recognition for academic excellence"
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "National Forest Inventory Dashboard",
      description: "End-to-end BI solution built to visualise over 5 million tree-level records across Lebanon. Integrated spatial joins, species classification, and temporal trend analysis in an interactive Power BI report connected to a PostGIS backend.",
      tags: ["Power BI", "PostGIS", "Python", "ETL", "Geospatial"],
      featured: true,
      startDate: "2022-03",
      endDate: null
    },
    {
      id: "proj-2",
      title: "Cloud BI Migration — Azure Synapse",
      description: "Migrated a regional SME's on-premise SQL Server reporting stack to Azure Synapse Analytics with automated ADF pipelines, reducing reporting latency from 24 hours to near real-time.",
      tags: ["Azure", "Synapse Analytics", "ADF", "SQL Server", "Power BI"],
      featured: true,
      startDate: "2023-01",
      endDate: "2023-08"
    },
    {
      id: "proj-3",
      title: "AI-Powered Sales Forecasting Tool",
      description: "Developed a forecasting module using Azure Machine Learning and OpenAI function-calling to generate plain-language weekly sales narratives for a retail client, embedded directly into their Power BI workspace.",
      tags: ["Azure ML", "OpenAI", "Power BI", "Python", "Forecasting"],
      featured: true,
      startDate: "2023-09",
      endDate: "2024-02"
    },
    {
      id: "proj-4",
      title: "Deforestation Risk Modelling",
      description: "Applied supervised machine learning classifiers (Random Forest, XGBoost) on multi-temporal Sentinel-2 composites to produce a national-scale deforestation risk probability map used in policy planning.",
      tags: ["Python", "Scikit-learn", "XGBoost", "Remote Sensing", "GIS"],
      featured: false,
      startDate: "2022-09",
      endDate: "2023-04"
    }
  ],
  skills: [
    {
      id: "skill-1",
      category: "Business Intelligence & Visualisation",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 80 },
        { name: "DAX", level: 90 },
        { name: "Looker Studio", level: 70 }
      ]
    },
    {
      id: "skill-2",
      category: "Data Engineering & Cloud",
      skills: [
        { name: "Azure Data Factory", level: 85 },
        { name: "Azure Synapse Analytics", level: 80 },
        { name: "Azure Blob Storage", level: 80 },
        { name: "SQL Server", level: 90 },
        { name: "PostgreSQL / PostGIS", level: 90 }
      ]
    },
    {
      id: "skill-3",
      category: "Programming & Scripting",
      skills: [
        { name: "Python", level: 88 },
        { name: "SQL", level: 95 },
        { name: "R", level: 65 },
        { name: "Bash / Shell", level: 60 }
      ]
    },
    {
      id: "skill-4",
      category: "AI & Machine Learning",
      skills: [
        { name: "Azure Machine Learning", level: 75 },
        { name: "OpenAI API", level: 80 },
        { name: "Scikit-learn", level: 78 },
        { name: "XGBoost", level: 72 }
      ]
    },
    {
      id: "skill-5",
      category: "Geospatial & Remote Sensing",
      skills: [
        { name: "QGIS", level: 92 },
        { name: "ArcGIS", level: 85 },
        { name: "GDAL / OGR", level: 80 },
        { name: "Sentinel Hub", level: 70 }
      ]
    }
  ],
  volunteering: [
    {
      id: "vol-1",
      organization: "Lebanese Red Cross",
      role: "Field Volunteer & Data Coordinator",
      startDate: "2019-06",
      endDate: null,
      description: "Active volunteer contributing to humanitarian field operations and internal data coordination. Supported the digitisation and mapping of relief distribution routes across vulnerable communities.",
      highlights: [
        "Mapped emergency relief routes using open-source GIS tools",
        "Coordinated data entry and validation for beneficiary records",
        "Participated in first-aid training and field deployment exercises"
      ]
    },
    {
      id: "vol-2",
      organization: "Reforestation Lebanon Initiative",
      role: "GIS Volunteer Analyst",
      startDate: "2021-03",
      endDate: "2022-11",
      description: "Contributed geospatial analysis and mapping support to a national reforestation campaign, helping identify optimal planting sites and track restoration progress over time.",
      highlights: [
        "Produced site-suitability maps for reforestation planning",
        "Tracked canopy regrowth using multi-temporal satellite imagery",
        "Delivered training sessions on basic GIS workflows to field teams"
      ]
    }
  ],
  highlights: [
    {
      id: "hl-1",
      title: "5M+ Tree Records Explored",
      description: "Led spatial analysis and dashboard development for Lebanon's national forest inventory, processing over five million individual tree-level records from field surveys and remote sensing fusion.",
      icon: "tree",
      tags: ["GIS", "PostGIS", "Power BI"]
    },
    {
      id: "hl-2",
      title: "Cum Laude Graduate",
      description: "Earned top academic honours in Geographic Information Systems Engineering, with a thesis focused on deep learning-based forest cover classification using satellite imagery.",
      icon: "award",
      tags: ["GIS", "Academia", "Deep Learning"]
    },
    {
      id: "hl-3",
      title: "Cloud BI Transformation",
      description: "Architected and delivered a full cloud migration of a legacy reporting stack to Azure Synapse, cutting reporting latency from 24 hours to near real-time for a regional enterprise client.",
      icon: "cloud",
      tags: ["Azure", "Synapse", "Power BI"]
    },
    {
      id: "hl-4",
      title: "AI-Augmented Reporting",
      description: "Integrated OpenAI function-calling with Azure ML to generate contextual plain-language sales narratives embedded inside client Power BI workspaces — bridging the last mile between data and decision.",
      icon: "sparkles",
      tags: ["OpenAI", "Azure ML", "Power BI"]
    }
  ]
};

export default profileData;
