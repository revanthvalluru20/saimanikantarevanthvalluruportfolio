import { PortfolioAction } from '../types/portfolio';
import { interviewKnowledgeBase, fallbackKnowledgeItem, KnowledgeItem } from '../data/interviewKnowledge';
import { validatePortfolioAction } from './navigationActions';

export interface AssistantResult {
  message: string;
  action: PortfolioAction;
  intent: string;
  suggestedFollowUps: string[];
  confidence: number;
}

// Extensible provider interface for future browser-safe LLM integration
export interface AssistantProvider {
  ask(query: string, context?: string): Promise<AssistantResult>;
}

class RuleBasedAssistantEngine implements AssistantProvider {
  private normalize(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^\w\s]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private extractTokens(normalized: string): string[] {
    return normalized
      .split(' ')
      .filter(w => w.length > 2 && !['the', 'and', 'for', 'with', 'you', 'can', 'are'].includes(w));
  }

  public async ask(query: string, _context?: string): Promise<AssistantResult> {
    const rawNormalized = this.normalize(query);
    if (!rawNormalized) {
      return {
        message: "I am ready for your question. You can ask about my skills, projects, architecture, or internship at Destini.ai.",
        action: { type: "NO_ACTION" },
        intent: "EMPTY_PROMPT",
        suggestedFollowUps: [
          "Tell me about yourself.",
          "What are your technical skills?",
          "Explain VibeVerse."
        ],
        confidence: 1.0
      };
    }

    // 1. Direct Trigger or Substring Match (Highest confidence)
    for (const item of interviewKnowledgeBase) {
      for (const trigger of item.triggers) {
        const normTrigger = this.normalize(trigger);
        if (rawNormalized === normTrigger || rawNormalized.includes(normTrigger) || normTrigger.includes(rawNormalized)) {
          return {
            message: item.answer,
            action: validatePortfolioAction(item.action),
            intent: item.intent,
            suggestedFollowUps: item.suggestedFollowUps,
            confidence: 0.95
          };
        }
      }
    }

    // 2. Keyword Overlap Scoring
    const queryTokens = this.extractTokens(rawNormalized);
    let bestItem: KnowledgeItem | null = null;
    let highestScore = 0;

    for (const item of interviewKnowledgeBase) {
      let score = 0;
      const combinedKeywords = [...item.keywords, ...this.extractTokens(item.triggers.join(' '))];

      for (const token of queryTokens) {
        if (combinedKeywords.some(kw => kw.includes(token) || token.includes(kw))) {
          score += 1;
        }
      }

      // Normalize by query token count
      const normalizedScore = queryTokens.length > 0 ? score / queryTokens.length : 0;

      if (normalizedScore > highestScore) {
        highestScore = normalizedScore;
        bestItem = item;
      }
    }

    // Threshold check (must have at least ~30% keyword match or minimum 1 solid keyword hit)
    if (bestItem && highestScore >= 0.25) {
      return {
        message: bestItem.answer,
        action: validatePortfolioAction(bestItem.action),
        intent: bestItem.intent,
        suggestedFollowUps: bestItem.suggestedFollowUps,
        confidence: Math.min(0.85, highestScore)
      };
    }

    // 3. Fallback when intent is unknown
    return {
      message: fallbackKnowledgeItem.answer,
      action: validatePortfolioAction(fallbackKnowledgeItem.action),
      intent: fallbackKnowledgeItem.intent,
      suggestedFollowUps: fallbackKnowledgeItem.suggestedFollowUps,
      confidence: 0.1
    };
  }
}

// Singleton export
export const assistantEngine = new RuleBasedAssistantEngine();
