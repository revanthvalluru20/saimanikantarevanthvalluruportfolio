import { Project } from '../types/portfolio';
import { getAssetUrl } from '../utils/assetUrl';

export const projectsData: Project[] = [
  {
    id: "vibeverse",
    title: "VibeVerse",
    subtitle: "Gaming-Focused Social Media & Real-Time Gaming Community Platform",
    category: "Web Development",
    overview: "A gaming-focused social media and real-time community platform connecting users, fostering gaming communities, and featuring integrated multiplayer games with live synchronization.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Brevo",
      "REST APIs"
    ],
    keyFeatures: [
      "User connections and dedicated gaming communities.",
      "Real-time communication and messaging powered by Socket.io.",
      "Integrated multiplayer games with live synchronization.",
      "JWT-based user authentication.",
      "OTP-based email verification and password recovery using Brevo Email API.",
      "REST APIs built with Node.js and Express.js.",
      "Socket.io for real-time messaging and multiplayer synchronization.",
      "MongoDB for persistent data management."
    ],
    contributions: [
      "Engineered real-time bidirectional communication and multiplayer game synchronization using Socket.io.",
      "Integrated Brevo Email API for transactional OTP verification and password recovery.",
      "Built RESTful API controllers with Node.js and Express.js and designed MongoDB data models.",
      "Developed responsive interactive user interfaces with React.js."
    ],
    githubUrl: "https://github.com/revanthvalluru20",
    liveDemoUrl: "https://vibe-verse-rho.vercel.app/home",
    image: getAssetUrl("assets/img/vibeverse.jpg"),
    hasArchitecture: true,
    relatedQuestions: [
      "Explain VibeVerse.",
      "How does Socket.io work in VibeVerse?",
      "How does OTP email verification work in VibeVerse?"
    ]
  },
  {
    id: "mentorai-codespace",
    title: "MentorAI-CodeSpace",
    subtitle: "AI-Powered Interactive Coding Workspace",
    category: "AI and NLP",
    overview: "An AI-powered interactive coding workspace for learning programming concepts, generating code solutions, debugging, and executing programs with contextual step-by-step guidance.",
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Monaco Editor",
      "Gemini API",
      "JWT",
      "REST APIs"
    ],
    keyFeatures: [
      "Programming concept explanations and step-by-step guidance.",
      "Intelligent code generation and debugging assistance.",
      "Interactive code execution with standard input/output.",
      "Gemini API integration for contextual explanations.",
      "Monaco-based code editor with syntax highlighting.",
      "JWT-based authentication for user workspace accounts.",
      "Persistent coding sessions stored in MongoDB.",
      "Multilanguage support and execution pipeline."
    ],
    contributions: [
      "Architected the interactive code editor workspace using React.js, Vite, and Monaco Editor.",
      "Structured contextual prompting pipelines to integrate Gemini API assistance for debugging and explanation.",
      "Designed backend session persistence with Express.js and MongoDB.",
      "Implemented JWT authentication to secure developer workspaces."
    ],
    githubUrl: "https://github.com/revanthvalluru20",
    liveDemoUrl: "https://mentor-ai-one-swart.vercel.app/workspace",
    image: getAssetUrl("assets/img/mentorai.jpg"),
    hasArchitecture: true,
    relatedQuestions: [
      "Explain MentorAI-CodeSpace.",
      "How does the AI coding workspace work?"
    ]
  },
  {
    id: "cardio-risk",
    title: "Cardiovascular Risk Analytics Dashboard",
    subtitle: "Health Analytics & Interactive Data Visualization",
    category: "Data Analytics",
    overview: "A health analytics and interactive data visualization project exploring cardiovascular clinical datasets to identify critical health patterns and disease risk factors.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Tableau"
    ],
    keyFeatures: [
      "Data exploration and preprocessing of cardiovascular health datasets.",
      "Identification of cardiovascular risk factors and patterns.",
      "Interactive Tableau dashboards and guided data stories.",
      "Trend visualization and comparisons across patient attributes."
    ],
    contributions: [
      "Preprocessed and normalized medical datasets using Python (Pandas and NumPy).",
      "Formulated exploratory SQL queries to segment and analyze patient health metrics.",
      "Designed and published interactive Tableau dashboards and visual stories."
    ],
    liveDemoUrl: "https://public.tableau.com/app/profile/vishnupriya.pragada/viz/Dashboard_16989481972700/Dashboard1?publish=yes",
    image: getAssetUrl("assets/img/heart.avif"),
    hasArchitecture: false,
    relatedQuestions: [
      "Show my cardiovascular analytics dashboard.",
      "What tools did you use for health analytics?"
    ]
  },
  {
    id: "chess-game",
    title: "Chess Game",
    subtitle: "2D JavaScript Chess Game with Bot Opponent",
    category: "Games",
    overview: "A browser-based strategic 2D chess game built in pure JavaScript, featuring complete standard chess rule enforcement, move history tracking, and an algorithmic bot opponent.",
    technologies: [
      "JavaScript (ES6+)",
      "HTML5 Canvas/DOM",
      "CSS3"
    ],
    keyFeatures: [
      "Full 2D chessboard interface rendered in native JavaScript.",
      "Strict standard chess rule validation (legal moves, check, checkmate, castling).",
      "Algorithmic bot opponent with board position evaluation.",
      "Visual move indicators, turn tracking, and captured pieces display.",
      "Zero external game engine dependencies running smoothly in any modern browser."
    ],
    contributions: [
      "Engineered the 8x8 matrix board data structure and coordinate mapping system.",
      "Implemented rule validation for sliding and stepping chess pieces.",
      "Programmed bot move evaluation algorithm based on piece-square tables and material advantage."
    ],
    githubUrl: "https://github.com/revanthvalluru20/chessgame2D",
    liveDemoUrl: "https://revanthvalluru20.github.io/chessgame2D/",
    image: getAssetUrl("assets/img/chessgame1.webp"),
    hasArchitecture: true,
    relatedQuestions: [
      "Explain my chess game.",
      "How does the chess bot evaluate moves?"
    ]
  },
  {
    id: "tasty-trail",
    title: "Tasty Trail",
    subtitle: "Food Delivery & Restaurant Discovery Platform",
    category: "Web Development",
    overview: "A responsive food delivery and restaurant web application featuring curated restaurant discovery, menu exploration, and an interactive cart ordering flow.",
    technologies: [
      "React.js",
      "REST APIs",
      "CSS3"
    ],
    keyFeatures: [
      "Curated restaurant cards with star ratings, delivery estimates, and cuisines.",
      "Menu breakdown with category accordions and dietary tags.",
      "Dynamic food cart with instant price recalculation and quantity adjustments.",
      "Responsive layout optimized for mobile and desktop screens."
    ],
    contributions: [
      "Built React UI components, menu item cards, and stateful checkout cart.",
      "Integrated REST API endpoints to fetch live restaurant listings and menu datasets."
    ],
    liveDemoUrl: "http://tastytrailfood.ccbp.tech",
    image: getAssetUrl("assets/img/Food-Delivery.jpg"),
    hasArchitecture: false,
    relatedQuestions: [
      "Tell me about Tasty Trail.",
      "What features did you build in Tasty Trail?"
    ]
  },
  {
    id: "auto-paper-correction",
    title: "Auto Paper Correction by NLP",
    subtitle: "Automated Paper Correction Prototype using NLP",
    category: "AI and NLP",
    overview: "An automated assignment and paper correction project exploring Natural Language Processing similarity metrics and semantic embeddings to evaluate written answers against standardized rubrics.",
    technologies: [
      "Python",
      "NLP",
      "Text Similarity",
      "Semantic Analysis"
    ],
    keyFeatures: [
      "Text preprocessing, tokenization, and stop-word filtering pipeline.",
      "Semantic similarity scoring comparing student formulations against benchmark keys.",
      "Automated evaluation report generation with score breakdown."
    ],
    contributions: [
      "Developed Python text preprocessing and tokenization scripts.",
      "Implemented cosine similarity and semantic matching algorithms against benchmark answer keys."
    ],
    liveDemoUrl: "https://drive.google.com/file/d/1XVN2tq-D3dZLoWbzyf7_yws_F1uNUbhQ/view",
    image: getAssetUrl("assets/img/autopaper.jpg"),
    hasArchitecture: false,
    relatedQuestions: [
      "Explain my NLP paper correction project.",
      "How does the NLP paper correction work?"
    ]
  },
  {
    id: "vconnect",
    title: "V-Connect",
    subtitle: "University Social Networking Platform",
    category: "Web Development",
    overview: "A university-focused social networking platform enabling student connections, community posts, study group discovery, real-time messaging, and event listings.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "REST APIs"
    ],
    keyFeatures: [
      "University student profile connections and community posts.",
      "Real-time messaging powered by Socket.io.",
      "Study group discovery and event listing features.",
      "JWT-based authentication and secure user sessions.",
      "RESTful API backend with Node.js, Express.js, and MongoDB."
    ],
    contributions: [
      "Built social feed, profile management, and community discovery features using React.js.",
      "Implemented real-time messaging and online status with Socket.io.",
      "Designed RESTful API controllers and MongoDB data models for social interactions.",
      "Integrated JWT authentication for secure user account management."
    ],
    githubUrl: "https://github.com/revanthvalluru20",
    liveDemoUrl: "https://v-connect-dnc1.onrender.com/",
    image: getAssetUrl("assets/img/vconnect.jpg"),
    hasArchitecture: false,
    relatedQuestions: [
      "Explain V-Connect.",
      "What features did you build in V-Connect?"
    ]
  }
];
