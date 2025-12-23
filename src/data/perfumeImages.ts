// Perfume images mapping
import perfume1 from '@/assets/perfumes/perfume-1.jpg';
import perfume2 from '@/assets/perfumes/perfume-2.jpg';
import perfume3 from '@/assets/perfumes/perfume-3.jpg';
import perfume4 from '@/assets/perfumes/perfume-4.jpg';
import perfume5 from '@/assets/perfumes/perfume-5.jpg';
import perfume6 from '@/assets/perfumes/perfume-6.jpg';
import perfume7 from '@/assets/perfumes/perfume-7.jpg';
import perfume8 from '@/assets/perfumes/perfume-8.jpg';
import perfume9 from '@/assets/perfumes/perfume-9.jpg';
import perfume10 from '@/assets/perfumes/perfume-10.jpg';

// Array of all perfume images
export const perfumeImages = [
  perfume1,
  perfume2,
  perfume3,
  perfume4,
  perfume5,
  perfume6,
  perfume7,
  perfume8,
  perfume9,
  perfume10,
];

// Get a perfume image based on index (cycles through available images)
export const getPerfumeImage = (index: number): string => {
  return perfumeImages[index % perfumeImages.length];
};

// Get a perfume image based on perfume ID (consistent mapping)
export const getPerfumeImageById = (perfumeId: string): string => {
  // Create a simple hash from the perfume ID to get consistent image assignment
  let hash = 0;
  for (let i = 0; i < perfumeId.length; i++) {
    const char = perfumeId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return perfumeImages[Math.abs(hash) % perfumeImages.length];
};
