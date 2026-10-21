import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    skills: [
      {
        name: "Python",
        description: "Data manipulation, analytical workflows, data cleaning, and statistical exploration.",
        evidence: "Cardiovascular Risk Analytics data preprocessing with Pandas and NumPy."
      },
      {
        name: "JavaScript",
        description: "Core asynchronous programming, ES6+ features, client logic, and runtime scripting.",
        evidence: "Full-stack development across VibeVerse, MentorAI-CodeSpace, and Destini.ai."
      },
      {
        name: "R",
        description: "Statistical computation, exploratory data analysis, and visual data representation.",
        evidence: "Applied in data analytics coursework and academic statistical modeling."
      },
      {
        name: "HTML",
        description: "Semantic document structure, web standards, and accessible markup.",
        evidence: "Structured accessible web layouts across all web and mobile web projects."
      },
      {
        name: "CSS",
        description: "Responsive layouts, Flexbox, Grid, custom styling, and modern UI presentation.",
        evidence: "Tailwind CSS styling in MentorAI-CodeSpace and responsive layouts across platforms."
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    skills: [
      {
        name: "React.js",
        description: "Component-driven architecture, custom hooks, state handling, and modular UI workflows.",
        evidence: "VibeVerse community UI, MentorAI-CodeSpace workspace, Destini.ai UI refactoring and Admin Panel."
      },
      {
        name: "React Native",
        description: "Cross-platform mobile application development and mobile UI translation.",
        evidence: "Converted Destini.ai web application into an Android mobile application."
      }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      {
        name: "Node.js",
        description: "Asynchronous event-driven server runtime and API execution pipelines.",
        evidence: "Backend servers for VibeVerse and MentorAI-CodeSpace."
      },
      {
        name: "Express.js",
        description: "RESTful routing, middleware management, request validation, and API controllers.",
        evidence: "Engineered endpoints for user authentication, session data, and real-time services."
      }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      {
        name: "MongoDB",
        description: "NoSQL document database, Mongoose ODM schemas, and persistent collection management.",
        evidence: "VibeVerse user & gaming data store; MentorAI-CodeSpace coding session persistence."
      },
      {
        name: "SQL",
        description: "Relational querying, schema definitions, structured joins, and data retrieval.",
        evidence: "Cardiovascular dataset exploration and academic database management."
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    icon: "Cloud",
    skills: [
      {
        name: "Microsoft Azure",
        description: "Cloud cognitive services integration and secure API communication.",
        evidence: "Integrated Azure AI Translation Services with i18n for multilingual support at Destini.ai."
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control, branching workflows, commits, pull requests, and repository tracking.",
        evidence: "Maintained version-controlled repositories for all academic and personal engineering projects."
      },
      {
        name: "Postman",
        description: "API testing, endpoint verification, request debugging, and header inspection.",
        evidence: "Verified REST endpoints for VibeVerse and Destini.ai backend integrations."
      },
      {
        name: "Tableau",
        description: "Interactive dashboard creation, visual data storytelling, and multi-variable filtering.",
        evidence: "Published Cardiovascular Risk Analytics interactive dashboard on Tableau Public."
      },
      {
        name: "Socket.io",
        description: "Bidirectional WebSocket communication for real-time messaging and synchronization.",
        evidence: "Real-time communication and multiplayer game synchronization in VibeVerse."
      },
      {
        name: "JWT (JSON Web Tokens)",
        description: "Stateless client authentication, token generation, and secure route protection.",
        evidence: "Implemented authentication flows in VibeVerse and MentorAI-CodeSpace."
      }
    ]
  }
];
