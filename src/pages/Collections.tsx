import { Link } from 'react-router-dom';
import { collections } from '@/data/collections';
import { getPerfumeById } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';

export default function Collections() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-display-3 mb-2">Gyűjtemények</h1>
      <p className="text-muted-foreground mb-8">Szerkesztett parfümlisták különböző alkalmakra</p>

      <div className="space-y-12">
        {collections.map(collection => (
          <section key={collection.id}>
            <h2 className="font-serif text-heading-2 mb-2">{collection.name}</h2>
            <p className="text-muted-foreground mb-4">{collection.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {collection.perfumeIds.slice(0, 4).map(id => {
                const perfume = getPerfumeById(id);
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
          </section>
        ))}
      </div>
    </div>
  );
}
