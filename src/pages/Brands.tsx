import { Link } from 'react-router-dom';
import { brands } from '@/data/brands';

export default function Brands() {
  const sorted = [...brands].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-display-3 mb-2">Márkák</h1>
      <p className="text-muted-foreground mb-8">Böngéssz parfümmárkák között</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map(brand => (
          <Link key={brand.id} to={`/brands/${brand.slug}`}>
            <div className="luxury-card p-5">
              <h3 className="font-serif text-heading-3 mb-1">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.country} • {brand.foundedYear}</p>
              <span className="inline-block mt-2 px-2 py-0.5 bg-muted rounded text-xs capitalize">{brand.type}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
