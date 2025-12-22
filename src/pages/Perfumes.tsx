import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Grid, List, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { perfumes } from '@/data/perfumes';
import { brands, getBrandById } from '@/data/brands';
import type { Gender, FragranceFamily, Concentration, Season, Occasion, SortOption } from '@/data/types';

const genders: Gender[] = ['férfi', 'női', 'unisex'];
const families: FragranceFamily[] = ['citrusos', 'virágos', 'fás', 'orientális', 'aromás', 'chypre', 'gourmand', 'aquás', 'fougère'];
const concentrations: Concentration[] = ['EDT', 'EDP', 'Parfum', 'Extrait', 'Cologne'];
const seasons: Season[] = ['tavasz', 'nyár', 'ősz', 'tél'];
const occasions: Occasion[] = ['iroda', 'randi', 'hétköznapi', 'elegáns', 'sport', 'esti'];

export default function Perfumes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);

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
  }, [selectedGenders, selectedFamilies, selectedConcentrations, selectedSeasons, selectedOccasions, sortBy]);

  const hasActiveFilters = selectedGenders.length || selectedFamilies.length || selectedConcentrations.length || selectedSeasons.length || selectedOccasions.length;

  const FilterSection = ({ title, options, selected, filterKey }: { title: string; options: string[]; selected: string[]; filterKey: string }) => (
    <div className="mb-6">
      <h4 className="font-medium mb-3">{title}</h4>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={selected.includes(option)}
              onCheckedChange={() => toggleFilter(filterKey, option)}
            />
            <span className="text-sm capitalize">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const FiltersContent = () => (
    <>
      <FilterSection title="Nem" options={genders} selected={selectedGenders} filterKey="gender" />
      <FilterSection title="Illatcsalád" options={families} selected={selectedFamilies} filterKey="family" />
      <FilterSection title="Koncentráció" options={concentrations} selected={selectedConcentrations} filterKey="concentration" />
      <FilterSection title="Évszak" options={seasons} selected={selectedSeasons} filterKey="season" />
      <FilterSection title="Alkalom" options={occasions} selected={selectedOccasions} filterKey="occasion" />
    </>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-display-3 mb-2">Parfümök</h1>
        <p className="text-muted-foreground">Fedezd fel a parfümök enciklopédiáját</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {/* Mobile Filter */}
        <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Szűrők
              {hasActiveFilters && <span className="ml-1 px-1.5 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">{selectedGenders.length + selectedFamilies.length + selectedConcentrations.length + selectedSeasons.length + selectedOccasions.length}</span>}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Szűrők</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FiltersContent />
            </div>
          </SheetContent>
        </Sheet>

        {/* Sort */}
        <Select value={sortBy} onValueChange={(v) => { searchParams.set('sort', v); setSearchParams(searchParams); }}>
          <SelectTrigger className="w-44">
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

        {/* View Toggle */}
        <div className="flex gap-1 ml-auto">
          <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-6">
          {[...selectedGenders, ...selectedFamilies, ...selectedConcentrations, ...selectedSeasons, ...selectedOccasions].map((filter, i) => (
            <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1 capitalize">
              {filter}
              <X className="h-3 w-3 cursor-pointer" onClick={() => {
                const keys = ['gender', 'family', 'concentration', 'season', 'occasion'];
                keys.forEach(k => {
                  if (searchParams.getAll(k).includes(filter)) toggleFilter(k, filter);
                });
              }} />
            </span>
          ))}
          <Button variant="ghost" size="sm" onClick={clearFilters}>Összes törlése</Button>
        </div>
      )}

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <FiltersContent />
        </aside>

        {/* Results */}
        <div className="flex-1">
          {filteredPerfumes.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">Nincs találat a megadott szűrőkkel.</p>
              <Button variant="outline" onClick={clearFilters}>Szűrők törlése</Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
              {filteredPerfumes.map((perfume) => {
                const brand = getBrandById(perfume.brandId);
                return viewMode === 'grid' ? (
                  <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
                    <div className="luxury-card p-4 text-center">
                      <div className="w-full aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <span className="text-4xl">🧴</span>
                      </div>
                      <p className="text-xs text-primary mb-1">{brand?.name}</p>
                      <h3 className="font-serif text-sm font-medium">{perfume.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{perfume.concentration} • {perfume.releaseYear}</p>
                    </div>
                  </Link>
                ) : (
                  <Link key={perfume.id} to={`/perfumes/${perfume.slug}`}>
                    <div className="luxury-card p-4 flex gap-4 items-center">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🧴</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-primary mb-1">{brand?.name}</p>
                        <h3 className="font-serif font-medium">{perfume.name}</h3>
                        <p className="text-sm text-muted-foreground">{perfume.concentration} • {perfume.releaseYear} • {perfume.gender}</p>
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
  );
}
