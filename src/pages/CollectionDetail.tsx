import { Link, useParams } from 'react-router-dom';
import { getCollectionBySlug } from '@/data/collections';
import { getPerfumeById } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';
import { getCollectionImage } from '@/data/collectionImages';
import NotFound from './NotFound';

export default function CollectionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? getCollectionBySlug(slug) : undefined;

  if (!collection) {
    return <NotFound />;
  }

  const collectionImage = getCollectionImage(collection.id);
  const perfumes = collection.perfumeIds
    .map(id => getPerfumeById(id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        {collectionImage ? (
          <img 
            src={collectionImage} 
            alt={collection.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <Link 
              to="/collections" 
              className="text-white/80 hover:text-white text-sm mb-3 inline-block"
            >
              ← Vissza a gyűjteményekhez
            </Link>
            <h1 className="font-serif text-3xl md:text-5xl text-white mb-2">
              {collection.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">
              {collection.description}
            </p>
          </div>
        </div>
      </div>

      {/* Perfumes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl text-foreground">
            Parfümök ebben a gyűjteményben
          </h2>
          <span className="text-muted-foreground">
            {perfumes.length} parfüm
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {perfumes.map(perfume => {
            if (!perfume) return null;
            const brand = getBrandById(perfume.brandId);
            return (
              <Link 
                key={perfume.id} 
                to={`/perfumes/${perfume.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-5 hover:shadow-lg transition-shadow">
                  <div className="w-full aspect-square bg-[#f5f3f0] rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🧴</span>
                  </div>
                  <p className="text-xs text-primary mb-1">{brand?.name}</p>
                  <h3 className="font-serif text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {perfume.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs px-2 py-1 bg-[#f5f3f0] rounded text-muted-foreground">
                      {perfume.family}
                    </span>
                    <span className="text-xs px-2 py-1 bg-[#f5f3f0] rounded text-muted-foreground">
                      {perfume.gender}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {perfumes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Még nincsenek parfümök ebben a gyűjteményben.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
