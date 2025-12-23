import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { notes, getNoteById } from '@/data/notes';
import { perfumes } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';
import { getNoteImage } from '@/data/noteImages';
import { getPerfumeImage } from '@/data/perfumeImages';

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

  // Category color mapping
  const categoryColors: Record<string, string> = {
    citrus: 'hsl(45 93% 58%)',
    virágos: 'hsl(340 82% 76%)',
    fűszeres: 'hsl(25 95% 53%)',
    fás: 'hsl(30 41% 45%)',
    pézsma: 'hsl(280 30% 70%)',
    gyümölcsös: 'hsl(350 80% 65%)',
    aromás: 'hsl(150 40% 50%)',
    édes: 'hsl(330 70% 75%)',
    balzsamikus: 'hsl(35 60% 50%)',
    bőr: 'hsl(20 30% 40%)',
    aquás: 'hsl(200 70% 60%)',
    zöld: 'hsl(120 40% 55%)',
  };

  const accentColor = categoryColors[note.category] || 'hsl(45 93% 58%)';

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <div className="border-b border-border/30 bg-[#faf8f5]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/notes" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm">Vissza</span>
            </Link>
            
            <div className="text-center flex-1">
              <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-foreground">
                {note.name}
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                {pairsWithNotes.length} párosítás
              </p>
            </div>

            {/* Category circle */}
            <div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex-shrink-0"
              style={{ 
                borderColor: accentColor,
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square">
              {noteImage ? (
                <img 
                  src={noteImage} 
                  alt={note.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center">
                  <span className="text-6xl text-muted-foreground">{note.name.charAt(0)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right - Info */}
          <div>
            {/* Attributes */}
            <div className="mb-8">
              <h2 className="font-serif text-xl mb-4 text-foreground">Jellemzők</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 border border-border rounded-full text-sm text-foreground capitalize">
                  {note.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-serif text-xl mb-4 text-foreground">Leírás</h2>
              <p className="text-muted-foreground leading-relaxed">
                {note.description}
              </p>
            </div>

            {/* Pairs With */}
            {pairsWithNotes.length > 0 && (
              <div>
                <Link 
                  to="#pairs" 
                  className="text-sm text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  PÁROSÍTÁSOK MEGTEKINTÉSE
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pairs With Section */}
      {pairsWithNotes.length > 0 && (
        <div id="pairs" className="border-t border-border/30 bg-[#faf8f5]">
          <div className="container mx-auto px-4 py-12">
            <h2 className="font-serif text-2xl mb-8 text-foreground">Jól párosul vele</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {pairsWithNotes.map(n => {
                if (!n) return null;
                const img = getNoteImage(n.id);
                return (
                  <Link 
                    key={n.id} 
                    to={`/notes/${n.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-border/50 group-hover:border-primary transition-colors overflow-hidden bg-white mb-2">
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
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      {n.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Related Perfumes */}
      {relatedPerfumes.length > 0 && (
        <div className="border-t border-border/30 bg-[#faf8f5]">
          <div className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-foreground">Parfümök ezzel a jeggyel</h2>
              <Link to="/perfumes" className="text-sm text-foreground underline underline-offset-4 hover:text-primary">
                ÖSSZES
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {relatedPerfumes.slice(0, 6).map(perfume => {
                const brand = getBrandById(perfume.brandId);
                return (
                  <Link key={perfume.id} to={`/perfumes/${perfume.slug}`} className="group">
                    <div className="bg-white rounded-lg p-4 text-center border border-border/30 hover:border-border transition-colors">
                      <div className="w-full aspect-square bg-muted/30 rounded-lg mb-3 overflow-hidden">
                        <img 
                          src={getPerfumeImage(perfumes.findIndex(p => p.id === perfume.id))}
                          alt={perfume.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-primary mb-1">{brand?.name}</p>
                      <h3 className="font-serif text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {perfume.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
