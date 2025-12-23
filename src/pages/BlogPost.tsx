import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getBlogPostBySlug, getRecentBlogPosts } from '@/data/blog';
import { getBlogImage } from '@/data/blogImages';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return <NotFound />;
  }

  // Parse bold text (**text**) to React elements safely
  const parseBoldText = (text: string): React.ReactNode[] => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => 
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
  };

  // Convert markdown-like content to React elements safely
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        // H2 headers
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="font-serif text-2xl md:text-3xl mt-12 mb-6">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        // H3 headers
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="font-serif text-xl md:text-2xl mt-8 mb-4">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        // Lists
        if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground my-6">
              {items.map((item, i) => (
                <li key={i}>{parseBoldText(item.replace('- ', ''))}</li>
              ))}
            </ul>
          );
        }
        // Numbered lists
        if (paragraph.match(/^\d+\./)) {
          const items = paragraph.split('\n').filter(line => line.match(/^\d+\./));
          return (
            <ol key={index} className="list-decimal list-inside space-y-3 text-muted-foreground my-6">
              {items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {parseBoldText(item.replace(/^\d+\.\s*/, ''))}
                </li>
              ))}
            </ol>
          );
        }
        // Regular paragraphs
        return (
          <p key={index} className="text-muted-foreground leading-relaxed text-lg my-6">
            {parseBoldText(paragraph)}
          </p>
        );
      });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Vissza a bloghoz
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <span className="text-uppercase-spaced text-primary mb-4 block">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {new Date(post.publishedAt).toLocaleDateString('hu-HU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readTime} perc olvasás
          </span>
        </div>
      </header>

      {/* Featured Image + Excerpt */}
      <div className="container mx-auto px-4 max-w-5xl mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-muted overflow-hidden">
            {getBlogImage(post.id) ? (
              <img 
                src={getBlogImage(post.id)} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-8xl">📖</span>
              </div>
            )}
          </div>
          <div>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl pb-16">
        {formatContent(post.content)}
      </article>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 py-16">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
              További cikkek
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {recentPosts.map(relatedPost => {
                const relatedImage = getBlogImage(relatedPost.id);
                return (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                    <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[16/10] bg-muted overflow-hidden">
                        {relatedImage ? (
                          <img 
                            src={relatedImage} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                            <span className="text-3xl">📝</span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">
                          {relatedPost.category}
                        </span>
                        <h3 className="font-serif text-lg mt-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
