import type { ProjectEntry } from "@/types/profile";

const projects: ProjectEntry[] = [
  {
    id: "techeur-insights",
    title: "TechEUR_Insights",
    description: "An end-to-end data engineering and visualization project exploring European tech industry trends. Involved exploratory data analysis and data cleaning in Python, data transformation pipelines, REST API integration, and JSON dataset creation. Implemented a fully interactive web application using HTML, CSS, and JavaScript featuring custom SVG visualizations including bar charts, stacked bar charts, heatmaps, Sankey diagrams, line charts, and scatter plots. Incorporates a PowerBI dashboard for executive-level reporting. Built on the 5-million-trees open dataset context to benchmark environmental impact alongside workforce metrics.",
    tags: ["Python","JavaScript","HTML","CSS","SVG","REST API","JSON","PowerBI","Data Analysis","Data Cleaning","EDA","Data Visualization"],
    featured: true,
    links: [
      {
        label: "Live Project",
        url: "https://diogosantos41.github.io/TechEUR_Insights/"
      }
    ],
    imageUrl: "/images/project-techeur-insights.png"
  },
  {
    id: "jade-supply-chain",
    title: "Jade Java-Infused Supply Chain Optimization Using Multiagent Systems Technologies",
    description: "Designed and implemented a multiagent system using the JADE framework in Java to optimize supply chain logistics. Agents autonomously negotiate, coordinate, and allocate resources across a simulated supply chain, demonstrating how distributed intelligence reduces bottlenecks and improves throughput.",
    tags: ["Java","JADE","Multiagent Systems","Supply Chain","Optimization","Distributed Systems"],
    featured: false
  },
  {
    id: "sql-vs-pyspark",
    title: "Syntactic Analysis: SQL versus PySpark",
    description: "A comparative syntactic and performance analysis of SQL and PySpark for large-scale data processing tasks. Evaluated query expressiveness, readability, execution plans, and scalability across equivalent data transformation scenarios to guide technology selection in data engineering pipelines.",
    tags: ["SQL","PySpark","Apache Spark","Big Data","Data Engineering","Performance Analysis"],
    featured: false
  },
  {
    id: "rasa-chatbot-sql",
    title: "RASA Powered Chatbot Data Querying: An Intuitive SQL Alternative For Non-Programmers",
    description: "Built a conversational AI interface using RASA that translates natural language queries into SQL statements, enabling non-technical users to interact with relational databases without programming knowledge. Covers intent recognition, entity extraction, dialogue management, and dynamic query generation.",
    tags: ["RASA","NLP","Chatbot","SQL","Python","Natural Language Processing","Conversational AI","Dialogue Management"],
    featured: false
  },
  {
    id: "image-captioning",
    title: "Image Captioning Generation: Conductive Study and Experimental Analysis",
    description: "Conducted a comprehensive study and experimental analysis of image captioning models, benchmarking encoder-decoder architectures with attention mechanisms across standard datasets. Evaluated caption quality using BLEU and METEOR metrics and analyzed the impact of visual feature extraction strategies on generation accuracy.",
    tags: ["Python","Deep Learning","Computer Vision","NLP","CNN","LSTM","Attention Mechanism","BLEU","METEOR","Image Captioning"],
    featured: false
  }
];

export default projects;