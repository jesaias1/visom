import React from 'react';
import { QuoteProvider } from './context/QuoteContext';
import { Quote as QuoteIcon, RefreshCw } from 'lucide-react';
import { useQuote } from './context/QuoteContext';

const MainContent = () => {
  const { currentQuote, getNewQuote } = useQuote();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-3 mb-16">
        <QuoteIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800">Dagens Visdom</h1>
      </div>

      {currentQuote && (
        <div className="max-w-3xl text-center mb-16">
          <blockquote className="text-3xl font-light text-gray-700 italic mb-6">
            "{currentQuote.text}"
          </blockquote>
          <p className="text-xl text-gray-600">
            - {currentQuote.author}
          </p>
        </div>
      )}

      <button
        onClick={getNewQuote}
        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-lg"
      >
        <RefreshCw className="w-5 h-5" />
        Nyt Citat
      </button>
    </div>
  );
};

function App() {
  return (
    <QuoteProvider>
      <MainContent />
    </QuoteProvider>
  );
}

export default App;