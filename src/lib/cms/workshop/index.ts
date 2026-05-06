import { getContent } from '../client';
import type { CmsWorkshop, Workshop } from './types';
import { workshopsMapper } from './mapper';

export async function getWorkshopsContent(): Promise<Workshop[]> {
  return getContent<CmsWorkshop[], Workshop[]>('workshops', {
    params: { 'pagination[pageSize]': '100' },
    mapper: workshopsMapper,
  });
}

export async function getWorkshopBySlugContent(slug: string): Promise<Workshop | null> {
  const results = await getContent<CmsWorkshop[], Workshop[]>('workshops', {
    params: {
      'filters[slug][$eq]': slug,
      'pagination[pageSize]': '1',
    },
    mapper: workshopsMapper,
  });
  return results[0] ?? null;
}
