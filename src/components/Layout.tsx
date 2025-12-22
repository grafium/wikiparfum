import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Search, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [{
  href: '/perfumes',
  label: 'Parfümök'
}, {
  href: '/brands',
  label: 'Márkák'
}, {
  href: '/notes',
  label: 'Illatjegyek'
}, {
  href: '/collections',
  label: 'Gyűjtemények'
}];
export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
                Parfüm<span className="text-primary">     Wikipedia</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'}`}>
                  {link.label}
                </Link>)}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search Toggle */}
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)} className="text-muted-foreground hover:text-foreground">
                <Search className="h-5 w-5" />
              </Button>

              {/* Favorites */}
              <Link to="/favorites">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-border">
                        {link.label}
                      </Link>)}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && <motion.div initial={{
            height: 0,
            opacity: 0
          }} animate={{
            height: 'auto',
            opacity: 1
          }} exit={{
            height: 0,
            opacity: 0
          }} className="overflow-hidden">
                <form onSubmit={handleSearch} className="py-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Keresés parfümök, márkák, illatjegyek között..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-10 h-12 bg-muted/50 border-0 focus-visible:ring-primary" autoFocus />
                    <Button type="button" variant="ghost" size="icon" onClick={() => setSearchOpen(false)} className="absolute right-1 top-1/2 -translate-y-1/2">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </motion.div>}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="font-serif text-xl font-semibold">
                Parfüm<span className="text-primary">       Wikipedia</span>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">
                A parfümök enciklopédiája. Fedezd fel az illatok világát.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Felfedezés</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/perfumes" className="hover:text-foreground">Parfümök</Link></li>
                <li><Link to="/brands" className="hover:text-foreground">Márkák</Link></li>
                <li><Link to="/notes" className="hover:text-foreground">Illatjegyek</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Gyűjtemények</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/collections" className="hover:text-foreground">Összes gyűjtemény</Link></li>
                <li><Link to="/favorites" className="hover:text-foreground">Kedvenceim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Információ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">Rólunk</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Parfümpedia. Minden jog fenntartva.
          </div>
        </div>
      </footer>
    </div>;
}