import officeFriendly from '@/assets/collections/office-friendly.jpg';
import winterSpicy from '@/assets/collections/winter-spicy.jpg';
import cleanMusks from '@/assets/collections/clean-musks.jpg';
import gourmandFavorites from '@/assets/collections/gourmand-favorites.jpg';
import dateNight from '@/assets/collections/date-night.jpg';
import summerFresh from '@/assets/collections/summer-fresh.jpg';
import oudCollection from '@/assets/collections/oud-collection.jpg';
import iconicRoses from '@/assets/collections/iconic-roses.jpg';

export const collectionImages: Record<string, string> = {
  'office-friendly': officeFriendly,
  'winter-spicy': winterSpicy,
  'clean-musks': cleanMusks,
  'gourmand-favorites': gourmandFavorites,
  'date-night': dateNight,
  'summer-fresh': summerFresh,
  'oud-collection': oudCollection,
  'iconic-roses': iconicRoses,
};

export const getCollectionImage = (collectionId: string): string | undefined => {
  return collectionImages[collectionId];
};
