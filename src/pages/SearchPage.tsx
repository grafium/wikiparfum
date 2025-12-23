import { useSearchParams, Link } from 'react-router-dom';
import { searchPerfumes } from '@/data/perfumes';
import { searchBrands, getBrandById } from '@/data/brands';
import { searchNotes } from '@/data/notes';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const perfumeResults = searchPerfumes(query);
  const brandResults = searchBrands(query);
  const noteResults = searchNotes(query);

  const hasResults = perfumeResults.length || brandResults.length || noteResults.length;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-display-3 mb-2">Keresési eredmények</h1>
      <p className="text-muted-foreground mb-8">„{query}" kifejezésre</p>

      {!hasResults ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Nincs találat. Próbálj más kulcsszóval.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {perfumeResults.length > 0 && (
            <section>
              <h2 className="font-serif text-heading-2 mb-4">Parfümök ({perfumeResults.length})</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {perfumeResults.slice(0, 8).map(p => {
                  const brand = getBrandById(p.brandId);
                  return (
                    <Link key={p.id} to={`/perfumes/${p.slug}`}>
                      <div className="luxury-card p-4 text-center">
                        <div className="w-full aspect-square bg-muted mb-3 flex items-center justify-center">
                          <span className="text-3xl">🧴</span>
                        </div>
                        <p className="text-xs text-primary mb-1">{brand?.name}</p>
                        <h3 className="font-serif text-sm font-medium">{p.name}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {brandResults.length > 0 && (
            <section>
              <h2 className="font-serif text-heading-2 mb-4">Márkák ({brandResults.length})</h2>
              <div className="flex flex-wrap gap-3">
                {brandResults.map(b => (
                  <Link key={b.id} to={`/brands/${b.slug}`}>
                    <div className="px-4 py-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                      {b.name}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {noteResults.length > 0 && (
            <section>
              <h2 className="font-serif text-heading-2 mb-4">Illatjegyek ({noteResults.length})</h2>
              <div className="flex flex-wrap gap-2">
                {noteResults.map(n => (
                  <Link key={n.id} to={`/notes/${n.slug}`}>
                    <span className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                      {n.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
    </div>
  );
}
