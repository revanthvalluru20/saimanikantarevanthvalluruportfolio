export type PortfolioAction =
  | { type: "SHOW_ABOUT"; cardId?: string }
  | { type: "SHOW_SKILLS"; category?: string; skillId?: string }
  | { type: "SHOW_EXPERIENCE"; cardId?: string }
  | { type: "SHOW_PROJECT"; projectId: string }
  | { type: "SHOW_ARCHITECTURE"; projectId?: string; nodeId?: string }
  | { type: "SHOW_CONTACT"; cardId?: string }
  | { type: "SHOW_EDUCATION" }
  | { type: "FOCUS_CARD"; cardId: string; page?: string }
  | { type: "NO_ACTION" };

export type AssistantState = 'idle' | 'listening' | 'processing' | 'speaking' | 'error';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'reva' | 'jarvis';
  text: string;
  timestamp: string;
  action?: PortfolioAction;
  intent?: string;
  audioAvailable?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'AI and NLP' | 'Data Analytics' | 'Games';
  overview: string;
  technologies: string[];
  keyFeatures: string[];
  contributions: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  relatedQuestions: string[];
  hasArchitecture?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  type: 'Internship';
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  period: string;
  field: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
}

export interface SkillItem {
  name: string;
  description: string;
  evidence: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'ui' | 'frontend' | 'backend' | 'database' | 'external' | 'auth';
  icon: string;
  x: number;
  y: number;
  responsibilities: string[];
  inputs: string[];
  outputs: string[];
  relationships: string[];
  tech: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label: string;
  animated?: boolean;
}

export interface ArchitectureGraph {
  projectId: string;
  projectName: string;
  description: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export interface ApiEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  headers: Record<string, string>;
  params?: Record<string, string>;
  requestBody?: Record<string, unknown> | null;
  responseStatus: number;
  responseBody: Record<string, unknown>;
  projectSource: string;
}
