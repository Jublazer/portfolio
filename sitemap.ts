import type { MetadataRoute } from 'next';
import { ALL_SERVICES } from '@/data/services';
import { ALL_PROJECTS } from '@/data/projects';
import { BRAND } from '@/data/constants';

const base = BRAND.baseUrl || undefined;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/projects', '/about', '/process', '/contact'];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: base ? `${base}${route}` : route,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = ALL_SERVICES.map((s) => ({
    url: base ? `${base}/services/${s.slug}` : `/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = ALL_PROJECTS.filter((p) => p.visible !== false).map(
    (p) => ({
      url: base ? `${base}/projects/${p.slug}` : `/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
  );

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
