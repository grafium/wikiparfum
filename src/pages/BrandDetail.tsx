import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getBrandBySlug } from '@/data/brands';
import { getPerfumesByBrand, perfumes as allPerfumes } from '@/data/perfumes';
import { getBrandImage } from '@/data/brandImages';
import { getPerfumeImage } from '@/data/perfumeImages';

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = getBrandBySlug(slug || '');

  if (!brand) {
    return <div className="container mx-auto px-4 py-16 text-center">Márka nem található.</div>;
  }

  const perfumes = getPerfumesByBrand(brand.id);
  const brandImage = getBrandImage(brand.id);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Kezdőlap</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/brands" className="hover:text-foreground">Márkák</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{brand.name}</span>
      </nav>

      {/* Hero Image */}
      {brandImage && (
        <div className="relative h-64 md:h-80 overflow-hidden mb-8">
          <img 
            src={brandImage} 
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h1 className="font-serif text-display-3 text-foreground">{brand.name}</h1>
          </div>
        </div>
      )}

      <div className="max-w-3xl mb-12">
        {!brandImage && <h1 className="font-serif text-display-3 mb-4">{brand.name}</h1>}
        <div className="flex gap-3 mb-4">
          <span className="px-3 py-1 bg-muted rounded-full text-sm">{brand.country}</span>
          <span className="px-3 py-1 bg-muted rounded-full text-sm">Alapítva: {brand.foundedYear}</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm capitalize">{brand.type}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg">{brand.description}</p>
      </div>

      <h2 className="font-serif text-heading-2 mb-6">{brand.name} parfümök</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {perfumes.map(perfume => (
          <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
            <div className="luxury-card p-4 text-center">
              <div className="w-full aspect-square bg-muted mb-3 overflow-hidden">
                <img 
                  src={getPerfumeImage(allPerfumes.findIndex(p => p.id === perfume.id))}
                  alt={perfume.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-sm font-medium">{perfume.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{perfume.concentration} • {perfume.releaseYear}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
