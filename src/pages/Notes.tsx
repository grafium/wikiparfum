import { Link } from 'react-router-dom';
import { notes } from '@/data/notes';
import { getNoteImage } from '@/data/noteImages';

const categories = [
  { id: 'citrus', name: 'Citrusos' },
  { id: 'virágos', name: 'Virágos' },
  { id: 'fűszeres', name: 'Fűszeres' },
  { id: 'fás', name: 'Fás' },
  { id: 'pézsma', name: 'Pézsma' },
  { id: 'gyümölcsös', name: 'Gyümölcsös' },
  { id: 'aromás', name: 'Aromás' },
  { id: 'édes', name: 'Édes' },
  { id: 'balzsamikus', name: 'Balzsamikus' },
  { id: 'bőr', name: 'Bőr' },
  { id: 'aquás', name: 'Aquás' },
  { id: 'zöld', name: 'Zöld' },
];

export default function Notes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-serif text-display-3 mb-3">Illatjegyek</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Válassz egy vagy több illatjegyet, és fedezd fel a parfümök építőelemeit
        </p>
      </div>

      {categories.map(category => {
        const categoryNotes = notes.filter(n => n.category === category.id);
        if (categoryNotes.length === 0) return null;
        return (
          <section key={category.id} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-heading-2 uppercase tracking-wider text-foreground/80">
                {category.name} <span className="text-muted-foreground font-sans text-sm">({categoryNotes.length})</span>
              </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {categoryNotes.map(note => {
                const image = getNoteImage(note.id);
                return (
                  <Link 
                    key={note.id} 
                    to={`/notes/${note.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2">
                      <div className="absolute inset-0 rounded-full border-2 border-border/50 group-hover:border-primary transition-colors overflow-hidden bg-muted">
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
                    <span className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
  );
}
