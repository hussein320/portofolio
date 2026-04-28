import type { EducationEntry } from "@/types/profile";

export const education: EducationEntry[] = [
  {
    id: "msc-data-science-ai",
    institution: "University of Genoa",
    degree: "Master of Science",
    field: "Data Science and Artificial Intelligence",
    startDate: "2022-09",
    endDate: "2024-10",
    location: "Genoa, Italy",
    description: "Graduated with 110/110 Cum Laude. Focused on the theoretical foundations and practical applications of modern machine learning, AI systems, and data engineering across diverse domains.",
    achievements: [
      "Statistical learning and probabilistic modelling for high-dimensional data analysis",
      "Deep learning architectures including CNNs, RNNs, transformers, and generative models",
      "Computer vision techniques for image segmentation, object detection, and visual understanding",
      "Large language models, prompt engineering, and retrieval-augmented generation pipelines",
      "Signal processing and time-series analysis for real-world sensor and audio data",
      "Distributed computing and scalable data pipelines using cloud-native frameworks",
      "Data visualisation and exploratory analysis for communicating analytical narratives",
      "Trustworthy AI principles covering fairness, explainability, robustness, and privacy",
      "Predictive analytics and decision-support systems for business and scientific contexts"
    ]
  },
  {
    id: "bsc-computer-science",
    institution: "Lebanese International University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2018-09",
    endDate: "2022-06",
    location: "Beirut, Lebanon",
    description: "Comprehensive undergraduate programme covering core computer science disciplines including algorithms, data structures, software engineering, databases, networking, and operating systems.",
    achievements: [
      "Solid grounding in algorithms, complexity theory, and software design patterns",
      "Hands-on experience with relational databases, web development, and systems programming",
      "Capstone project integrating full-stack development with data-driven features"
    ]
  },
  {
    id: "general-trainer-course",
    institution: "Lebanese Red Cross",
    degree: "General Trainer Course",
    field: "Training Methodology and Facilitation",
    startDate: "2020-06",
    endDate: "2020-08",
    location: "Beirut, Lebanon",
    description: "Certified training programme developing competencies in instructional design, adult learning principles, facilitation techniques, and effective communication for humanitarian and community-oriented contexts.",
    achievements: [
      "Instructional design and structured curriculum development for diverse audiences",
      "Facilitation and presentation skills for group training sessions",
      "Application of adult learning principles in volunteer and community programmes"
    ]
  }
];
