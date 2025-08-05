// src/lib/api.ts
export const API_URL = process.env.STRAPI_API_URL || 'https://perfect-growth-2f70170e10.strapiapp.com';

export async function getPosts(locale: string) {
  const res = await fetch(`https://perfect-growth-2f70170e10.strapiapp.com/api/article?locale=${locale}&populate=*`);
  const json = await res.json();
  return json.data;
}
