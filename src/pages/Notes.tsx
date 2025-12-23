import { Link } from 'react-router-dom';
import { notes } from '@/data/notes';
import { getNoteImage } from '@/data/noteImages';

const categories = [
  { id: 'citrus', name: 'Citrusos', color: 'hsl(45 93% 58%)' },
  { id: 'virágos', name: 'Virágos', color: 'hsl(340 82% 76%)' },
  { id: 'fűszeres', name: 'Fűszeres', color: 'hsl(25 95% 53%)' },
  { id: 'fás', name: 'Fás', color: 'hsl(30 41% 45%)' },
  { id: 'pézsma', name: 'Pézsma', color: 'hsl(280 30% 70%)' },
  { id: 'gyümölcsös', name: 'Gyümölcsös', color: 'hsl(350 80% 65%)' },
  { id: 'aromás', name: 'Aromás', color: 'hsl(150 40% 50%)' },
  { id: 'édes', name: 'Édes', color: 'hsl(330 70% 75%)' },
  { id: 'balzsamikus', name: 'Balzsamikus', color: 'hsl(35 60% 50%)' },
  { id: 'bőr', name: 'Bőr', color: 'hsl(20 30% 40%)' },
  { id: 'aquás', name: 'Aquás', color: 'hsl(200 70% 60%)' },
  { id: 'zöld', name: 'Zöld', color: 'hsl(120 40% 55%)' },
];

export default function Notes() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header */}
      <div className="border-b border-border/30 bg-[#faf8f5]">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-foreground mb-3">
              Illatjegyek
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Válassz egy vagy több illatjegyet, és fedezd fel a parfümök építőelemeit
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Illatjegyek keresése..."
            className="w-full px-4 py-3 rounded-full border border-border/50 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 pb-16">
        {categories.map(category => {
          const categoryNotes = notes.filter(n => n.category === category.id);
          if (categoryNotes.length === 0) return null;
          return (
            <section key={category.id} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h2 className="font-serif text-xl uppercase tracking-wider text-foreground">
                  {category.name}
                </h2>
                <span className="text-muted-foreground text-sm">({categoryNotes.length})</span>
                <div className="flex-1" />
                <Link 
                  to={`/notes?category=${category.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
                >
                  ÖSSZES
                </Link>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
                {categoryNotes.map(note => {
                  const image = getNoteImage(note.id);
                  return (
                    <Link 
                      key={note.id} 
                      to={`/notes/${note.slug}`}
                      className="group flex flex-col items-center text-center"
                    >
                      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2">
                        <div className="absolute inset-0 rounded-full border border-border/50 group-hover:border-primary transition-colors overflow-hidden bg-white">
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
                      </div>
                      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                        {note.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
