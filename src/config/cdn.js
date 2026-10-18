/**
 * Global CDN Configuration powered by GitHub + jsDelivr
 * Automatically mirrors the repository at https://github.com/alpha-aks/ghotu
 */
export const CDN_BASE = 'https://cdn.jsdelivr.net/gh/alpha-aks/ghotu@main/public';

/**
 * Helper to get the full CDN URL for any image.
 * Example: getCdnImage('/images/home-hero.jpg') -> 'https://cdn.jsdelivr.net/gh/alpha-aks/ghotu@main/public/images/home-hero.jpg'
 */
export function getCdnImage(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${CDN_BASE}${cleanPath}`;
}
