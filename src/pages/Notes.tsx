import { Link } from 'react-router-dom';
import { notes } from '@/data/notes';

const categories = ['citrus', 'virágos', 'fűszeres', 'fás', 'pézsma', 'gyümölcsös', 'aromás', 'édes', 'balzsamikus', 'bőr', 'aquás', 'zöld'];

export default function Notes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-display-3 mb-2">Illatjegyek</h1>
      <p className="text-muted-foreground mb-8">Ismerd meg a parfümök építőelemeit</p>

      {categories.map(category => {
        const categoryNotes = notes.filter(n => n.category === category);
        if (categoryNotes.length === 0) return null;
        return (
          <section key={category} className="mb-10">
            <h2 className="font-serif text-heading-2 mb-4 capitalize">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {categoryNotes.map(note => (
                <Link key={note.id} to={`/notes/${note.slug}`}>
                  <span className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                    {note.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
