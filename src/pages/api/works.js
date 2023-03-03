import { client } from '@/lib/client';

export async function worksFilter(type) {
  const query = `*[_type == 'works' && type->slug.current == '${type}']{
    _id, slug, stack, image, title, link,
    type->
  }`;
  const works = await client.fetch(query);
  return works;
}
