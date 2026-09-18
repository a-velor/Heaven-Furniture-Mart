/**
 * SEO & Open Graph Metadata Utilities
 * Provides dynamic canonical URL resolution, dynamic OG image generation via Canvas,
 * and social share metadata synchronization.
 */

export interface SeoMetadataOptions {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const DEFAULT_TITLE = 'Heaven Furniture Mart — Luxury & Bespoke Furniture Studio | Chattogram';
const DEFAULT_DESCRIPTION = 'Chattogram\'s premier luxury bespoke furniture studio. Handcrafted living, bedroom, dining, and custom pieces in seasoned Chittagong Teak, tailored to your room\'s exact dimensions.';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

/**
 * Updates or creates a meta tag in the document head
 */
export function setMetaTag(selector: string, attributeName: string, attributeValue: string, contentValue: string): void {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', contentValue);
}

/**
 * Updates the canonical tag href dynamically with absolute URL
 */
export function setCanonicalUrl(url?: string): string {
  const finalUrl = url || (typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : 'https://heavenfurnituremart.com/');
  
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = finalUrl;

  // Also keep og:url and twitter:url in sync
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', finalUrl);
  setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', finalUrl);

  return finalUrl;
}

/**
 * Dynamically updates page title, descriptions, and Open Graph tags
 */
export function applySeoMetadata(options: SeoMetadataOptions): void {
  if (typeof document === 'undefined') return;

  const title = options.title ? `${options.title} | Heaven Furniture Mart` : DEFAULT_TITLE;
  const description = options.description || DEFAULT_DESCRIPTION;
  const image = options.ogImage || DEFAULT_OG_IMAGE;
  const ogType = options.ogType || 'website';

  // Document Title
  document.title = title;

  // Canonical URL
  const canonical = setCanonicalUrl(options.canonicalUrl);

  // Standard Meta Tags
  setMetaTag('meta[name="description"]', 'name', 'description', description);

  // Open Graph
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Heaven Furniture Mart');
  setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

  // Open Graph Image
  const absoluteImageUrl = image.startsWith('http') || image.startsWith('data:') 
    ? image 
    : `${window.location.origin}${image}`;

  setMetaTag('meta[property="og:image"]', 'property', 'og:image', absoluteImageUrl);
  setMetaTag('meta[property="og:image:secure_url"]', 'property', 'og:image:secure_url', absoluteImageUrl);
  setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
  setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
  setMetaTag('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${title} - Bespoke Luxury Atelier`);

  // Twitter / X Card
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImageUrl);
}

/**
 * Generates an ultra high-res 1200x630 dynamic Open Graph canvas image tailored for a specific bespoke suite
 */
export async function generateDynamicBespokeOgImage(config: {
  suiteTitle: string;
  category: string;
  woodType: string;
  photoUrl?: string;
}): Promise<string> {
  if (typeof document === 'undefined') return DEFAULT_OG_IMAGE;

  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  if (!ctx) return DEFAULT_OG_IMAGE;

  // Background deep atelier charcoal
  ctx.fillStyle = '#0E1A1C';
  ctx.fillRect(0, 0, 1200, 630);

  let imageDrawn = false;

  // Draw photo if provided with safe cross-origin handling
  if (config.photoUrl) {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = config.photoUrl!;
      });

      // Draw photo on right half with subtle zoom
      ctx.save();
      ctx.drawImage(img, 520, 0, 680, 630);
      
