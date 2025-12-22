import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/perfumes', label: 'Parfümök' },
  { href: '/brands', label: 'Márkák' },
  { href: '/notes', label: 'Illatjegyek' },
  { href: '/collections', label: 'Gyűjtemények' },
];

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border/50">
        <div className="container mx-auto">
          {/* Top bar - Logo centered */}
          <div className="flex items-center justify-center py-6 relative">
            {/* Mobile menu trigger - left */}
            <div className="absolute left-4 md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-5 w-5" strokeWidth={1.5} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-border">
                      <span className="font-serif text-xl tracking-wide">
                        Parfümpédia
                      </span>
                    </div>
                    <nav className="flex-1 p-6">
                      <ul className="space-y-1">
                        {navLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-3 text-uppercase-spaced transition-colors ${
                                location.pathname.startsWith(link.href)
                                  ? 'text-foreground'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                    <div className="p-6 border-t border-border">
                      <Link
                        to="/favorites"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-uppercase-spaced text-muted-foreground hover:text-foreground"
                      >
                        <Heart className="h-4 w-4" strokeWidth={1.5} />
                        Kedvencek
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo - Center */}
            <Link to="/" className="text-center">
              <span className="font-serif text-2xl md:text-3xl tracking-wide">
                Parfümpédia
              </span>
            </Link>

            {/* Actions - right */}
            <div className="absolute right-4 flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-foreground hover:bg-transparent hover:text-primary"
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </Button>
              <Link to="/favorites" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-transparent hover:text-primary"
                >
                  <Heart className="h-5 w-5" strokeWidth={1.5} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Below logo */}
          <nav className="hidden md:flex items-center justify-center gap-10 pb-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-uppercase-spaced link-underline py-1 transition-colors ${
                  location.pathname.startsWith(link.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Search Bar - Full width overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full bg-background border-b border-border"
            >
              <div className="container mx-auto py-6">
                <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                  <Input
                    type="search"
                    placeholder="Keresés parfümök, márkák, illatjegyek között..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 px-0 bg-transparent border-0 border-b border-border rounded-none text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-transparent"
                  >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="container mx-auto py-16">
          {/* Footer top */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="font-serif text-xl tracking-wide">
                Parfümpédia
              </Link>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                A parfümök enciklopédiája.<br />
                Fedezd fel az illatok világát.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-uppercase-spaced mb-5">Felfedezés</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-uppercase-spaced mb-5">Személyes</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/favorites"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Kedvencek
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Keresés
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-uppercase-spaced mb-5">Információ</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Rólunk
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Parfümpédia. Minden jog fenntartva.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Adatvédelem
              </Link>
              <Link
                to="/about"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Felhasználási feltételek
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
