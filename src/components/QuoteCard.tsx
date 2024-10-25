import React from 'react';
import { Quote } from '../types';
import { Heart, Share2, RefreshCw, Twitter, Facebook, Copy } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const { toggleFavorite, isQuoteFavorite, getNewQuote } = useQuote();

  const handleShare = async (platform: 'twitter' | 'facebook' | 'copy') => {
    const quoteText = `"${quote.text}" - ${quote.author}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quoteText)}`);
        break;
      case 'copy':
        await navigator.clipboard.writeText(quoteText);
        break;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-auto">
      <div className="space-y-6">
        <blockquote className="text-2xl font-light text-gray-700 italic">
          "{quote.text}"
        </blockquote>
        
        <p className="text-right text-lg text-gray-600">
          - {quote.author}
        </p>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <button
                onClick={() => toggleFavorite(quote)}
                className={`p-2 rounded-full transition-colors ${
                  isQuoteFavorite(quote.id)
                    ? 'text-red-500 hover:bg-red-50'
                    : 'text-gray-400 hover:bg-gray-50'
                }`}
                aria-label={isQuoteFavorite(quote.id) ? 'Fjern fra favoritter' : 'Tilføj til favoritter'}
              >
                <Heart className={`w-6 h-6 ${isQuoteFavorite(quote.id) ? 'fill-current' : ''}`} />
              </button>
              
              <div className="relative group">
                <button className="p-2 rounded-full text-gray-400 hover:bg-gray-50" aria-label="Del citat">
                  <Share2 className="w-6 h-6" />
                </button>
                <div className="absolute left-0 mt-2 hidden group-hover:flex gap-2 bg-white shadow-lg rounded-lg p-2">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 rounded-full text-blue-400 hover:bg-blue-50"
                    aria-label="Del på Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-full text-blue-600 hover:bg-blue-50"
                    aria-label="Del på Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="p-2 rounded-full text-gray-500 hover:bg-gray-50"
                    aria-label="Kopiér til udklipsholder"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <button
              onClick={getNewQuote}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Nyt Citat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};