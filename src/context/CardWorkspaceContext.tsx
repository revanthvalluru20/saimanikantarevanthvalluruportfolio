import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface CardWorkspaceContextType {
  activeCardId: string | null;
  setActiveCardId: (id: string | null) => void;
  focusCard: (cardId: string, pageUrl?: string) => void;
  isCardFocused: (cardId: string) => boolean;
}

const CardWorkspaceContext = createContext<CardWorkspaceContextType | undefined>(undefined);

export const CardWorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const focusCard = useCallback((cardId: string, pageUrl?: string) => {
    setActiveCardId(cardId);

    if (pageUrl && location.pathname !== pageUrl) {
      navigate(pageUrl);
    }

    // Scroll the target card into view smoothly
    setTimeout(() => {
      const element = document.getElementById(cardId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 250);
  }, [location.pathname, navigate]);

  const isCardFocused = useCallback((cardId: string) => {
    return activeCardId === cardId;
  }, [activeCardId]);

  // Clear or maintain active card when page changes if appropriate
  useEffect(() => {
    // If card belongs to another page, keep state or let page handle default focus
  }, [location.pathname]);

  return (
    <CardWorkspaceContext.Provider
      value={{
        activeCardId,
        setActiveCardId,
        focusCard,
        isCardFocused
      }}
    >
      {children}
    </CardWorkspaceContext.Provider>
  );
};

export const useCardWorkspace = () => {
  const context = useContext(CardWorkspaceContext);
  if (!context) {
    throw new Error('useCardWorkspace must be used within a CardWorkspaceProvider');
  }
  return context;
};
