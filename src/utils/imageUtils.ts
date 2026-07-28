export function getImageUrl(image: any): string {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (typeof image === 'object' && image !== null) {
    if ('default' in image && typeof image.default === 'string') {
      return image.default;
    }
    if ('src' in image && typeof image.src === 'string') {
      return image.src;
    }
  }
  return String(image);
}
