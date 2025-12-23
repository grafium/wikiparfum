import { Link } from 'react-router-dom';
import { collections } from '@/data/collections';
import { getCollectionImage } from '@/data/collectionImages';

export default function Collections() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-display-3 mb-3">Gyűjtemények</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Szerkesztett parfümlisták különböző alkalmakra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(collection => {
            const image = getCollectionImage(collection.id);
            return (
              <Link key={collection.id} to={`/collections/${collection.slug}`}>
                <div className="luxury-card overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    {image ? (
                      <img 
                        src={image} 
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-4xl">📦</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-heading-3 mb-1">{collection.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{collection.description}</p>
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                      {collection.perfumeIds.length} parfüm
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
