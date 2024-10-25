import React from 'react';
import { Category, CategoryTranslations } from '../types';
import { useQuote } from '../context/QuoteContext';

const categories: Category[] = ['All', 'Work', 'Life', 'Joy', 'Self-Esteem'];

export const CategorySelector: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useQuote();

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          {CategoryTranslations[category]}
        </button>
      ))}
    </div>
  );
};