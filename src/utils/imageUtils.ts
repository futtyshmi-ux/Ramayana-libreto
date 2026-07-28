export function getImageUrl(image: any): string {
  if (!image) return '';
  let url = typeof image === 'string' ? image : (image?.default || image?.src || String(image));
  if (url.startsWith('/')) {
    url = '.' + url;
  }
  return url;
}
