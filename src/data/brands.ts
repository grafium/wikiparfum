import { Brand } from './types';

export const brands: Brand[] = [
  {
    id: 'chanel',
    name: 'Chanel',
    slug: 'chanel',
    country: 'Franciaország',
    foundedYear: 1910,
    type: 'designer',
    description: 'A Chanel a luxusdivat és parfüméria egyik legismertebb márkája. Gabrielle "Coco" Chanel alapította 1910-ben Párizsban. Az ikonikus No. 5 1921-es debütálása óta a márka a parfümipar élvonalában áll, ötvözve a klasszikus eleganciát a modern innovációval.',
    websiteUrl: 'https://www.chanel.com',
  },
  {
    id: 'dior',
    name: 'Dior',
    slug: 'dior',
    country: 'Franciaország',
    foundedYear: 1946,
    type: 'designer',
    description: 'Christian Dior 1946-ban alapított divatháza hamar a haute couture szimbólumává vált. A parfüméria terén is úttörő, olyan időtlen illatok megalkotásával, mint a Miss Dior és a Sauvage.',
    websiteUrl: 'https://www.dior.com',
  },
  {
    id: 'tom-ford',
    name: 'Tom Ford',
    slug: 'tom-ford',
    country: 'USA',
    foundedYear: 2006,
    type: 'designer',
    description: 'Tom Ford 2006-ban indította saját márkáját, miután elhagyta a Guccit. A Private Blend kollekció luxus parfümjeivel hamar a modern parfüméria meghatározó szereplőjévé vált. Merész, szexi és kompromisszummentes illatok jellemzik.',
    websiteUrl: 'https://www.tomford.com',
  },
  {
    id: 'creed',
    name: 'Creed',
    slug: 'creed',
    country: 'Franciaország',
    foundedYear: 1760,
    type: 'niche',
    description: 'A Creed a világ egyik legrégebbi parfümházaként hirdeti magát, amelyet állítólag 1760-ban alapítottak Londonban. A családi vállalkozás ma Párizsban működik, és olyan legendás parfümöket készít, mint az Aventus.',
    websiteUrl: 'https://www.creedboutique.com',
  },
  {
    id: 'byredo',
    name: 'Byredo',
    slug: 'byredo',
    country: 'Svédország',
    foundedYear: 2006,
    type: 'niche',
    description: 'Ben Gorham 2006-ban alapította Stockholmban a Byredo-t. A skandináv minimalizmust ötvözi merész, művészi illatokkal. Parfümjei egyedi narratívákat mesélnek el, és a modern niche parfüméria élvonalába tartoznak.',
    websiteUrl: 'https://www.byredo.com',
  },
  {
    id: 'le-labo',
    name: 'Le Labo',
    slug: 'le-labo',
    country: 'USA',
    foundedYear: 2006,
    type: 'niche',
    description: 'A Le Labo-t 2006-ban alapították New Yorkban, és azóta a kézműves parfüméria szimbólumává vált. Minden parfümöt helyben kevernek és személyre szabottan címkéznek. A Santal 33 egyike a világ legikonikusabb modern parfümjeinek.',
    websiteUrl: 'https://www.lelabofragrances.com',
  },
  {
    id: 'maison-margiela',
    name: 'Maison Margiela',
    slug: 'maison-margiela',
    country: 'Franciaország',
    foundedYear: 1988,
    type: 'designer',
    description: 'A belga tervező, Martin Margiela által alapított divatház 2010-ben mutatta be Replica parfümkollekcióját. Az illatok emlékeket és helyeket idéznek meg, egyedi koncepcióval a parfümvilágban.',
    websiteUrl: 'https://www.maisonmargiela.com',
  },
  {
    id: 'acqua-di-parma',
    name: 'Acqua di Parma',
    slug: 'acqua-di-parma',
    country: 'Olaszország',
    foundedYear: 1916,
    type: 'niche',
    description: 'Az Acqua di Parma 1916-ban született Pármában, és az olasz eleganciát testesíti meg. Ikonikus Colonia parfümje a modern férfi parfüméria egyik alapja. Az Art Deco stílusú sárga dobozok világszerte ismertek.',
    websiteUrl: 'https://www.acquadiparma.com',
  },
  {
    id: 'guerlain',
    name: 'Guerlain',
    slug: 'guerlain',
    country: 'Franciaország',
    foundedYear: 1828,
    type: 'designer',
    description: 'A Guerlain a világ egyik legrégebbi és legtiszteltebb parfümháza, amelyet 1828-ban alapítottak Párizsban. Olyan legendákat alkotott, mint a Shalimar és a Mitsouko. A francia parfüméria művészetének megtestesítője.',
    websiteUrl: 'https://www.guerlain.com',
  },
  {
    id: 'ysl',
    name: 'Yves Saint Laurent',
    slug: 'yves-saint-laurent',
    country: 'Franciaország',
    foundedYear: 1961,
    type: 'designer',
    description: 'Yves Saint Laurent 1961-ben alapította divatházát, amely hamar a modern francia elegancia szimbólumává vált. Parfümjei, mint az Opium és a La Nuit de l\'Homme, a merész glamourt képviselik.',
    websiteUrl: 'https://www.yslbeauty.com',
  },
  {
    id: 'frederic-malle',
    name: 'Frédéric Malle',
    slug: 'frederic-malle',
    country: 'Franciaország',
    foundedYear: 2000,
    type: 'niche',
    description: 'Frédéric Malle 2000-ben alapította Editions de Parfums házát, ahol a világ legjobb parfümőreinek ad teljes kreatív szabadságot. A "parfümök szerzői" koncepciója forradalmasította a niche parfüméria világát.',
    websiteUrl: 'https://www.fredericmalle.com',
  },
  {
    id: 'versace',
    name: 'Versace',
    slug: 'versace',
    country: 'Olaszország',
    foundedYear: 1978,
    type: 'designer',
    description: 'Gianni Versace 1978-ban alapította a milánói divatházat, amely az olasz luxus és extravagancia szimbóluma lett. Parfümjei a mediterrán eleganciát ötvözik a bátor, szenvedélyes karakterrel.',
    websiteUrl: 'https://www.versace.com',
  },
];

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getBrandBySlug = (slug: string): Brand | undefined => {
  return brands.find(brand => brand.slug === slug);
};

export const searchBrands = (query: string): Brand[] => {
  const lowerQuery = query.toLowerCase();
  return brands.filter(brand => 
    brand.name.toLowerCase().includes(lowerQuery) ||
    brand.country.toLowerCase().includes(lowerQuery)
  );
};

export const getBrandsByType = (type: 'designer' | 'niche' | 'indie'): Brand[] => {
  return brands.filter(brand => brand.type === type);
};
