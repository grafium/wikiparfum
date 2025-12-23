export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'illatjegyek-felismerese',
    slug: 'hogyan-ismerd-fel-az-illatjegyeket',
    title: 'Hogyan ismerd fel egy parfüm illatjegyeit?',
    category: 'Parfüméria alapjai',
    excerpt: 'Tudtad, hogy még jobban élvezheted a parfümök erejét, ha megtanulod felismerni az illatjegyeket? Az egyes illatjegyek és akkordok megértése segíthet megérteni, hogyan befolyásolják a hangulatodat.',
    content: `A parfümök nemcsak kellemes illattal vesznek körül minket, hanem boldog emlékekbe is visszarepíthetnek, segíthetnek magabiztosabbá válni és pozitív érzelmeket ébreszthetnek.

## Hogyan azonosítsd egy parfüm jegyeit

Egy illatot mindig az illatpiramis szem előtt tartásával terveznek. Bár egy parfüm sok összetevőből és különböző technikákkal készül, a formulázás mindig az illatpiramis figyelembevételével történik, hogy minden jegy tökéletesen illeszkedjen egymáshoz.

A parfümök három szintre osztott illatszerkezetből állnak: fejjegyek, szívjegyek és alapjegyek. Ez az illatpiramis alapvető fontosságú az illat bőrünkön való fejlődésének és érzelmeinkre gyakorolt hatásának megértéséhez.

### Fejjegyek

A fejjegyek azok, amelyeket először érzékelünk, amikor egy parfümöt felviszünk. Ezek általában könnyű, friss illatok, amelyek gyorsan elpárolognak. Ide tartoznak a citrusos jegyek, mint a bergamot, citrom vagy narancs, valamint néhány zöld és aromás jegy.

### Szívjegyek

A szívjegyek alkotják a parfüm szívét, és akkor válnak érzékelhetővé, amikor a fejjegyek elhalványulnak. Ezek általában virágos vagy fűszeres jegyek, amelyek a parfüm karakterét adják.

### Alapjegyek

Az alapjegyek a legtartósabbak, és órákig, akár napokig is érezhetők maradnak. Ide tartoznak a fás, balzsamos és pézsma jegyek, amelyek mélységet és tartósságot adnak az illatnak.

## Tippek az illatjegyek felismeréséhez

1. **Várj néhány percet** - Ne ítéld meg azonnal az illatot. Várj, amíg a fejjegyek elhalványulnak.
2. **Próbáld a bőrödön** - A papírcsíkon más az illat, mint a bőrön.
3. **Figyelj az érzelmeidre** - Milyen emlékeket, érzéseket ébreszt benned?
4. **Gyakorolj** - Minél több illatot szagolsz, annál jobban meg tudod különböztetni a jegyeket.`,
    author: 'Parfümpédia',
    publishedAt: '2024-03-21',
    readTime: 5,
  },
  {
    id: 'illatcsaladok',
    slug: 'illatcsaladok-utmutato',
    title: 'Útmutató az illatcsaládokhoz',
    category: 'Parfüméria alapjai',
    excerpt: 'Fedezd fel a különböző illatcsaládokat a citrusosoktól az orientálisakig, és tudd meg, melyik illik hozzád a legjobban.',
    content: `Az illatcsaládok segítenek kategorizálni a parfümöket jellemző jegyeik alapján. Ismerkedj meg a főbb családokkal!

## Citrusos

A citrusos illatok frissek, energikusak és élénkek. Bergamot, citrom, narancs és grapefruit dominál bennük. Tökéletesek nyárra és nappali viselésre.

## Virágos

A virágos parfümök a legklasszikusabb kategória. Rózsa, jázmin, tubarózsa és írisz alkotják őket. Romantikusak és nőiesek.

## Fás

A fás illatok melegek és sofisztikáltak. Szantálfa, cédrus, vetiver és pacsuli jellemzi őket. Elegánsak és tartósak.

## Orientális

Az orientális parfümök gazdagok és érzékiek. Vanília, ambra, tömjén és fűszerek dominálnak. Ideálisak estére és téli viselésre.

## Fougère

A fougère illatok aromásak és frissek. Levendula, tölgymoh és kumarin alkotja őket. Klasszikus férfiparfümök alapja.

## Chypre

A chypre parfümök komplexek és elegánsak. Bergamot, tölgymoh és pacsuli a kulcs összetevőik.`,
    author: 'Parfümpédia',
    publishedAt: '2024-03-15',
    readTime: 4,
  },
  {
    id: 'parfum-tarolas',
    slug: 'parfum-helyes-tarolasa',
    title: 'Hogyan tárold helyesen a parfümjeidet?',
    category: 'Tippek és trükkök',
    excerpt: 'A helyes tárolás kulcsfontosságú a parfümök élettartamának megőrzéséhez. Ismerd meg a legjobb gyakorlatokat!',
    content: `A parfümök érzékeny alkotások, amelyek megfelelő tárolást igényelnek, hogy megőrizzék eredeti illatukat és minőségüket.

## Kerüld a közvetlen napfényt

Az UV sugárzás lebontja a parfüm molekuláit és megváltoztathatja az illatot. Tárold sötét helyen vagy az eredeti dobozában.

## Stabil hőmérséklet

A hőmérséklet-ingadozások károsíthatják a parfümöt. A szobahőmérséklet ideális, kerüld a fürdőszobát, ahol páratartalom és hő ingadozik.

## Függőlegesen tárold

A parfümöket mindig függőlegesen tárold, hogy a kupak tömítése megfelelő maradjon és ne szivárogjon.

## Eredeti csomagolás

Ha lehetséges, tartsd meg az eredeti dobozt. Ez extra védelmet nyújt a fény és a hőmérséklet-ingadozások ellen.

## Élettartam

Egy jól tárolt parfüm 3-5 évig megőrzi minőségét. A citrusos illatok gyorsabban romlanak, mint az orientálisak.`,
    author: 'Parfümpédia',
    publishedAt: '2024-03-10',
    readTime: 3,
  },
  {
    id: 'parfum-retegzes',
    slug: 'parfum-retegzes-muveszete',
    title: 'A parfümrétegzés művészete',
    category: 'Haladó technikák',
    excerpt: 'Tanuld meg, hogyan kombinálhatsz különböző illatokat egyedi, személyre szabott parfümélményért.',
    content: `A parfümrétegzés lehetővé teszi, hogy egyedi illatot hozz létre több parfüm kombinálásával.

## Alapszabályok

1. **Kezdd az alapokkal** - Válassz egy domináns illatot alapként
2. **Harmonizáló jegyek** - Keress közös jegyeket a kombinálni kívánt illatokban
3. **Kevesebb több** - Ne használj háromnál több réteget

## Bevált kombinációk

- **Citrusos + fás** - Friss, de meleg
- **Virágos + pézsma** - Romantikus és bőrközeli
- **Orientális + vanília** - Gazdag és kényeztető

## Technikák

### Egymásra rétegzés
Vidd fel az első illatot, várd meg, amíg megszárad, majd add hozzá a másodikat.

### Különböző pontokra
Vidd fel az egyik illatot a csuklódra, a másikat a nyakadra.

### Testápolókkal
Használj illatosított testápolót alapként a parfüm alatt.`,
    author: 'Parfümpédia',
    publishedAt: '2024-03-05',
    readTime: 4,
  },
  {
    id: 'szezonalis-parfumok',
    slug: 'szezonalis-parfumok-valasztasa',
    title: 'Szezonális parfümök választása',
    category: 'Útmutatók',
    excerpt: 'Minden évszaknak megvan a maga ideális illattípusa. Fedezd fel, melyik parfümöt válaszd az egyes évszakokban!',
    content: `Az évszakok változásával a parfümválasztásunk is változhat. Minden évszaknak megvan a maga hangulata és ideális illattípusa.

## Tavasz

A tavasz a megújulás ideje. Válassz friss, virágos illatokat:
- Könnyű virágos jegyek
- Zöld akkordok
- Lágy citrusok

## Nyár

A melegben a könnyű, frissítő illatok működnek legjobban:
- Aquás, tengeri jegyek
- Citrusok
- Zöld tea
- Könnyű pézsma

## Ősz

Az ősz a melegebb, fűszeres illatok ideje:
- Fahéj, kardamom
- Almás akkordok
- Meleg fás jegyek
- Bőr

## Tél

A hidegben a gazdag, intenzív illatok ragyognak:
- Orientális jegyek
- Vanília, ambra
- Füstös akkordok
- Oud`,
    author: 'Parfümpédia',
    publishedAt: '2024-02-28',
    readTime: 3,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};
