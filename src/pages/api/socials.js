import { client } from '@/lib/client';

export async function getSocials() {
  const query = `*[_type == 'socials']`;
  const socials = await client.fetch(query);
  return socials;
}
