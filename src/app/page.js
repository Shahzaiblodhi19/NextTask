import { supabase } from '../lib/supabaseClient'

export default async function HomePage() {
  const { data: posts, error } = await supabase.from('posts').select('*')

  if (error) {
    return <div className="p-6 text-red-600">Error loading posts: {error.message}</div>
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-5">Posts</h1>
      {!posts?.length && <p>No posts found.</p>}
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
