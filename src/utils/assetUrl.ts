/**
 * Resolves an asset path to include the Vite configured base path (for GitHub Pages subpaths).
 * Works across both development ('/') and production ('/saimanikantarevanthvalluruportfolio/').
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
