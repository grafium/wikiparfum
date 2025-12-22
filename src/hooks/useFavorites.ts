import { useState, useCallback } from 'react';

const STORAGE_KEY = 'parfumpedia-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = useCallback((perfumeId: string) => {
    setFavorites(prev => {
      const next = prev.includes(perfumeId)
        ? prev.filter(id => id !== perfumeId)
        : [...prev, perfumeId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isFavorite = useCallback((perfumeId: string) => {
    return favorites.includes(perfumeId);
  }, [favorites]);

  return { favorites, toggleFavorite, isFavorite };
}
