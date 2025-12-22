import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { perfumes, getRandomPerfume, getPopularPerfumes } from '@/data/perfumes';
import { brands, getBrandById } from '@/data/brands';
import { collections, getFeaturedCollections } from '@/data/collections';

export default function Index() {
  const dailyPerfume = getRandomPerfume();
  const dailyBrand = getBrandById(dailyPerfume.brandId);
  const popularPerfumes = getPopularPerfumes(8);
  const featuredCollections = getFeaturedCollections();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-display-2 md:text-display-1 text-foreground mb-6">
              Fedezd fel az illatok <span className="text-gradient-gold">világát</span>
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              A Parfümpedia a parfümök enciklopédiája. Böngéssz márkák, illatjegyek és gyűjtemények között, és találd meg a tökéletes illatot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/perfumes">
                <Button size="lg" className="gap-2">
                  Parfümök böngészése
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/collections">
                <Button size="lg" variant="outline">
                  Gyűjtemények
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daily Perfume */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-heading-2">Mai parfüm</h2>
        </div>
        <Link to={`/perfumes/${dailyPerfume.slug}`}>
          <div className="luxury-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-4xl">🧴</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm text-primary font-medium mb-1">{dailyBrand?.name}</p>
              <h3 className="font-serif text-heading-1 mb-2">{dailyPerfume.name}</h3>
              <p className="text-muted-foreground line-clamp-2 mb-4">{dailyPerfume.description}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-muted rounded-full text-sm">{dailyPerfume.family}</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">{dailyPerfume.concentration}</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">{dailyPerfume.gender}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-heading-2">Kiemelt gyűjtemények</h2>
          <Link to="/collections" className="text-sm text-primary hover:underline">
            Összes →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCollections.slice(0, 4).map((collection) => (
            <Link key={collection.id} to={`/collections?id=${collection.slug}`}>
              <div className="luxury-card p-5 h-full">
                <h3 className="font-serif text-heading-3 mb-2">{collection.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {collection.description}
                </p>
                <p className="text-xs text-primary mt-3">
                  {collection.perfumeIds.length} parfüm
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Perfumes */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-heading-2">Népszerű parfümök</h2>
          <Link to="/perfumes" className="text-sm text-primary hover:underline">
            Összes →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularPerfumes.map((perfume) => {
            const brand = getBrandById(perfume.brandId);
            return (
              <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
                <div className="luxury-card p-4 text-center">
                  <div className="w-full aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-3xl">🧴</span>
                  </div>
                  <p className="text-xs text-primary mb-1">{brand?.name}</p>
                  <h3 className="font-serif text-sm font-medium line-clamp-1">{perfume.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Brands Preview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-heading-2">Márkák</h2>
            <Link to="/brands" className="text-sm text-primary hover:underline">
              Összes →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {brands.slice(0, 8).map((brand) => (
              <Link key={brand.id} to={`/brands/${brand.slug}`}>
                <div className="px-4 py-2 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                  <span className="text-sm font-medium">{brand.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
