import { ArchitectureGraph } from '../types/portfolio';

export const architectureGraphs: Record<string, ArchitectureGraph> = {
  "vibeverse": {
    projectId: "vibeverse",
    projectName: "VibeVerse Real-Time Architecture",
    description: "Gaming-focused community architecture combining REST APIs with Socket.io bidirectional event gateways and Brevo OTP authentication.",
    nodes: [
      {
        id: "vv-ui",
        label: "React.js Client Interface",
        type: "ui",
        icon: "Monitor",
        x: 10,
        y: 50,
        tech: "React.js / Modular Components",
        responsibilities: [
          "Renders responsive community feeds, gamer profiles, and interactive game rooms.",
          "Manages real-time message state and multiplayer game inputs.",
          "Handles user authentication state and OTP input verification screens."
        ],
        inputs: ["User interactions, chat inputs, game moves"],
        outputs: ["Dispatched actions, WebSocket events, REST requests"],
        relationships: ["Communicates with Express API via REST and Real-Time Gateway via WebSockets."]
      },
      {
        id: "vv-socket",
        label: "Socket.io Real-Time Gateway",
        type: "frontend",
        icon: "Layers",
        x: 35,
        y: 25,
        tech: "Socket.io WebSocket Server",
        responsibilities: [
          "Maintains low-latency persistent bidirectional connections with active gamers.",
          "Broadcasts real-time messages to specific community channels and chat rooms.",
          "Synchronizes multiplayer game state across connected players."
        ],
        inputs: ["WebSocket events: 'join_room', 'send_message', 'game_move'"],
        outputs: ["Broadcast events: 'receive_message', 'state_update'"],
        relationships: ["Connects React client with active multiplayer rooms."]
      },
      {
        id: "vv-api",
        label: "Node.js & Express REST API",
        type: "backend",
        icon: "Server",
        x: 35,
        y: 75,
        tech: "Node.js / Express.js",
        responsibilities: [
          "Handles HTTP endpoints for user registration, profiles, and community posts.",
          "Validates JWT tokens on protected routes.",
          "Orchestrates password recovery and email verification triggers."
        ],
        inputs: ["REST requests with JSON payloads and Bearer tokens"],
        outputs: ["JSON responses, HTTP status codes"],
        relationships: ["Integrates with Brevo Email API for OTP and MongoDB for persistence."]
      },
      {
        id: "vv-brevo",
        label: "Brevo Email API (OTP Service)",
        type: "external",
        icon: "Globe",
        x: 65,
        y: 25,
        tech: "Brevo (Sendinblue) Transactional API",
        responsibilities: [
          "Dispatches one-time verification passwords (OTP) for user email verification.",
          "Handles secure password recovery email dispatches.",
          "Provides delivery telemetry to ensure account authenticity."
        ],
        inputs: ["Transactional email payloads with recipient address and generated OTP"],
        outputs: ["Message dispatch confirmation and delivery status"],
        relationships: ["Invoked by Express backend during registration and password reset."]
      },
      {
        id: "vv-db",
        label: "MongoDB Database",
        type: "database",
        icon: "Database",
        x: 65,
        y: 75,
        tech: "MongoDB / Mongoose ODM",
        responsibilities: [
          "Stores user profiles, credentials, community posts, and game records.",
          "Maintains indexed queries for rapid timeline retrieval.",
          "Persists room session history."
        ],
        inputs: ["Mongoose queries, find, update, and write operations"],
        outputs: ["Documents, session state, user records"],
        relationships: ["Persistent database for the Express backend."]
      }
    ],
    edges: [
      { from: "vv-ui", to: "vv-socket", label: "Bidirectional WebSockets", animated: true },
      { from: "vv-ui", to: "vv-api", label: "HTTPS REST Requests", animated: true },
      { from: "vv-api", to: "vv-brevo", label: "Trigger OTP Email" },
      { from: "vv-api", to: "vv-db", label: "Mongoose Query / Save", animated: true }
    ]
  },
  "mentorai-codespace": {
    projectId: "mentorai-codespace",
    projectName: "MentorAI-CodeSpace Architecture",
    description: "Interactive coding workspace architecture decoupling the Monaco editor frontend, Express session runner, and Gemini API contextual guidance.",
    nodes: [
      {
        id: "mai-editor",
        label: "Monaco Editor Client",
        type: "ui",
        icon: "Monitor",
        x: 10,
        y: 50,
        tech: "React.js / Vite / Tailwind CSS / Monaco Editor",
        responsibilities: [
          "Renders high-performance code editing interface with syntax highlighting.",
          "Captures standard input and manages multi-language file tabs.",
          "Displays step-by-step contextual guidance and debugging suggestions."
        ],
        inputs: ["Keyboard inputs, code changes, language selection, run triggers"],
        outputs: ["Source code buffer, stdin data, explanation prompts"],
        relationships: ["Dispatches execution and guidance requests to the Express API."]
      },
      {
        id: "mai-backend",
        label: "Node.js & Express API Gateway",
        type: "backend",
        icon: "Server",
        x: 40,
        y: 50,
        tech: "Node.js / Express / REST Controllers",
        responsibilities: [
          "Manages JWT user authentication and workspace authorization.",
          "Orchestrates code execution runs and standard I/O processing.",
          "Proxies structured explanation requests to the Gemini API securely."
        ],
        inputs: ["Execution requests, code snippets, JWT authorization headers"],
        outputs: ["Execution output (stdout/stderr), AI suggestions, session metadata"],
        relationships: ["Communicates with Gemini API for assistance and MongoDB for session saves."]
      },
      {
        id: "mai-ai",
        label: "Gemini API (Contextual Guidance)",
        type: "external",
        icon: "Cpu",
        x: 75,
        y: 25,
        tech: "Google Gemini API Service",
        responsibilities: [
          "Analyzes programming code for bugs, syntax issues, and logic errors.",
          "Generates step-by-step conceptual explanations tailored to the user's query.",
          "Returns structured debugging suggestions."
        ],
        inputs: ["Formatted prompt containing source code, language, and user question"],
        outputs: ["Generated explanations, fix recommendations"],
        relationships: ["Invoked by backend API without exposing client keys."]
      },
      {
        id: "mai-db",
        label: "MongoDB Session Store",
        type: "database",
        icon: "Database",
        x: 75,
        y: 75,
        tech: "MongoDB / Mongoose",
        responsibilities: [
          "Persists user coding sessions, saved snippets, and history logs.",
          "Stores user authentication records securely."
        ],
        inputs: ["Session save payloads, user profile updates"],
        outputs: ["Saved session history, user credentials"],
        relationships: ["Persistent storage for developer sessions."]
      }
    ],
    edges: [
      { from: "mai-editor", to: "mai-backend", label: "Code Run & AI Prompt", animated: true },
      { from: "mai-backend", to: "mai-ai", label: "Prompt Request / Stream" },
      { from: "mai-backend", to: "mai-db", label: "Save Coding Session", animated: true }
    ]
  },
  "chess-game": {
    projectId: "chess-game",
    projectName: "2D Chess Engine & Algorithmic Bot Architecture",
    description: "Pure JavaScript state-driven architecture with matrix board representation and evaluation-based move selection.",
    nodes: [
      {
        id: "chess-ui",
        label: "Interactive 2D Board (DOM)",
        type: "ui",
        icon: "Grid",
        x: 15,
        y: 50,
        tech: "HTML5 / CSS3 Grid / DOM Elements",
        responsibilities: [
          "Renders 8x8 chessboard tiles, piece sprites, and selection highlights.",
          "Visualizes valid target squares for the active piece.",
          "Updates move history and captured pieces display."
        ],
        inputs: ["Square click events, drag-and-drop actions"],
        outputs: ["Selected square coordinates (row, col)"],
        relationships: ["Sends square selections to the Move Validation Engine."]
      },
      {
        id: "chess-engine",
        label: "Move Validation Engine",
        type: "frontend",
        icon: "Cpu",
        x: 45,
        y: 50,
        tech: "Vanilla JavaScript (ES6+)",
        responsibilities: [
          "Maintains the 8x8 2D board state array representing piece positions.",
          "Calculates legal moves for sliding pieces (rook, bishop, queen) and stepping pieces.",
          "Enforces check detection, king safety raycasts, and checkmate conditions."
        ],
        inputs: ["Move coordinates (source square -> destination square)"],
        outputs: ["Legal move boolean, updated board matrix, game state flag"],
        relationships: ["Dispatches valid moves to the DOM UI and prompts the Bot AI."]
      },
      {
        id: "chess-ai",
        label: "Algorithmic Bot Opponent",
        type: "backend",
        icon: "Bot",
        x: 78,
        y: 50,
        tech: "Piece-Square Tables / Evaluation Heuristic",
        responsibilities: [
          "Generates all legal candidate moves for the bot's pieces.",
          "Evaluates board positional advantage using piece-square tables and material values.",
          "Chooses the optimal counter-move and triggers board update."
        ],
        inputs: ["Current board state after player move"],
        outputs: ["Optimal bot move (source -> destination)"],
        relationships: ["Submits selected move back to the Move Validation Engine."]
      }
    ],
    edges: [
      { from: "chess-ui", to: "chess-engine", label: "User Move Selection", animated: true },
      { from: "chess-engine", to: "chess-ai", label: "Trigger Bot Turn", animated: true },
      { from: "chess-ai", to: "chess-engine", label: "Submit Bot Move" },
      { from: "chess-engine", to: "chess-ui", label: "Update Board DOM", animated: true }
    ]
  },
  "destini-work": {
    projectId: "destini-work",
    projectName: "Destini.ai Platform Architecture",
    description: "Multilingual enterprise platform architecture with React Native Android client, Azure AI Translation, and SSO payout integration.",
    nodes: [
      {
        id: "dest-clients",
        label: "Web UI & React Native Android App",
        type: "ui",
        icon: "Monitor",
        x: 10,
        y: 50,
        tech: "React.js (Web) / React Native (Android)",
        responsibilities: [
          "Provides responsive web interfaces and native Android mobile views.",
          "Renders localized dynamic UI using i18n client configuration.",
          "Presents Admin Panel with real-time filters and payout management."
        ],
        inputs: ["User taps, language toggles, admin actions, payout requests"],
        outputs: ["API requests, language switch events, authentication redirects"],
        relationships: ["Sends authenticated requests to the Express Backend API."]
      },
      {
        id: "dest-backend",
        label: "Node.js & Express Enterprise API",
        type: "backend",
        icon: "Server",
        x: 45,
        y: 50,
        tech: "Node.js / Express Services",
        responsibilities: [
          "Provides endpoints for application data, user workflows, and admin tooling.",
          "Acts as a secure proxy to Azure AI Translation Services.",
          "Handles SSO-based payout authorization verification."
        ],
        inputs: ["REST queries, payout initiation calls, translation requests"],
        outputs: ["JSON data, verified payout transactions, translated strings"],
        relationships: ["Connects with Azure AI Translation and SSO Payout Authentication."]
      },
      {
        id: "dest-azure",
        label: "Azure AI Translation Services",
        type: "external",
        icon: "Globe",
        x: 80,
        y: 25,
        tech: "Microsoft Azure Cognitive Services",
        responsibilities: [
          "Translates dynamic interface strings into multiple global target languages.",
          "Enables comprehensive multilingual support paired with client-side i18n.",
          "Provides high-accuracy neural translation."
        ],
        inputs: ["Server requests with target language codes and source text"],
        outputs: ["Translated text payloads"],
        relationships: ["Integrated into backend translation routes for the platform."]
      },
      {
        id: "dest-sso",
        label: "SSO Payout Authorization",
        type: "auth",
        icon: "ShieldCheck",
        x: 80,
        y: 75,
        tech: "SSO Protocol / Backend API Handshake",
        responsibilities: [
          "Authenticates payout transactions with Single Sign-On provider.",
          "Ensures secure callback handshakes and fraud prevention.",
          "Confirms payout settlement status to the backend."
        ],
        inputs: ["SSO payout initiation tokens, provider verification callbacks"],
        outputs: ["Verified transaction receipt, payout confirmation"],
        relationships: ["Guards payout transactions before updating the system."]
      }
    ],
    edges: [
      { from: "dest-clients", to: "dest-backend", label: "RESTful API Calls", animated: true },
      { from: "dest-backend", to: "dest-azure", label: "Translate Content" },
      { from: "dest-backend", to: "dest-sso", label: "Verify Payout Handshake", animated: true }
    ]
  }
};
