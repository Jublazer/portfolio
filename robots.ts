import type { MetadataRoute } from 'next';
import { BRAND } from '@/data/constants';

export default function robots(): MetadataRoute.Robots {
  const base = BRAND.baseUrl || undefined;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard'],
    },
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
