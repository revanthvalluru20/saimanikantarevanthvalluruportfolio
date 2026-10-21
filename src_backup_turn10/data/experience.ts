import { ExperienceItem, EducationItem, CertificationItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: "destini-internship",
    role: "Full Stack Developer Intern",
    company: "Destini.ai",
    location: "Remote / Hybrid",
    period: "October 2025 — Present",
    status: "CURRENTLY ACTIVE",
    type: "Internship",
    description: "Contributing to web and mobile engineering across the Destini.ai platform, implementing multilingual support, payout authentication, and administrative tooling.",
    responsibilities: [
      "Improving application UI/UX and workflows using React.js.",
      "Converting an existing web application into an Android application using React Native.",
      "Implementing multilingual support using i18n and Azure AI Translation Services.",
      "Developing a payout system with SSO-based authentication and backend API integration.",
      "Building an Admin Panel with React.js and backend API integration."
    ],
    techStack: [
      "React.js",
      "React Native",
      "JavaScript",
      "i18n",
      "Azure AI Translation Services",
      "SSO",
      "REST APIs",
      "Node.js"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "vit-ap-btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "VIT-AP University, Amaravati",
    score: "8.45 CGPA",
    period: "2021 — 2025",
    highlights: [
      "Comprehensive coursework in Data Structures, Algorithms, Web Engineering, and Database Systems.",
      "Participated in full-stack development and algorithmic challenges."
    ]
  },
  {
    id: "narayana-intermediate",
    degree: "Intermediate Education",
    field: "MPC (Mathematics, Physics, Chemistry)",
    institution: "Narayana Junior College, Vijayawada",
    score: "88.6%",
    period: "Completed",
    highlights: [
      "Strong analytical foundation in mathematics and analytical sciences."
    ]
  },
  {
    id: "narayana-secondary",
    degree: "Secondary Education (Class X)",
    field: "General Curriculum",
    institution: "Narayana E-Techno Schools, Vijayawada",
    score: "9.5 CGPA",
    period: "Completed",
    highlights: [
      "Foundational mathematics, science, and computing fundamentals."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "ethnus-mern",
    title: "MERN Full Stack Certification and Externship",
    issuer: "Ethnus",
    period: "August 2023 — November 2023",
    description: "Hands-on training and project implementation covering MongoDB, Express.js, React.js, and Node.js full-stack development."
  },
  {
    id: "smartinternz-analytics",
    title: "Data Analytics Certification and Externship",
    issuer: "SmartInternz",
    period: "August 2023 — December 2023",
    description: "Practical curriculum focused on exploratory data analysis, dataset preprocessing, and interactive dashboard creation using Tableau."
  }
];
