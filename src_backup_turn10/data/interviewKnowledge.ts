import { PortfolioAction } from '../types/portfolio';

export interface KnowledgeItem {
  id: string;
  intent: string;
  triggers: string[];
  keywords: string[];
  answer: string;
  action?: PortfolioAction;
  suggestedFollowUps: string[];
}

export const interviewKnowledgeBase: KnowledgeItem[] = [
  {
    id: "about_me",
    intent: "ABOUT_ME",
    triggers: [
      "tell me about yourself",
      "who are you",
      "introduce yourself",
      "give me your background",
      "bio",
      "background",
      "about revanth"
    ],
    keywords: ["about", "yourself", "who", "introduce", "revanth", "background", "bio", "profile"],
    answer: "I am Valluru Sai Manikanta Revanth, a Computer Science and Engineering graduate from VIT-AP University (8.45 CGPA) and currently a Full Stack Developer Intern at Destini.ai. I specialize in full-stack web and mobile development, real-time messaging architectures with Socket.io, and data analytics dashboards.",
    action: { type: "SHOW_ABOUT", cardId: "profile-card" },
    suggestedFollowUps: [
      "Show my education.",
      "What are your technical skills?",
      "Tell me about my Destini.ai internship.",
      "Explain VibeVerse."
    ]
  },
  {
    id: "education_info",
    intent: "EDUCATION",
    triggers: [
      "show my education",
      "show education",
      "tell me about your education",
      "tell me about education",
      "where did you study",
      "what is your degree",
      "education background",
      "education details",
      "vit-ap",
      "college"
    ],
    keywords: ["education", "degree", "college", "university", "vit", "study", "btech", "cgpa", "school", "intermediate"],
    answer: "I graduated with a B.Tech in Computer Science and Engineering from VIT-AP University (2021–2025) with an 8.45 CGPA. Prior to that, I completed Intermediate Education with 88.6% and Secondary Education with a 9.5 CGPA.",
    action: { type: "SHOW_EDUCATION" },
    suggestedFollowUps: [
      "Tell me about yourself.",
      "What are your technical skills?",
      "Tell me about my Destini.ai internship."
    ]
  },
  {
    id: "technical_skills",
    intent: "SKILLS",
    triggers: [
      "what are your technical skills",
      "what are your skills",
      "what skills do you have",
      "what is your tech stack",
      "technologies you know",
      "show me your skills",
      "programming languages"
    ],
    keywords: ["skills", "technical", "stack", "languages", "technologies", "frontend", "backend", "programming", "react", "node", "python"],
    answer: "My technical skills span six core domains: Programming in Python, JavaScript, R, HTML, and CSS; Frontend in React.js and React Native; Backend in Node.js and Express.js; Databases in MongoDB and SQL; Cloud on Microsoft Azure; and Tools including Git, GitHub, Postman, Tableau, Socket.io, and JWT.",
    action: { type: "SHOW_SKILLS" },
    suggestedFollowUps: [
      "Tell me about my Destini.ai internship.",
      "Explain VibeVerse.",
      "How does Socket.io work in VibeVerse?"
    ]
  },
  {
    id: "internship_experience",
    intent: "EXPERIENCE",
    triggers: [
      "tell me about my destini.ai internship",
      "tell me about destini",
      "what do you do at destini.ai",
      "show your experience",
      "destini internship",
      "explain your internship experience",
      "work experience"
    ],
    keywords: ["internship", "destini", "experience", "work", "responsibilities", "job"],
    answer: "At Destini.ai, I work as a Full Stack Developer Intern since October 2025. My documented work includes improving UI/UX workflows with React.js, converting an existing web app into an Android application using React Native, implementing multilingual support with i18n and Azure AI Translation Services, developing an SSO-based payout system, and building an administrative panel.",
    action: { type: "SHOW_EXPERIENCE" },
    suggestedFollowUps: [
      "How did you implement multilingual support?",
      "How does the payout system work?",
      "How did you convert the web app to React Native?"
    ]
  },
  {
    id: "project_vibeverse",
    intent: "PROJECT_VIBEVERSE",
    triggers: [
      "explain vibeverse",
      "what is vibeverse",
      "tell me about vibeverse",
      "show vibeverse",
      "gaming platform"
    ],
    keywords: ["vibeverse", "gaming", "socket", "real-time", "multiplayer", "brevo"],
    answer: "VibeVerse is a gaming-focused social media and real-time gaming community platform. It features user connections and dedicated gaming communities, real-time messaging, integrated multiplayer games, JWT authentication, and OTP-based email verification and password recovery using Brevo, with REST APIs in Express and data management in MongoDB.",
    action: { type: "SHOW_PROJECT", projectId: "vibeverse" },
    suggestedFollowUps: [
      "How does Socket.io work in VibeVerse?",
      "How does OTP email verification work in VibeVerse?",
      "Explain MentorAI-CodeSpace."
    ]
  },
  {
    id: "realtime_socket",
    intent: "REALTIME_SOCKET",
    triggers: [
      "how does socket.io work in vibeverse",
      "how does real-time messaging work",
      "how does realtime messaging work",
      "explain socket.io in vibeverse",
      "socket.io implementation",
      "how do games synchronize"
    ],
    keywords: ["socket", "socket.io", "real-time", "realtime", "messaging", "websocket", "synchronization", "multiplayer"],
    answer: "In VibeVerse, real-time messaging and game synchronization are powered by Socket.io. The React client establishes a persistent bidirectional WebSocket connection with the Node.js server. When a user sends a chat message or takes a game action, a Socket event is emitted to the server, which validates the session and immediately broadcasts the payload to all connected clients in that specific room.",
    action: { type: "SHOW_ARCHITECTURE", projectId: "vibeverse", nodeId: "vv-socket" },
    suggestedFollowUps: [
      "Explain VibeVerse.",
      "How does OTP email verification work in VibeVerse?",
      "Explain MentorAI-CodeSpace."
    ]
  },
  {
    id: "brevo_otp",
    intent: "BREVO_OTP",
    triggers: [
      "how does otp email verification work in vibeverse",
      "how does otp email verification work",
      "brevo email api",
      "otp verification in vibeverse",
      "how do you handle password recovery"
    ],
    keywords: ["otp", "brevo", "email", "verification", "password recovery"],
    answer: "In VibeVerse, user registration and password recovery utilize OTP verification through the Brevo Email API. When triggered, the Express backend generates a short-lived one-time password and requests Brevo's transactional email service to dispatch the code to the user's verified inbox before authorizing account changes.",
    action: { type: "SHOW_ARCHITECTURE", projectId: "vibeverse", nodeId: "vv-brevo" },
    suggestedFollowUps: [
      "Explain VibeVerse.",
      "How does Socket.io work in VibeVerse?",
      "Explain MentorAI-CodeSpace."
    ]
  },
  {
    id: "project_mentorai",
    intent: "PROJECT_MENTORAI",
    triggers: [
      "explain mentorai-codespace",
      "explain mentorai",
      "what is mentorai-codespace",
      "how does the ai coding workspace work",
      "tell me about mentorai",
      "coding workspace",
      "gemini project"
    ],
    keywords: ["mentorai", "codespace", "monaco", "gemini", "code editor", "execution", "workspace"],
    answer: "MentorAI-CodeSpace is an AI-powered interactive coding workspace. It features programming concept explanations, code generation, debugging assistance, interactive code execution with standard input/output, Gemini API integration for contextual explanations, a Monaco-based code editor, JWT authentication, and persistent coding sessions in MongoDB.",
    action: { type: "SHOW_PROJECT", projectId: "mentorai-codespace" },
    suggestedFollowUps: [
      "How does the AI coding workspace work?",
      "Explain VibeVerse.",
      "Show my cardiovascular analytics dashboard."
    ]
  },
  {
    id: "project_cardio_risk",
    intent: "PROJECT_CARDIO",
    triggers: [
      "show my cardiovascular analytics dashboard",
      "explain cardiovascular risk analytics",
      "cardiovascular risk analytics dashboard",
      "tell me about health analytics",
      "cardiovascular risk dashboard",
      "tableau dashboard"
    ],
    keywords: ["cardiovascular", "heart", "tableau", "health", "analytics", "pandas", "numpy"],
    answer: "The Cardiovascular Risk Analytics Dashboard is a health analytics and interactive data visualization project. I explored and preprocessed cardiovascular datasets using Python (Pandas and NumPy) and SQL, identified key cardiovascular risk factors and patterns, and designed interactive Tableau dashboards and stories to visualize trends and comparisons across patient attributes.",
    action: { type: "SHOW_PROJECT", projectId: "cardiovascular-risk-analytics" },
    suggestedFollowUps: [
      "What tools did you use for health analytics?",
      "Explain my chess game.",
      "What are your skills?"
    ]
  },
  {
    id: "project_chess",
    intent: "PROJECT_CHESS",
    triggers: [
      "explain my chess game",
      "tell me about chess game",
      "chess game",
      "chess bot",
      "how does the chess bot evaluate moves"
    ],
    keywords: ["chess", "bot", "game", "opponent", "checkmate", "moves"],
    answer: "The Chess Game is a 2D strategic chess game built in JavaScript with an algorithmic bot opponent. It enforces standard chess rules (legal moves, check, checkmate, castling) and uses piece-square tables and material evaluations to select bot counter-moves. It is hosted live on GitHub Pages.",
    action: { type: "SHOW_PROJECT", projectId: "chess-game" },
    suggestedFollowUps: [
      "Tell me about Tasty Trail.",
      "Explain my NLP paper correction project.",
      "Explain VibeVerse."
    ]
  },
  {
    id: "project_tasty_trail",
    intent: "PROJECT_TASTY_TRAIL",
    triggers: [
      "tell me about tasty trail",
      "explain tasty trail",
      "tasty trail",
      "food delivery project",
      "restaurant website"
    ],
    keywords: ["tasty", "trail", "food", "delivery", "restaurant", "cart"],
    answer: "Tasty Trail is a responsive food delivery and restaurant discovery web application built with React.js. It features restaurant listings with ratings and delivery estimates, categorized menu browsing, and an interactive ordering cart with instant price recalculations.",
    action: { type: "SHOW_PROJECT", projectId: "tasty-trail" },
    suggestedFollowUps: [
      "Explain my chess game.",
      "Explain my NLP paper correction project.",
      "Explain VibeVerse."
    ]
  },
  {
    id: "project_nlp_paper",
    intent: "PROJECT_NLP_PAPER",
    triggers: [
      "explain my nlp paper correction project",
      "tell me about auto paper correction",
      "auto paper correction by nlp",
      "nlp paper correction",
      "paper correction project"
    ],
    keywords: ["paper", "correction", "nlp", "similarity", "grading", "assignment"],
    answer: "Auto Paper Correction by NLP is an automated assignment evaluation prototype using Natural Language Processing. It preprocesses written student text, tokenizes key terms, and computes semantic similarity against benchmark answer keys to generate objective grading evaluations.",
    action: { type: "SHOW_PROJECT", projectId: "auto-paper-correction-nlp" },
    suggestedFollowUps: [
      "Explain MentorAI-CodeSpace.",
      "Explain VibeVerse.",
      "What are your skills?"
    ]
  },
  {
    id: "multilingual_support",
    intent: "AZURE_TRANSLATION",
    triggers: [
      "how did you implement multilingual support",
      "azure ai translation",
      "i18n in destini",
      "multilingual support at destini.ai"
    ],
    keywords: ["multilingual", "azure", "translation", "i18n", "languages", "localize"],
    answer: "At Destini.ai, I implemented multilingual support by configuring client-side internationalization (i18n) and integrating Microsoft Azure AI Translation Services. The server proxies translation requests securely, translating dynamic content into target languages while client dictionaries maintain local interface strings.",
    action: { type: "SHOW_ARCHITECTURE", projectId: "destini-work", nodeId: "dest-azure" },
    suggestedFollowUps: [
      "Tell me about my Destini.ai internship.",
      "How does the payout system work?",
      "How did you convert the web app to React Native?"
    ]
  },
  {
    id: "payout_sso",
    intent: "PAYOUT_SSO",
    triggers: [
      "how does the payout system work",
      "payout workflow integration",
      "sso authentication in destini",
      "payout system details",
      "payout sso"
    ],
    keywords: ["payout", "sso", "authentication", "settlement", "handshake"],
    answer: "At Destini.ai, I integrated a payout workflow featuring Single Sign-On (SSO) based authentication. The workflow initiates an authenticated redirect to the identity provider with transaction parameters, verifies callback tokens on the backend to prevent duplicate captures, and updates payout status through secure REST API endpoints.",
    action: { type: "SHOW_ARCHITECTURE", projectId: "destini-work", nodeId: "dest-sso" },
    suggestedFollowUps: [
      "Tell me about my Destini.ai internship.",
      "Explain VibeVerse.",
      "What are your skills?"
    ]
  },
  {
    id: "react_native_android",
    intent: "REACT_NATIVE",
    triggers: [
      "how did you convert the web app to react native",
      "react native at destini",
      "android app development",
      "mobile app experience"
    ],
    keywords: ["react native", "android", "mobile", "convert", "app"],
    answer: "At Destini.ai, I converted an existing web application into an Android mobile application using React Native. This involved adapting web DOM components into native mobile components, mapping touch gestures, and connecting the mobile client to the existing backend REST API services.",
    action: { type: "SHOW_EXPERIENCE" },
    suggestedFollowUps: [
      "Tell me about my Destini.ai internship.",
      "What are your skills?",
      "Explain VibeVerse."
    ]
  },
  {
    id: "removed_projects",
    intent: "REMOVED_PROJECT",
    triggers: [
      "v-connect",
      "vconnect",
      "explain v-connect",
      "what is v-connect",
      "fashion store",
      "e-commerce website",
      "ecommerce",
      "security implementation for automation",
      "security implementation"
    ],
    keywords: ["v-connect", "vconnect", "fashion", "ecommerce", "security implementation"],
    answer: "That project is no longer included in the current portfolio. You can explore my featured projects: VibeVerse, MentorAI-CodeSpace, Cardiovascular Risk Analytics Dashboard, Chess Game, Tasty Trail, and Auto Paper Correction by NLP.",
    action: { type: "SHOW_PROJECT", projectId: "vibeverse" },
    suggestedFollowUps: [
      "Explain VibeVerse.",
      "Explain MentorAI-CodeSpace.",
      "Show my cardiovascular analytics dashboard."
    ]
  },
  {
    id: "contact_info",
    intent: "CONTACT",
    triggers: [
      "how can i contact you",
      "contact details",
      "email",
      "phone",
      "linkedin profile",
      "github link",
      "reach you"
    ],
    keywords: ["contact", "email", "phone", "linkedin", "github", "reach", "hire"],
    answer: "You can reach me via email at revanthvalluru2073@gmail.com or by phone at +91 8790515520. You can also connect with me on LinkedIn at linkedin.com/in/sai-manikanta-revanth-valluru-a36198272/ or check my repositories on GitHub at github.com/revanthvalluru20.",
    action: { type: "SHOW_CONTACT" },
    suggestedFollowUps: [
      "Tell me about yourself.",
      "What are your skills?",
      "Explain VibeVerse."
    ]
  }
];

export const fallbackKnowledgeItem: KnowledgeItem = {
  id: "fallback",
  intent: "FALLBACK_UNKNOWN",
  triggers: [],
  keywords: [],
  answer: "I am REVA AI. I don't have verified documentation for that specific inquiry yet. Let me bring up the relevant verified work.",
  action: { type: "SHOW_PROJECT", projectId: "vibeverse" },
  suggestedFollowUps: [
    "Tell me about yourself.",
    "What are your skills?",
    "Tell me about my Destini.ai internship.",
    "Explain VibeVerse."
  ]
};
