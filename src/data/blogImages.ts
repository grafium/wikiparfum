import illatjegyekFelismerese from '@/assets/blog/illatjegyek-felismerese.jpg';
import illatcsaladok from '@/assets/blog/illatcsaladok.jpg';
import parfumTarolas from '@/assets/blog/parfum-tarolas.jpg';
import parfumRetegzes from '@/assets/blog/parfum-retegzes.jpg';
import szezonalisParfumok from '@/assets/blog/szezonalis-parfumok.jpg';

export const blogImages: Record<string, string> = {
  'illatjegyek-felismerese': illatjegyekFelismerese,
  'illatcsaladok': illatcsaladok,
  'parfum-tarolas': parfumTarolas,
  'parfum-retegzes': parfumRetegzes,
  'szezonalis-parfumok': szezonalisParfumok,
};

export const getBlogImage = (postId: string): string | undefined => {
  return blogImages[postId];
};
