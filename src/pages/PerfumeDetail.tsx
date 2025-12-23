import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPerfumeBySlug, getSimilarPerfumes } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';
import { getNoteById } from '@/data/notes';
import { useFavorites } from '@/hooks/useFavorites';
import { getNoteImage } from '@/data/noteImages';

export default function PerfumeDetail() {
  const { slug } = useParams();
  const perfume = getPerfumeBySlug(slug || '');
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!perfume) {
    return <div className="container mx-auto px-4 py-16 text-center">Parfüm nem található.</div>;
  }

  const brand = getBrandById(perfume.brandId);
  const similarPerfumes = getSimilarPerfumes(perfume, 4);

  const renderNotes = (noteIds: string[], label: string) => {
    const notes = noteIds.map(id => getNoteById(id)).filter(Boolean);
    return (
      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-4">{label}</h4>
        <div className="flex flex-wrap gap-4">
          {notes.map(note => {
            if (!note) return null;
            const image = getNoteImage(note.id);
            return (
              <Link 
                key={note.id} 
                to={`/notes/${note.slug}`}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-border/50 group-hover:border-primary transition-colors overflow-hidden bg-muted mb-1.5">
                  {image ? (
                    <img 
                      src={image} 
                      alt={note.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                      {note.name.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                  {note.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  const renderBar = (value: number, label: string) => (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="text-muted-foreground">{value}/5</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: `${value * 20}%` }} />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Kezdőlap</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/perfumes" className="hover:text-foreground">Parfümök</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{perfume.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
          <span className="text-8xl">🧴</span>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <Link to={`/brands/${brand?.slug}`} className="text-primary hover:underline text-sm font-medium">
                {brand?.name}
              </Link>
              <h1 className="font-serif text-display-3 mt-1">{perfume.name}</h1>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => toggleFavorite(perfume.id)}
              className={isFavorite(perfume.id) ? 'text-red-500 border-red-500' : ''}
            >
              <Heart className={`h-5 w-5 ${isFavorite(perfume.id) ? 'fill-current' : ''}`} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{perfume.gender}</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">{perfume.concentration}</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">{perfume.releaseYear}</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm capitalize">{perfume.family}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">{perfume.description}</p>

          {/* Performance */}
          <div className="space-y-4 mb-8">
            {renderBar(perfume.longevity, 'Tartósság')}
            {renderBar(perfume.sillage, 'Szilázs')}
          </div>

          {/* When to wear */}
          <div className="mb-8">
            <h3 className="font-serif text-heading-3 mb-3">Mikor viseld?</h3>
            <div className="flex flex-wrap gap-2">
              {perfume.seasons.map(s => (
                <span key={s} className="px-3 py-1 bg-muted rounded-full text-sm capitalize">{s}</span>
              ))}
              {perfume.occasions.map(o => (
                <span key={o} className="px-3 py-1 bg-muted rounded-full text-sm capitalize">{o}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fragrance Pyramid */}
      <section className="mt-12">
        <h2 className="font-serif text-heading-2 mb-6">Illatpiramis</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {renderNotes(perfume.topNotes, 'Fejjegyek')}
          {renderNotes(perfume.heartNotes, 'Szívjegyek')}
          {renderNotes(perfume.baseNotes, 'Alapjegyek')}
        </div>
      </section>

      {/* Accords */}
      <section className="mt-12">
        <h2 className="font-serif text-heading-2 mb-4">Akkordok</h2>
        <div className="flex flex-wrap gap-2">
          {perfume.accords.map(accord => (
            <span key={accord} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm capitalize">
              {accord}
            </span>
          ))}
        </div>
      </section>

      {/* Similar */}
      {similarPerfumes.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-heading-2 mb-6">Hasonló parfümök</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarPerfumes.map(p => {
              const b = getBrandById(p.brandId);
              return (
                <Link key={p.id} to={`/perfumes/${p.slug}`}>
                  <div className="luxury-card p-4 text-center">
                    <div className="w-full aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-3xl">🧴</span>
                    </div>
                    <p className="text-xs text-primary mb-1">{b?.name}</p>
                    <h3 className="font-serif text-sm font-medium">{p.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
