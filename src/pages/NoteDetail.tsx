import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { notes, getNoteById } from '@/data/notes';
import { perfumes } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';
import { getNoteImage } from '@/data/noteImages';

export default function NoteDetail() {
  const { slug } = useParams();
  const note = notes.find(n => n.slug === slug);

  if (!note) {
    return <div className="container mx-auto px-4 py-16 text-center">Illatjegy nem található.</div>;
  }

  const relatedPerfumes = perfumes.filter(p =>
    p.topNotes.includes(note.id) || p.heartNotes.includes(note.id) || p.baseNotes.includes(note.id)
  );

  const pairsWithNotes = note.pairsWith.map(id => getNoteById(id)).filter(Boolean);
  const noteImage = getNoteImage(note.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Kezdőlap</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/notes" className="hover:text-foreground">Illatjegyek</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{note.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Note Image */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-border overflow-hidden bg-muted mx-auto">
            {noteImage ? (
              <img 
                src={noteImage} 
                alt={note.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-4xl">
                {note.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Note Info */}
        <div className="flex-1">
          <span className="text-sm text-primary capitalize font-medium">{note.category}</span>
          <h1 className="font-serif text-display-3 mt-1 mb-4">{note.name}</h1>
          <p className="text-muted-foreground leading-relaxed text-lg">{note.description}</p>
        </div>
      </div>

      {pairsWithNotes.length > 0 && (
        <section className="mb-12">
          <h2 className="font-serif text-heading-2 mb-6">Jól párosul vele</h2>
          <div className="flex flex-wrap gap-4">
            {pairsWithNotes.map(n => {
              if (!n) return null;
              const img = getNoteImage(n.id);
              return (
                <Link 
                  key={n.id} 
                  to={`/notes/${n.slug}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border/50 group-hover:border-primary transition-colors overflow-hidden bg-muted mb-2">
                    {img ? (
                      <img 
                        src={img} 
                        alt={n.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        {n.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {n.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-serif text-heading-2 mb-6">Parfümök ezzel a jeggyel</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedPerfumes.slice(0, 8).map(perfume => {
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
    </div>
  );
}
