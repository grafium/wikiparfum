import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { getPerfumeById } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';

export default function Favorites() {
  const { favorites } = useFavorites();
  const favoritePerfumes = favorites.map(id => getPerfumeById(id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-display-3 mb-2">Kedvenceim</h1>
      <p className="text-muted-foreground mb-8">A kedvenc parfümjeid egy helyen</p>

      {favoritePerfumes.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">Még nincsenek kedvenceid.</p>
          <Link to="/perfumes" className="text-primary hover:underline">
            Böngéssz a parfümök között →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favoritePerfumes.map(perfume => {
            if (!perfume) return null;
            const brand = getBrandById(perfume.brandId);
            return (
              <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
                <div className="luxury-card p-4 text-center">
                  <div className="w-full aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-3xl">🧴</span>
                  </div>
                  <p className="text-xs text-primary mb-1">{brand?.name}</p>
                  <h3 className="font-serif text-sm font-medium">{perfume.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
    </div>
  );
}
