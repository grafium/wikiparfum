import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock } from 'lucide-react';

export default function Blog() {
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-display-3 mb-3">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tudnivalók, tippek és érdekességek a parfümök világából
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <span 
              key={category}
              className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Link to={`/blog/${blogPosts[0].slug}`} className="block mb-16 group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl">📰</span>
                </div>
              </div>
              <div>
                <span className="text-uppercase-spaced text-primary mb-3 block">
                  {blogPosts[0].category}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(blogPosts[0].publishedAt).toLocaleDateString('hu-HU')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime} perc olvasás
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="luxury-card overflow-hidden">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(post.publishedAt).toLocaleDateString('hu-HU')}</span>
                    <span>•</span>
                    <span>{post.readTime} perc</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
