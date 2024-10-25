import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Heart, Share2 } from 'lucide-react';

export const FavoritesList: React.FC = () => {
  const { favorites, toggleFavorite } = useQuote();

  if (favorites.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        Ingen favoritcitater endnu. Klik på hjertet ved et citat for at gemme det her!
      </div>
    );
  }

  return (
    <div className="grid gap-6 mt-8">
      {favorites.map((quote) => (
        <div key={quote.id} className="bg-white rounded-lg shadow p-6">
          <blockquote className="text-lg text-gray-700 italic mb-4">
            "{quote.text}"
          </blockquote>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">- {quote.author}</p>
            <div className="flex gap-2">
              <button
                onClick={() => toggleFavorite(quote)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                aria-label="Fjern fra favoritter"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
              <button 
                className="text-gray-400 hover:bg-gray-50 p-2 rounded-full transition-colors"
                aria-label="Del citat"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};