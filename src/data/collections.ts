import { Collection } from './types';

export const collections: Collection[] = [
  {
    id: 'office-friendly',
    name: 'Irodába való',
    slug: 'irodaba-valo',
    description: 'Visszafogott, elegáns illatok, amelyek professzionális környezetben is megfelelőek. Nem túl erős szilázs, kifinomult karakter.',
    perfumeIds: ['chanel-bleu', 'dior-sauvage', 'creed-green-irish-tweed', 'acqua-di-parma-colonia', 'byredo-bal-dafrique', 'le-labo-santal-33', 'versace-dylan-blue'],
    featured: true,
  },
  {
    id: 'winter-spicy',
    name: 'Téli fűszeres',
    slug: 'teli-fuszeres',
    description: 'Meleg, fűszeres illatok a hideg téli napokra. Fahéj, kardamom és vanília dominanciával.',
    perfumeIds: ['tom-ford-tobacco-vanille', 'ysl-la-nuit', 'maison-margiela-jazz-club', 'maison-margiela-by-the-fireplace', 'guerlain-shalimar', 'frederic-malle-musc-ravageur'],
    featured: true,
  },
  {
    id: 'clean-musks',
    name: 'Tiszta pézsmák',
    slug: 'tiszta-pezsmak',
    description: 'Minimalista, bőrközeli illatok, amelyek tiszta pézsma jegyekre épülnek. Elegáns egyszerűség.',
    perfumeIds: ['le-labo-another-13', 'byredo-mojave-ghost', 'creed-silver-mountain-water', 'acqua-di-parma-colonia'],
    featured: false,
  },
  {
    id: 'gourmand-favorites',
    name: 'Gourmand kedvencek',
    slug: 'gourmand-kedvencek',
    description: 'Édességre emlékeztető, kényeztető illatok. Vanília, csokoládé, karamell és kávé jegyekkel.',
    perfumeIds: ['tom-ford-tobacco-vanille', 'ysl-black-opium', 'tom-ford-black-orchid', 'maison-margiela-by-the-fireplace'],
    featured: true,
  },
  {
    id: 'date-night',
    name: 'Randiparfümök',
    slug: 'randiparfumok',
    description: 'Csábító, vonzó illatok, amelyek tökéletesek egy romantikus estére. Érzéki és emlékezetes.',
    perfumeIds: ['tom-ford-black-orchid', 'ysl-la-nuit', 'frederic-malle-portrait-lady', 'versace-eros', 'chanel-coco-mademoiselle', 'dior-jadore'],
    featured: true,
  },
  {
    id: 'summer-fresh',
    name: 'Nyári frissek',
    slug: 'nyari-frissek',
    description: 'Könnyű, friss illatok a forró nyári napokra. Citrusos és aquás jegyekkel.',
    perfumeIds: ['acqua-di-parma-colonia', 'acqua-di-parma-fico', 'creed-silver-mountain-water', 'maison-margiela-beach-walk', 'versace-bright-crystal'],
    featured: false,
  },
  {
    id: 'oud-collection',
    name: 'Oud válogatás',
    slug: 'oud-valogatas',
    description: 'Az oud, az agarfa luxusillatai. Misztikus, egzotikus és rendkívül tartós parfümök.',
    perfumeIds: ['tom-ford-oud-wood', 'frederic-malle-portrait-lady'],
    featured: false,
  },
  {
    id: 'iconic-roses',
    name: 'Ikonikus rózsák',
    slug: 'ikonikus-rozsak',
    description: 'A parfüméria királynőjét, a rózsát ünneplő illatok. Klasszikus és modern rózsaparfümök.',
    perfumeIds: ['le-labo-rose-31', 'frederic-malle-portrait-lady', 'chanel-no5', 'dior-miss-dior'],
    featured: false,
  },
];

export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find(c => c.id === id);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find(c => c.slug === slug);
};

export const getFeaturedCollections = (): Collection[] => {
  return collections.filter(c => c.featured);
};