      // Gradient blend from dark teal to transparent
      const grad = ctx.createLinearGradient(460, 0, 780, 0);
      grad.addColorStop(0, '#0E1A1C');
      grad.addColorStop(1, 'rgba(14, 26, 28, 0.15)');
      ctx.fillStyle = grad;
      ctx.fillRect(460, 0, 320, 630);
      ctx.restore();
      imageDrawn = true;
    } catch {
      // Fallback decorative geometric pattern if cross-origin image fails
      ctx.fillStyle = '#132629';
      ctx.fillRect(520, 0, 680, 630);
    }
  }

  // Draw luxury geometric pattern if no image or image failed
  if (!imageDrawn) {
    ctx.strokeStyle = 'rgba(197, 168, 128, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 520; i < 1200; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.bezierCurveTo(i + 80, 200, i - 40, 420, i + 60, 630);
      ctx.stroke();
    }
  }

  // Draw Gold Border Frame
  ctx.strokeStyle = 'rgba(197, 168, 128, 0.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, 1128, 558);

  // Outer corner accents
  ctx.strokeStyle = '#C5A880';
  ctx.lineWidth = 4;
  // Top left
  ctx.beginPath();
  ctx.moveTo(36, 70); ctx.lineTo(36, 36); ctx.lineTo(70, 36);
  ctx.stroke();
  // Bottom left
  ctx.beginPath();
  ctx.moveTo(36, 560); ctx.lineTo(36, 594); ctx.lineTo(70, 594);
  ctx.stroke();

  // Atelier Brand Eyebrow
  ctx.font = '600 13px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#C5A880';
  ctx.fillText('HEAVEN FURNITURE MART · BESPOKE ATELIER', 72, 100);

  // Main Category Pill - dynamically sized
  ctx.font = '700 11px -apple-system, BlinkMacSystemFont, sans-serif';
  const categoryText = (config.category || 'BESPOKE ATELIER').toUpperCase();
  const categoryMetrics = ctx.measureText(categoryText);
  const pillWidth = Math.max(140, categoryMetrics.width + 28);

  ctx.fillStyle = 'rgba(197, 168, 128, 0.15)';
  ctx.fillRect(72, 130, pillWidth, 32);
  ctx.strokeStyle = '#C5A880';
  ctx.lineWidth = 1;
  ctx.strokeRect(72, 130, pillWidth, 32);
  ctx.fillStyle = '#FAF8F5';
  ctx.fillText(categoryText, 86, 151);

  // Suite Title
  ctx.font = '400 42px "Cormorant Garamond", Georgia, serif';
  ctx.fillStyle = '#FAF8F5';
  
  // Wrap text if needed
  const words = (config.suiteTitle || 'Bespoke Luxury Furniture').split(' ');
  let line = '';
  let y = 225;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 480 && n > 0) {
      ctx.fillText(line, 72, y);
      line = words[n] + ' ';
      y += 50;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 72, y);

  // Specification Details
  ctx.font = '400 15px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = 'rgba(250, 248, 245, 0.85)';
  ctx.fillText(`Hardwood: ${config.woodType || 'Chittagong Teak'}`, 72, Math.min(y + 55, 470));
  ctx.fillText('Craftsmanship: Generational Joinery · 100% Tailored Dimensions', 72, Math.min(y + 80, 495));

  // Bottom Location & Contact Ribbon
  ctx.strokeStyle = 'rgba(197, 168, 128, 0.25)';
  ctx.beginPath();
  ctx.moveTo(72, 530);
  ctx.lineTo(540, 530);
  ctx.stroke();

  ctx.font = '500 12px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = '#C5A880';
  ctx.fillText('AGRABAD ACCESS ROAD, CHATTOGRAM', 72, 555);
  ctx.fillStyle = '#FAF8F5';
  ctx.fillText('+880 1960-481983 · heavenfurnituremart.com', 320, 555);

  try {
    return canvas.toDataURL('image/jpeg', 0.92);
  } catch (canvasErr) {
    console.warn('Canvas export tainted or restricted, returning safe vector fallback:', canvasErr);
    // Return SVG data URI fallback that never taints
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <rect width="1200" height="630" fill="#0E1A1C"/>
      <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#C5A880" stroke-width="2" stroke-opacity="0.4"/>
      <text x="72" y="100" fill="#C5A880" font-family="sans-serif" font-size="14" font-weight="600" letter-spacing="3">HEAVEN FURNITURE MART · BESPOKE ATELIER</text>
      <text x="72" y="240" fill="#FAF8F5" font-family="serif" font-size="44">${config.suiteTitle}</text>
      <text x="72" y="310" fill="#C5A880" font-family="sans-serif" font-size="16">Hardwood: ${config.woodType}</text>
      <text x="72" y="555" fill="#FAF8F5" font-family="sans-serif" font-size="13">AGRABAD ACCESS ROAD, CHATTOGRAM · +880 1960-481983</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }
}
