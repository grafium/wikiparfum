import { Note } from './types';

export const notes: Note[] = [
  // Citrus
  {
    id: 'bergamot',
    name: 'Bergamott',
    slug: 'bergamott',
    category: 'citrus',
    description: 'A bergamott egy kesernyés-édes citrusféle, amely Dél-Olaszországból származik. Üde, napfényes karaktere teszi az egyik legnépszerűbb fejjeggyé a parfümiparban.',
    pairsWith: ['neroli', 'labdanum', 'pézsma'],
  },
  {
    id: 'lemon',
    name: 'Citrom',
    slug: 'citrom',
    category: 'citrus',
    description: 'A friss, élénk citrom illata azonnal felfrissít és energizál. Gyakran használják férfi és unisex parfümökben a ragyogó nyitáshoz.',
    pairsWith: ['verbéna', 'gyömbér', 'bazsalikom'],
  },
  {
    id: 'orange',
    name: 'Narancs',
    slug: 'narancs',
    category: 'citrus',
    description: 'Az édes narancs meleg, napfényes karaktert ad a parfümöknek. Kiegyensúlyozottabb, mint a citrom, és remekül harmonizál virágos jegyekkel.',
    pairsWith: ['jázmin', 'neroli', 'fahéj'],
  },
  {
    id: 'grapefruit',
    name: 'Grapefruit',
    slug: 'grapefruit',
    category: 'citrus',
    description: 'A grapefruit kesernyés-savanyú illata modern, dinamikus parfümökben népszerű. Friss, kissé zöldes karaktere egyedi nyitást biztosít.',
    pairsWith: ['fekete ribizli', 'rózsabors', 'vetiver'],
  },
  {
    id: 'mandarin',
    name: 'Mandarin',
    slug: 'mandarin',
    category: 'citrus',
    description: 'A mandarin édeskés, lágy citrusillat, amely gyermeki vidámságot és melegséget sugároz. Kiválóan működik gourmand és virágos kompozíciókban.',
    pairsWith: ['jázmin', 'vanília', 'pézsma'],
  },
  // Floral
  {
    id: 'rose',
    name: 'Rózsa',
    slug: 'rozsa',
    category: 'virágos',
    description: 'A parfümipar királynője, a rózsa számtalan árnyalatban jelenik meg: a bársonyos damaszkuszi rózsától a friss, zöld teaig. Időtlen elegancia szimbóluma.',
    pairsWith: ['oud', 'pézsma', 'pacsuli'],
  },
  {
    id: 'jasmine',
    name: 'Jázmin',
    slug: 'jazmin',
    category: 'virágos',
    description: 'A jázmin gazdag, érzéki virágillat, amely éjszaka nyílik és opulens, kissé animális karakterrel rendelkezik. A nagy parfümök alapköve.',
    pairsWith: ['szantálfa', 'tubarózsa', 'ylang-ylang'],
  },
  {
    id: 'tuberose',
    name: 'Tubarózsa',
    slug: 'tubarozsa',
    category: 'virágos',
    description: 'A tubarózsa kábító, krémesen édes virágillat, amely a parfümök igazi dívaszereplője. Intenzív, néha szinte kábító jelenléte feledhetetlen.',
    pairsWith: ['jázmin', 'gardénia', 'ylang-ylang'],
  },
  {
    id: 'iris',
    name: 'Írisz',
    slug: 'irisz',
    category: 'virágos',
    description: 'Az írisz poros, elegáns illat, amelyet a nőszirom gyökeréből nyernek. Egyik legdrágább alapanyag, amelyet a haute parfüméria különösen kedvel.',
    pairsWith: ['rózsa', 'ibolya', 'pézsma'],
  },
  {
    id: 'ylang',
    name: 'Ylang-ylang',
    slug: 'ylang-ylang',
    category: 'virágos',
    description: 'Az ylang-ylang egzotikus, édes virágillat Délkelet-Ázsiából. Banános, krémes karaktere teszi egyedivé, és fontos szerepet játszik orientális parfümökben.',
    pairsWith: ['jázmin', 'szantálfa', 'vanília'],
  },
  {
    id: 'neroli',
    name: 'Neroli',
    slug: 'neroli',
    category: 'virágos',
    description: 'A neroli a keserű narancs virágából készül, és egyik legfinomabb virágos illat. Friss, zöld és kissé mézes karaktere teszi időtlenné.',
    pairsWith: ['bergamot', 'pézsma', 'vetiver'],
  },
  {
    id: 'lily-of-valley',
    name: 'Gyöngyvirág',
    slug: 'gyongyvirag',
    category: 'virágos',
    description: 'A gyöngyvirág friss, zöld virágillat, amelyet szintetikusan állítanak elő (a természetes kivonás nem lehetséges). Tavaszi parfümök kedvence.',
    pairsWith: ['jázmin', 'rózsa', 'pézsma'],
  },
  {
    id: 'violet',
    name: 'Ibolya',
    slug: 'ibolya',
    category: 'virágos',
    description: 'Az ibolya poros, zöldes virágillat, amely retró eleganciát sugároz. Gyakran íriszszel és rózsával kombinálják klasszikus parfümökben.',
    pairsWith: ['írisz', 'rózsa', 'vetiver'],
  },
  // Spicy
  {
    id: 'cardamom',
    name: 'Kardamom',
    slug: 'kardamom',
    category: 'fűszeres',
    description: 'A kardamom meleg, fűszeres-citrusos illat, amely keleti misztikumot ad a parfümöknek. Gyakori férfi és unisex kompozíciókban.',
    pairsWith: ['tömjén', 'szantálfa', 'rózsabors'],
  },
  {
    id: 'pink-pepper',
    name: 'Rózsabors',
    slug: 'rozsabors',
    category: 'fűszeres',
    description: 'A rózsabors nem igazi bors, hanem bogyó, amely csípős-gyümölcsös karaktert ad. Modern parfümök kedvelt fűszere.',
    pairsWith: ['bergamot', 'vetiver', 'borostyán'],
  },
  {
    id: 'cinnamon',
    name: 'Fahéj',
    slug: 'fahej',
    category: 'fűszeres',
    description: 'A fahéj meleg, édes fűszer, amely téli és orientális parfümökben népszerű. Érzéki melegséget és kényeztetést sugároz.',
    pairsWith: ['vanília', 'szegfűszeg', 'narancs'],
  },
  {
    id: 'clove',
    name: 'Szegfűszeg',
    slug: 'szegfuszeg',
    category: 'fűszeres',
    description: 'A szegfűszeg intenzív, aromás fűszer, amely mélységet és karaktert ad. Gyakori chypre és orientális kompozíciókban.',
    pairsWith: ['fahéj', 'szantálfa', 'rózsa'],
  },
  {
    id: 'ginger',
    name: 'Gyömbér',
    slug: 'gyomber',
    category: 'fűszeres',
    description: 'A gyömbér friss, fűszeres illat, amely energiát és vitalitást sugároz. Modern fougère és aquás parfümökben gyakori.',
    pairsWith: ['citrom', 'bergamot', 'vetiver'],
  },
  {
    id: 'saffron',
    name: 'Sáfrány',
    slug: 'safrany',
    category: 'fűszeres',
    description: 'A sáfrány a világ legdrágább fűszere, bőrös-mézes-metallos illattal. Luxusparfümök jellegzetes összetevője.',
    pairsWith: ['oud', 'rózsa', 'borostyán'],
  },
  // Woody
  {
    id: 'sandalwood',
    name: 'Szantálfa',
    slug: 'szantalfa',
    category: 'fás',
    description: 'A szantálfa krémes, tejes-fás illat, amely meleg és érzéki karaktert ad. Az egyik legértékesebb parfümalapanyag.',
    pairsWith: ['rózsa', 'vanília', 'pézsma'],
  },
  {
    id: 'cedar',
    name: 'Cédrus',
    slug: 'cedrus',
    category: 'fás',
    description: 'A cédrus száraz, elegáns faillat, amely maszkulin és tiszta karaktert biztosít. Fougère és fás parfümök alapköve.',
    pairsWith: ['vetiver', 'bergamot', 'pézsma'],
  },
  {
    id: 'vetiver',
    name: 'Vetiver',
    slug: 'vetiver',
    category: 'fás',
    description: 'A vetiver füves-földes-füstös illat, amelyet Indiából származó fűgyökerekből nyernek. Eleganciát és mélységet ad a parfümöknek.',
    pairsWith: ['bergamot', 'írisz', 'cédrus'],
  },
  {
    id: 'oud',
    name: 'Oud',
    slug: 'oud',
    category: 'fás',
    description: 'Az oud (agarfa) a parfümipar egyik legdrágább alapanyaga. Komplex, animális-fás-füstös illata egyedi és intenzív.',
    pairsWith: ['rózsa', 'sáfrány', 'borostyán'],
  },
  {
    id: 'patchouli',
    name: 'Pacsuli',
    slug: 'pacsuli',
    category: 'fás',
    description: 'A pacsuli földes, kissé édes falevélillat, amely mélységet és tartósságot ad. Chypre és orientális parfümök fontos összetevője.',
    pairsWith: ['rózsa', 'vanília', 'labdanum'],
  },
  // Musk & Amber
  {
    id: 'musk',
    name: 'Pézsma',
    slug: 'pezsma',
    category: 'pézsma',
    description: 'A pézsma lágy, bőrszerű illat, amely ma már szintetikusan készül. Parfümök alapjának tökéletes lezárója és "bőrre simuló" hatást ad.',
    pairsWith: ['szantálfa', 'rózsa', 'írisz'],
  },
  {
    id: 'amber',
    name: 'Borostyán',
    slug: 'borostyan',
    category: 'balzsamikus',
    description: 'A borostyán meleg, balzsamikus akkord, amely általában vanília, labdanum és benzoe keverékéből áll. Orientális parfümök szíve.',
    pairsWith: ['vanília', 'oud', 'szantálfa'],
  },
  {
    id: 'labdanum',
    name: 'Labdanum',
    slug: 'labdanum',
    category: 'balzsamikus',
    description: 'A labdanum mézédes, bőrös gyanta a Földközi-tenger vidékéről. Chypre parfümök klasszikus alapjegye, mély és érzéki.',
    pairsWith: ['bergamot', 'tölgymoh', 'pacsuli'],
  },
  // Sweet
  {
    id: 'vanilla',
    name: 'Vanília',
    slug: 'vanilla',
    category: 'édes',
    description: 'A vanília édes, krémes illat, amely melegséget és kényeztetést sugároz. Gourmand és orientális parfümök legfontosabb alkotója.',
    pairsWith: ['szantálfa', 'tonkabab', 'borostyán'],
  },
  {
    id: 'tonka',
    name: 'Tonkabab',
    slug: 'tonkabab',
    category: 'édes',
    description: 'A tonkabab mandulás-vaníliás-szénaszerű illat, amely lágy, krémes melegséget ad. Fougère és gourmand parfümök kedvence.',
    pairsWith: ['vanília', 'levendula', 'pézsma'],
  },
  {
    id: 'benzoin',
    name: 'Benzoe',
    slug: 'benzoe',
    category: 'balzsamikus',
    description: 'A benzoe édes, vaníliás gyanta, amely balzsamikus melegséget ad a parfümöknek. Orientális és gourmand kompozíciók gyakori alapja.',
    pairsWith: ['vanília', 'tömjén', 'mirha'],
  },
  // Fruity
  {
    id: 'blackcurrant',
    name: 'Fekete ribizli',
    slug: 'fekete-ribizli',
    category: 'gyümölcsös',
    description: 'A fekete ribizli intenzív, kissé zöldes gyümölcsillat, amely a híres cassis akkorddal egyedülálló karaktert ad.',
    pairsWith: ['rózsa', 'pézsma', 'rózsabors'],
  },
  {
    id: 'peach',
    name: 'Őszibarack',
    slug: 'oszibarack',
    category: 'gyümölcsös',
    description: 'Az őszibarack édes, bársonyos gyümölcsillat, amely lágyságot és nőiességet sugároz. Virágos parfümök gyakori társa.',
    pairsWith: ['jázmin', 'tubarózsa', 'pézsma'],
  },
  {
    id: 'apple',
    name: 'Alma',
    slug: 'alma',
    category: 'gyümölcsös',
    description: 'Az alma friss, ropogós gyümölcsillat, amely fiatalos és vidám karaktert ad. Zöld és aquás parfümökben népszerű.',
    pairsWith: ['gyöngyvirág', 'magnólia', 'pézsma'],
  },
  // Green & Aromatic
  {
    id: 'basil',
    name: 'Bazsalikom',
    slug: 'bazsalikom',
    category: 'aromás',
    description: 'A bazsalikom friss, aromás illat, amely fűszeres-zöld karaktert ad. Fougère és aromás parfümök összetevője.',
    pairsWith: ['citrom', 'neroli', 'vetiver'],
  },
  {
    id: 'lavender',
    name: 'Levendula',
    slug: 'levendula',
    category: 'aromás',
    description: 'A levendula aromás, friss illat, amely nyugtató és tiszta. A klasszikus fougère parfümök alapja.',
    pairsWith: ['tonkabab', 'tölgymoh', 'bergamot'],
  },
  {
    id: 'mint',
    name: 'Menta',
    slug: 'menta',
    category: 'aromás',
    description: 'A menta hűsítő, friss illat, amely energizáló hatású. Aquás és aromás parfümökben népszerű.',
    pairsWith: ['citrom', 'bazsalikom', 'gyömbér'],
  },
  {
    id: 'tea',
    name: 'Tea',
    slug: 'tea',
    category: 'zöld',
    description: 'A tea friss, zöld illat, amely tisztaságot és kifinomultságot sugároz. Minimialista és modern parfümök kedvence.',
    pairsWith: ['bergamot', 'jázmin', 'pézsma'],
  },
  // Other
  {
    id: 'incense',
    name: 'Tömjén',
    slug: 'tomjen',
    category: 'balzsamikus',
    description: 'A tömjén szent, misztikus gyantaillat, amely spirituális mélységet ad. Orientális és egyházi parfümök kulcseleme.',
    pairsWith: ['mirha', 'oud', 'kardamom'],
  },
  {
    id: 'myrrh',
    name: 'Mirha',
    slug: 'mirha',
    category: 'balzsamikus',
    description: 'A mirha kesernyés-balzsamikus gyanta, amely misztikus és antik karaktert ad. Tömjénnel gyakran párosítják.',
    pairsWith: ['tömjén', 'benzoe', 'oud'],
  },
  {
    id: 'oakmoss',
    name: 'Tölgymoh',
    slug: 'tolgymoh',
    category: 'fás',
    description: 'A tölgymoh földes, mohás illat, amely a klasszikus chypre parfümök szíve. Ma már szigorúan szabályozott.',
    pairsWith: ['labdanum', 'bergamot', 'pacsuli'],
  },
  {
    id: 'leather',
    name: 'Bőr',
    slug: 'bor',
    category: 'bőr',
    description: 'A bőr füstös, animális illat, amely erős karaktert és maszkulinitást sugároz. Vintage és modern bőrparfümök alapja.',
    pairsWith: ['tömjén', 'szantálfa', 'ibolya'],
  },
  {
    id: 'tobacco',
    name: 'Dohány',
    slug: 'dohany',
    category: 'aromás',
    description: 'A dohány édes, kissé mézes aromás illat, amely melegséget és karizmát sugároz. Esti és elegáns parfümökben gyakori.',
    pairsWith: ['vanília', 'szantálfa', 'tonkabab'],
  },
  {
    id: 'coffee',
    name: 'Kávé',
    slug: 'kave',
    category: 'aromás',
    description: 'A kávé kesernyés-édes illat, amely energiát és modernséget sugároz. Gourmand parfümök egyre népszerűbb összetevője.',
    pairsWith: ['vanília', 'kardamom', 'rózsabors'],
  },
  {
    id: 'marine',
    name: 'Tengeri jegyek',
    slug: 'tengeri-jegyek',
    category: 'aquás',
    description: 'A tengeri jegyek friss, sós-aquás illatok, amelyek a tenger illatát idézik. Aquás és sportos parfümök alapja.',
    pairsWith: ['citrom', 'vetiver', 'pézsma'],
  },
];

export const getNoteById = (id: string): Note | undefined => {
  return notes.find(note => note.id === id);
};

export const getNotesByIds = (ids: string[]): Note[] => {
  return ids.map(id => getNoteById(id)).filter((note): note is Note => note !== undefined);
};

export const getNotesByCategory = (category: string): Note[] => {
  return notes.filter(note => note.category === category);
};

export const searchNotes = (query: string): Note[] => {
  const lowerQuery = query.toLowerCase();
  return notes.filter(note => 
    note.name.toLowerCase().includes(lowerQuery) ||
    note.description.toLowerCase().includes(lowerQuery)
  );
};
