// Core data types for the Perfume Encyclopedia

export type Gender = 'férfi' | 'női' | 'unisex';

export type Concentration = 'EDT' | 'EDP' | 'Parfum' | 'Extrait' | 'Cologne';

export type FragranceFamily = 
  | 'citrusos' 
  | 'virágos' 
  | 'fás' 
  | 'orientális' 
  | 'aromás' 
  | 'chypre' 
  | 'gourmand'
  | 'aquás'
  | 'fougère';

export type Season = 'tavasz' | 'nyár' | 'ősz' | 'tél';

export type Occasion = 'iroda' | 'randi' | 'hétköznapi' | 'elegáns' | 'sport' | 'esti';

export type NoteCategory = 
  | 'citrus' 
  | 'virágos' 
  | 'fűszeres' 
  | 'fás' 
  | 'pézsma' 
  | 'gyümölcsös' 
  | 'zöld' 
  | 'aromás' 
  | 'édes' 
  | 'balzsamikus'
  | 'bőr'
  | 'aquás';

export type BrandType = 'designer' | 'niche' | 'indie';

export interface Brand {
  id: string;
  name: string;
  slug: string;
  country: string;
  foundedYear: number;
  type: BrandType;
  description: string;
  websiteUrl?: string;
  logoUrl?: string;
}

export interface Note {
  id: string;
  name: string;
  slug: string;
  category: NoteCategory;
  description: string;
  pairsWith: string[]; // Note IDs
  imageUrl?: string;
}

export interface Perfume {
  id: string;
  name: string;
  slug: string;
  brandId: string;
  gender: Gender;
  concentration: Concentration;
  releaseYear: number;
  family: FragranceFamily;
  accords: string[];
  topNotes: string[]; // Note IDs
  heartNotes: string[]; // Note IDs
  baseNotes: string[]; // Note IDs
  longevity: 1 | 2 | 3 | 4 | 5;
  sillage: 1 | 2 | 3 | 4 | 5;
  seasons: Season[];
  occasions: Occasion[];
  description: string;
  imageUrls: string[];
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  perfumeIds: string[];
  imageUrl?: string;
  featured: boolean;
}

// Filter state types
export interface PerfumeFilters {
  gender?: Gender[];
  family?: FragranceFamily[];
  concentration?: Concentration[];
  yearRange?: [number, number];
  topNotes?: string[];
  heartNotes?: string[];
  baseNotes?: string[];
  accords?: string[];
  longevity?: number[];
  sillage?: number[];
  seasons?: Season[];
  occasions?: Occasion[];
  brandId?: string[];
}

export type SortOption = 'popular' | 'name-asc' | 'name-desc' | 'year-desc' | 'year-asc';

// Search result types
export interface SearchResults {
  perfumes: Perfume[];
  brands: Brand[];
  notes: Note[];
}
