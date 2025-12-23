import { useState, useMemo } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Grid, List, SlidersHorizontal, X, Search, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { perfumes } from '@/data/perfumes';
import { getBrandById } from '@/data/brands';
import type { Gender, FragranceFamily, Concentration, Season, Occasion, SortOption } from '@/data/types';

import { getPerfumeImage } from '@/data/perfumeImages';

const genders: Gender[] = ['férfi', 'női', 'unisex'];
const families: FragranceFamily[] = ['citrusos', 'virágos', 'fás', 'orientális', 'aromás', 'chypre', 'gourmand', 'aquás', 'fougère'];
const concentrations: Concentration[] = ['EDT', 'EDP', 'Parfum', 'Extrait', 'Cologne'];
const seasons: Season[] = ['tavasz', 'nyár', 'ősz', 'tél'];
const occasions: Occasion[] = ['iroda', 'randi', 'hétköznapi', 'elegáns', 'sport', 'esti'];

export default function Perfumes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRandomPerfume = () => {
    const randomIndex = Math.floor(Math.random() * perfumes.length);
    const randomPerfume = perfumes[randomIndex];
    navigate(`/perfumes/${randomPerfume.slug}`);
  };

  const selectedGenders = searchParams.getAll('gender') as Gender[];
  const selectedFamilies = searchParams.getAll('family') as FragranceFamily[];
  const selectedConcentrations = searchParams.getAll('concentration') as Concentration[];
  const selectedSeasons = searchParams.getAll('season') as Season[];
  const selectedOccasions = searchParams.getAll('occasion') as Occasion[];
  const sortBy = (searchParams.get('sort') as SortOption) || 'popular';

  const toggleFilter = (key: string, value: string) => {
    const current = searchParams.getAll(key);
    if (current.includes(value)) {
      searchParams.delete(key);
      current.filter(v => v !== value).forEach(v => searchParams.append(key, v));
    } else {
      searchParams.append(key, value);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredPerfumes = useMemo(() => {
    let result = [...perfumes];

    // Search by name or brand
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => {
        const brand = getBrandById(p.brandId);
        return p.name.toLowerCase().includes(query) || 
               brand?.name.toLowerCase().includes(query);
      });
    }

    if (selectedGenders.length) {
      result = result.filter(p => selectedGenders.includes(p.gender));
    }
    if (selectedFamilies.length) {
      result = result.filter(p => selectedFamilies.includes(p.family));
    }
    if (selectedConcentrations.length) {
      result = result.filter(p => selectedConcentrations.includes(p.concentration));
    }
    if (selectedSeasons.length) {
      result = result.filter(p => p.seasons.some(s => selectedSeasons.includes(s)));
    }
    if (selectedOccasions.length) {
      result = result.filter(p => p.occasions.some(o => selectedOccasions.includes(o)));
    }

    switch (sortBy) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'year-desc':
        result.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case 'year-asc':
        result.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
    }

    return result;
  }, [searchQuery, selectedGenders, selectedFamilies, selectedConcentrations, selectedSeasons, selectedOccasions, sortBy]);

  const hasActiveFilters = selectedGenders.length || selectedFamilies.length || selectedConcentrations.length || selectedSeasons.length || selectedOccasions.length;

  const FilterSection = ({ title, options, selected, filterKey }: { title: string; options: string[]; selected: string[]; filterKey: string }) => (
    <div className="mb-8">
      <h4 className="text-uppercase-spaced mb-4">{title}</h4>
      <div className="space-y-3">
        {options.map(option => (
          <label key={option} className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={() => toggleFilter(filterKey, option)}
              className="border-muted-foreground/40"
            />
            <span className="text-sm capitalize text-muted-foreground group-hover:text-foreground transition-colors">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderSearchField = (
    <div className="mb-8">
      <h4 className="text-uppercase-spaced mb-4">Keresés</h4>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Név vagy márka..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-transparent border-border"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>
    </div>
  );

  const renderFilters = (
    <>
      {renderSearchField}
      <FilterSection title="Nem" options={genders} selected={selectedGenders} filterKey="gender" />
      <FilterSection title="Illatcsalád" options={families} selected={selectedFamilies} filterKey="family" />
      <FilterSection title="Koncentráció" options={concentrations} selected={selectedConcentrations} filterKey="concentration" />
      <FilterSection title="Évszak" options={seasons} selected={selectedSeasons} filterKey="season" />
      <FilterSection title="Alkalom" options={occasions} selected={selectedOccasions} filterKey="occasion" />
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Parfümök</h1>
        <p className="text-muted-foreground mb-6">Fedezd fel a parfümök enciklopédiáját</p>
        <Button 
          variant="outline" 
          onClick={handleRandomPerfume}
          className="gap-2"
        >
          <Shuffle className="h-4 w-4" />
          Random parfüm
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
        {/* Mobile Filter */}
        <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />
              Szűrők
              {hasActiveFilters && (
                <span className="ml-1 px-1.5 py-0.5 bg-foreground text-background text-xs">
                  {selectedGenders.length + selectedFamilies.length + selectedConcentrations.length + selectedSeasons.length + selectedOccasions.length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left font-serif text-xl">Szűrők</SheetTitle>
            </SheetHeader>
            <div className="mt-8">
              {renderFilters}
            </div>
          </SheetContent>
        </Sheet>

        {/* Sort */}
        <Select value={sortBy} onValueChange={(v) => { searchParams.set('sort', v); setSearchParams(searchParams); }}>
          <SelectTrigger className="w-48 border-0 border-b border-border rounded-none focus:ring-0">
            <SelectValue placeholder="Rendezés" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Népszerű</SelectItem>
            <SelectItem value="name-asc">Név A–Z</SelectItem>
            <SelectItem value="name-desc">Név Z–A</SelectItem>
            <SelectItem value="year-desc">Legújabb</SelectItem>
            <SelectItem value="year-asc">Legrégebbi</SelectItem>
          </SelectContent>
        </Select>

        <p className="text-sm text-muted-foreground ml-auto mr-4">
          {filteredPerfumes.length} parfüm
        </p>

        {/* View Toggle */}
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'text-foreground' : 'text-muted-foreground'}>
            <Grid className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'text-foreground' : 'text-muted-foreground'}>
            <List className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-8">
          {[...selectedGenders, ...selectedFamilies, ...selectedConcentrations, ...selectedSeasons, ...selectedOccasions].map((filter, i) => (
            <span key={i} className="px-3 py-1.5 border border-border text-sm flex items-center gap-2 capitalize">
              {filter}
              <X className="h-3 w-3 cursor-pointer hover:text-primary" strokeWidth={1.5} onClick={() => {
                const keys = ['gender', 'family', 'concentration', 'season', 'occasion'];
                keys.forEach(k => {
                  if (searchParams.getAll(k).includes(filter)) toggleFilter(k, filter);
                });
              }} />
            </span>
          ))}
          <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-foreground link-underline px-2">
            Összes törlése
          </button>
        </div>
      )}

      <div className="flex gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-60 flex-shrink-0">
          {renderFilters}
        </aside>

        {/* Results */}
        <div className="flex-1">
          {filteredPerfumes.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground mb-6">Nincs találat a megadott szűrőkkel.</p>
              <Button variant="outline" onClick={clearFilters}>Szűrők törlése</Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredPerfumes.map((perfume, index) => {
                const brand = getBrandById(perfume.brandId);
                return viewMode === 'grid' ? (
                  <Link key={perfume.id} to={`/perfumes/${perfume.slug}`} className="group">
                    <div className="mb-4 aspect-square overflow-hidden bg-muted">
                      <img
                        src={getPerfumeImage(index)}
                        alt={perfume.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-uppercase-spaced text-muted-foreground mb-1">{brand?.name}</p>
                    <h3 className="font-serif text-lg group-hover:text-primary transition-colors">{perfume.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{perfume.concentration} · {perfume.releaseYear}</p>
                  </Link>
                ) : (
                  <Link key={perfume.id} to={`/perfumes/${perfume.slug}`} className="group">
                    <div className="flex gap-6 items-center py-4 border-b border-border">
                      <div className="w-24 h-24 bg-muted flex-shrink-0 overflow-hidden">
                        <img
                          src={getPerfumeImage(index)}
                          alt={perfume.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-uppercase-spaced text-muted-foreground mb-1">{brand?.name}</p>
                        <h3 className="font-serif text-lg group-hover:text-primary transition-colors">{perfume.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{perfume.concentration} · {perfume.releaseYear} · {perfume.gender}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
