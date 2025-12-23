// Brand image imports
import chanel from '@/assets/brands/chanel.jpg';
import dior from '@/assets/brands/dior.jpg';
import tomFord from '@/assets/brands/tom-ford.jpg';
import creed from '@/assets/brands/creed.jpg';
import byredo from '@/assets/brands/byredo.jpg';
import leLabo from '@/assets/brands/le-labo.jpg';
import maisonMargiela from '@/assets/brands/maison-margiela.jpg';
import acquaDiParma from '@/assets/brands/acqua-di-parma.jpg';
import guerlain from '@/assets/brands/guerlain.jpg';
import ysl from '@/assets/brands/ysl.jpg';
import fredericMalle from '@/assets/brands/frederic-malle.jpg';
import versace from '@/assets/brands/versace.jpg';

export const brandImages: Record<string, string> = {
  chanel,
  dior,
  'tom-ford': tomFord,
  creed,
  byredo,
  'le-labo': leLabo,
  'maison-margiela': maisonMargiela,
  'acqua-di-parma': acquaDiParma,
  guerlain,
  ysl,
  'frederic-malle': fredericMalle,
  versace,
};

export const getBrandImage = (brandId: string): string | undefined => {
  return brandImages[brandId];
};
