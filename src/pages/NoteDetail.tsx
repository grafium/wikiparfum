import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { notes, getNoteById } from '@/data/notes';
import { perfumes } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';

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

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Kezdőlap</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/notes" className="hover:text-foreground">Illatjegyek</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{note.name}</span>
      </nav>

      <div className="max-w-3xl mb-12">
        <span className="text-sm text-primary capitalize">{note.category}</span>
        <h1 className="font-serif text-display-3 mt-1 mb-4">{note.name}</h1>
        <p className="text-muted-foreground leading-relaxed">{note.description}</p>
      </div>

      {pairsWithNotes.length > 0 && (
        <section className="mb-12">
          <h2 className="font-serif text-heading-2 mb-4">Jól párosul vele</h2>
          <div className="flex flex-wrap gap-2">
            {pairsWithNotes.map(n => n && (
              <Link key={n.id} to={`/notes/${n.slug}`}>
                <span className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  {n.name}
                </span>
              </Link>
            ))}
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
