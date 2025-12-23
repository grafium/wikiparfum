import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { getRandomPerfume, getPopularPerfumes } from '@/data/perfumes';
import { brands, getBrandById } from '@/data/brands';
import { getFeaturedCollections } from '@/data/collections';
import { getRecentBlogPosts } from '@/data/blog';
import { getBrandImage } from '@/data/brandImages';
import { getCollectionImage } from '@/data/collectionImages';
import { getBlogImage } from '@/data/blogImages';

// Import images
import heroPerfume from '@/assets/hero-perfume.jpg';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';
import perfume5 from '@/assets/perfume-5.jpg';

const perfumeImages = [perfume1, perfume2, perfume3, perfume4, perfume5];

export default function Index() {
  const dailyPerfume = getRandomPerfume();
  const dailyBrand = getBrandById(dailyPerfume.brandId);
  const popularPerfumes = getPopularPerfumes(8);
  const featuredCollections = getFeaturedCollections();
  const recentBlogPosts = getRecentBlogPosts(3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[500px] max-h-[800px]">
          <img
            src={heroPerfume}
            alt="Luxury perfume"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto pb-16 md:pb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
                  Fedezd fel<br />
                  az illatok világát
                </h1>
                <p className="text-white/80 text-lg mb-8 max-w-md">
                  A parfümök enciklopédiája. Böngéssz márkák, illatjegyek és gyűjtemények között.
                </p>
                <Link to="/perfumes">
                  <Button size="lg" variant="secondary" className="gap-2 bg-white text-foreground hover:bg-white/90">
                    Felfedezés
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Perfume */}
      <section className="container mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square max-w-md mx-auto md:mx-0">
            <img
              src={perfumeImages[Math.floor(Math.random() * perfumeImages.length)]}
              alt={dailyPerfume.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-uppercase-spaced text-muted-foreground mb-4">Mai parfüm</p>
            <Link to={`/perfumes/${dailyPerfume.slug}`} className="group">
              <p className="text-sm text-primary mb-2">{dailyBrand?.name}</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 group-hover:text-primary transition-colors">
                {dailyPerfume.name}
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              {dailyPerfume.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 border border-border text-sm">{dailyPerfume.family}</span>
              <span className="px-4 py-2 border border-border text-sm">{dailyPerfume.concentration}</span>
              <span className="px-4 py-2 border border-border text-sm">{dailyPerfume.gender}</span>
            </div>
            <Link to={`/perfumes/${dailyPerfume.slug}`}>
              <Button variant="outline" className="link-underline">
                Részletek
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="border-t border-border">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Gyűjtemények</h2>
            <Link to="/collections" className="text-uppercase-spaced text-muted-foreground hover:text-foreground link-underline">
              Összes
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.slice(0, 4).map((collection) => {
              const collectionImage = getCollectionImage(collection.id);
              return (
                <Link key={collection.id} to={`/collections/${collection.slug}`}>
                  <div className="luxury-card overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      {collectionImage ? (
                        <img 
                          src={collectionImage} 
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
      </section>

      {/* Popular Perfumes */}
      <section className="border-t border-border">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Népszerű parfümök</h2>
            <Link to="/perfumes" className="text-uppercase-spaced text-muted-foreground hover:text-foreground link-underline">
              Összes
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {popularPerfumes.map((perfume, index) => {
              const brand = getBrandById(perfume.brandId);
              return (
                <Link key={perfume.id} to={`/perfumes/${perfume.slug}`} className="group">
                  <div className="mb-4 aspect-square overflow-hidden bg-muted">
                    <img
                      src={perfumeImages[index % perfumeImages.length]}
                      alt={perfume.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-uppercase-spaced text-muted-foreground mb-1">{brand?.name}</p>
                  <h3 className="font-serif text-lg group-hover:text-primary transition-colors">{perfume.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-border bg-muted/20">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Márkák</h2>
            <Link to="/brands" className="text-uppercase-spaced text-muted-foreground hover:text-foreground link-underline">
              Összes
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.slice(0, 8).map((brand) => {
              const brandImage = getBrandImage(brand.id);
              return (
                <Link key={brand.id} to={`/brands/${brand.slug}`}>
                  <div className="luxury-card overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      {brandImage ? (
                        <img 
                          src={brandImage} 
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
      </section>

      {/* Blog Section */}
      <section className="border-t border-border">
        <div className="container mx-auto py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Blog</h2>
            <Link to="/blog" className="text-uppercase-spaced text-muted-foreground hover:text-foreground link-underline">
              Összes cikk
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlogPosts.map((post) => {
              const postImage = getBlogImage(post.id);
              return (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <div className="luxury-card overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      {postImage ? (
                        <img 
                          src={postImage} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-4xl">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-heading-3 mt-2 mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
