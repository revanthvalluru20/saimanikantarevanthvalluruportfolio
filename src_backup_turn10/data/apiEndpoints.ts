import { ApiEndpoint } from '../types/portfolio';

export const mockApiEndpoints: ApiEndpoint[] = [
  {
    id: "vv-register-otp",
    name: "Dispatch Registration OTP (Brevo Email API)",
    method: "POST",
    path: "/api/v1/auth/register-otp",
    description: "Generates a secure one-time password and dispatches an email verification code using the Brevo Email API.",
    projectSource: "VibeVerse Platform",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    requestBody: {
      username: "gamer_pro",
      email: "gamer@example.com"
    },
    responseStatus: 200,
    responseBody: {
      success: true,
      message: "Verification OTP sent successfully via Brevo.",
      expiresIn: "10m"
    }
  },
  {
    id: "vv-verify-login",
    name: "User Login & JWT Token Issuance",
    method: "POST",
    path: "/api/v1/auth/verify-login",
    description: "Validates credentials, verifies session, and returns a signed JSON Web Token for route protection.",
    projectSource: "VibeVerse Platform",
    headers: {
      "Content-Type": "application/json"
    },
    requestBody: {
      email: "gamer@example.com",
      password: "••••••••••••"
    },
    responseStatus: 200,
    responseBody: {
      success: true,
      user: {
        id: "usr_99182a",
        username: "gamer_pro",
        status: "online"
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...[JWT]",
      expiresIn: "7d"
    }
  },
  {
    id: "mai-explain-code",
    name: "Contextual Code Explanation (Gemini API Contract)",
    method: "POST",
    path: "/api/v1/code/explain",
    description: "Sends selected code snippet with language context to generate step-by-step guidance without exposing private keys.",
    projectSource: "MentorAI-CodeSpace",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1Ni...[JWT]",
      "Content-Type": "application/json"
    },
    requestBody: {
      language: "javascript",
      codeSnippet: "function binarySearch(arr, target) { ... }",
      queryType: "explanation"
    },
    responseStatus: 200,
    responseBody: {
      success: true,
      guidance: "Binary search operates in O(log n) time by halving the search space on each iteration...",
      suggestedFixes: []
    }
  },
  {
    id: "mai-session-save",
    name: "Save Coding Session to MongoDB",
    method: "POST",
    path: "/api/v1/sessions/save",
    description: "Persists user's Monaco Editor code buffers, active language tabs, and standard input settings.",
    projectSource: "MentorAI-CodeSpace",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1Ni...[JWT]",
      "Content-Type": "application/json"
    },
    requestBody: {
      sessionId: "sess_4410",
      fileName: "solution.py",
      codeContent: "def solve():\n    return True\n"
    },
    responseStatus: 200,
    responseBody: {
      success: true,
      updatedAt: "2026-10-19T13:40:00Z"
    }
  },
  {
    id: "dest-translate",
    name: "Azure AI Translation Service Proxy",
    method: "POST",
    path: "/api/v1/localization/translate",
    description: "Proxies interface text to Microsoft Azure AI Translation Services with i18n support.",
    projectSource: "Destini.ai Platform",
    headers: {
      "Content-Type": "application/json"
    },
    requestBody: {
      texts: ["Welcome to the workspace."],
      fromLanguage: "en",
      toLanguage: "es"
    },
    responseStatus: 200,
    responseBody: {
      success: true,
      translated: ["Bienvenido al espacio de trabajo."]
    }
  },
  {
    id: "dest-payout-sso",
    name: "Initiate Payout SSO Handshake",
    method: "POST",
    path: "/api/v1/payouts/sso/initiate",
    description: "Initiates Single Sign-On payout authentication flow and generates secure callback handshake token.",
    projectSource: "Destini.ai Platform",
    headers: {
      "Content-Type": "application/json"
    },
    requestBody: {
      payoutId: "pay_7721",
      amount: "250.00",
      currency: "USD"
    },
    responseStatus: 200,
    responseBody: {
      success: true,
      status: "SSO_HANDSHAKE_INITIATED",
      authRedirectUrl: "https://auth.destini.ai/sso/payout?token=tok_88192a"
    }
  }
];
