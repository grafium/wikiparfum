import { Link } from 'react-router-dom';
import { collections } from '@/data/collections';
import { getPerfumeById } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';
import { getCollectionImage } from '@/data/collectionImages';

export default function Collections() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-serif text-display-3 mb-2 text-foreground">Gyűjtemények</h1>
        <p className="text-muted-foreground mb-8">Szerkesztett parfümlisták különböző alkalmakra</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {collections.map(collection => {
            const collectionImage = getCollectionImage(collection.id);
            return (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.slug}`}
                className="group"
              >
                <div className="relative h-56 rounded-xl overflow-hidden mb-3">
                  {collectionImage ? (
                    <img 
                      src={collectionImage} 
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-4xl">📦</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="font-serif text-xl text-white group-hover:text-primary transition-colors mb-1">
                      {collection.name}
                    </h2>
                    <p className="text-white/70 text-sm">
                      {collection.perfumeIds.length} parfüm
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {collection.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="space-y-16">
          {collections.map(collection => {
            const collectionImage = getCollectionImage(collection.id);
            return (
              <section key={collection.id} id={collection.slug} className="scroll-mt-24">
                <div className="flex items-start gap-6 mb-6">
                  {collectionImage && (
                    <div className="hidden md:block w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={collectionImage} 
                        alt={collection.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="font-serif text-heading-2 mb-2 text-foreground">{collection.name}</h2>
                    <p className="text-muted-foreground">{collection.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {collection.perfumeIds.map(id => {
                    const perfume = getPerfumeById(id);
                    if (!perfume) return null;
                    const brand = getBrandById(perfume.brandId);
                    return (
                      <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
                        <div className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                          <div className="w-full aspect-square bg-[#f5f3f0] rounded-lg mb-3 flex items-center justify-center">
                            <span className="text-3xl">🧴</span>
                          </div>
                          <p className="text-xs text-primary mb-1">{brand?.name}</p>
                          <h3 className="font-serif text-sm font-medium text-foreground">{perfume.name}</h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
