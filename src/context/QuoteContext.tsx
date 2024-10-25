import React, { createContext, useContext, useState, useEffect } from 'react';
import { Quote } from '../types';
import { generateQuote } from '../services/quoteGenerator';

interface QuoteContextType {
  currentQuote: Quote | null;
  getNewQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const getNewQuote = () => {
    setCurrentQuote(generateQuote());
  };

  useEffect(() => {
    const lastUpdate = localStorage.getItem('lastQuoteUpdate');
    const today = new Date().toDateString();

    if (lastUpdate !== today || !currentQuote) {
      getNewQuote();
      localStorage.setItem('lastQuoteUpdate', today);
    }
  }, []);

  return (
    <QuoteContext.Provider value={{
      currentQuote,
      getNewQuote,
    }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};