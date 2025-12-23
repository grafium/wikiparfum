import { Link } from 'react-router-dom';
import { brands } from '@/data/brands';
import { getBrandImage } from '@/data/brandImages';

export default function Brands() {
  const sorted = [...brands].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-serif text-display-3 mb-3">Márkák</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Böngéssz a világ legkiválóbb parfümmárkái között
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map(brand => {
          const image = getBrandImage(brand.id);
          return (
            <Link key={brand.id} to={`/brands/${brand.slug}`}>
              <div className="luxury-card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  {image ? (
                    <img 
                      src={image} 
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-4xl font-serif text-muted-foreground">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-heading-3 mb-1">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{brand.country} • {brand.foundedYear}</p>
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded text-xs capitalize">
                    {brand.type}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
