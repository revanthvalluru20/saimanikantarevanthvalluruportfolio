import { PortfolioAction } from '../types/portfolio';

export function validatePortfolioAction(action: unknown): PortfolioAction {
  if (!action || typeof action !== 'object') {
    return { type: "NO_ACTION" };
  }

  const act = action as Record<string, unknown>;

  switch (act.type) {
    case "SHOW_ABOUT":
      return { type: "SHOW_ABOUT" };
    case "SHOW_SKILLS":
      return {
        type: "SHOW_SKILLS",
        category: typeof act.category === 'string' ? act.category : undefined
      };
    case "SHOW_EXPERIENCE":
      return { type: "SHOW_EXPERIENCE" };
    case "SHOW_PROJECT":
      if (typeof act.projectId === 'string' && act.projectId.trim().length > 0) {
        return { type: "SHOW_PROJECT", projectId: act.projectId };
      }
      return { type: "SHOW_PROJECT", projectId: "vibeverse" };
    case "SHOW_ARCHITECTURE":
      return {
        type: "SHOW_ARCHITECTURE",
        projectId: typeof act.projectId === 'string' ? act.projectId : "vibeverse",
        nodeId: typeof act.nodeId === 'string' ? act.nodeId : undefined
      };
    case "SHOW_CONTACT":
      return { type: "SHOW_CONTACT" };
    case "SHOW_EDUCATION":
      return { type: "SHOW_EDUCATION" };
    case "FOCUS_CARD":
      return {
        type: "FOCUS_CARD",
        cardId: typeof act.cardId === 'string' ? act.cardId : 'profile-card',
        page: typeof act.page === 'string' ? act.page : undefined
      };
    default:
      return { type: "NO_ACTION" };
  }
}
