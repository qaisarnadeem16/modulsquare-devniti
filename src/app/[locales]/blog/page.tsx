// app/[locale]/blog/page.tsx
import { getPosts } from '@/lib/api';

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const posts = await getPosts(params.locale);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Articles ({params.locale})</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.attributes.title}</h2>
            <p className="text-gray-600">{post.attributes.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
