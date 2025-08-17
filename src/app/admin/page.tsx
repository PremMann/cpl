import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addPost, loadPost, loadUser } from "@/actions/data";

// Types and type guards
type Post = { id: string | number; title: string; content: string };
type User = { id: string | number; email: string };

function isPostArray(val: unknown): val is Post[] {
  return Array.isArray(val) && val.every((p) => {
    const o = p as Record<string, unknown>;
    return (typeof o.id === "string" || typeof o.id === "number")
      && typeof o.title === "string"
      && typeof o.content === "string";
  });
}

function isUserArray(val: unknown): val is User[] {
  return Array.isArray(val) && val.every((u) => {
    const o = u as Record<string, unknown>;
    return (typeof o.id === "string" || typeof o.id === "number")
      && typeof o.email === "string";
  });
}

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage posts and view registered users.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {/* New Post */}
        <section className="md:col-span-1 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h2 className="text-lg font-semibold text-gray-900">Add New Post</h2>
          <p className="text-sm text-gray-600 mb-4">Create and publish a new update.</p>

          <form action={addPost} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">
                Title
              </label>
              <Input id="title" name="title" type="text" placeholder="Enter title" required />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="content" className="text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                required
                placeholder="Write content..."
                className="w-full min-h-[140px] border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f03135]"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="bg-[#f03135] hover:bg-[#d3262a] text-white">
                Publish Post
              </Button>
            </div>
          </form>
        </section>

        {/* Data Sections */}
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Posts</h2>
              <p className="text-sm text-gray-600">Latest posts in the system.</p>
            </div>
            <Suspense fallback={<div className="p-5 text-sm text-gray-600">Loading posts…</div>}>
              <PostsSection />
            </Suspense>
          </section>

          <section className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Users</h2>
              <p className="text-sm text-gray-600">Registered user accounts.</p>
            </div>
            <Suspense fallback={<div className="p-5 text-sm text-gray-600">Loading users…</div>}>
              <UsersSection />
            </Suspense>
          </section>
        </div>
      </div>
    </div>
  );
}

// Server component sections for streaming with Suspense
async function PostsSection() {
  const postsData = await loadPost();

  if (!isPostArray(postsData) || postsData.length === 0) {
    return (
      <div className="p-5 text-sm text-gray-600">
        {isPostArray(postsData) ? "No posts yet." : (postsData as { message?: string })?.message ?? "Unable to load posts."}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-100">
      {postsData.map((post) => (
        <li key={post.id} className="p-5 hover:bg-gray-50 transition-colors">
          <h3 className="font-medium text-gray-900">{post.title}</h3>
          <p className="text-sm text-gray-700 mt-1">{post.content}</p>
        </li>
      ))}
    </ul>
  );
}

async function UsersSection() {
  const usersData = await loadUser();

  if (!isUserArray(usersData) || usersData.length === 0) {
    return (
      <div className="p-5 text-sm text-gray-600">
        {isUserArray(usersData) ? "No users found." : (usersData as { message?: string })?.message ?? "Unable to load users."}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-100">
      {usersData.map((user) => (
        <li key={user.id} className="p-5 flex items-center justify-between">
          <span className="text-sm text-gray-900">{user.email}</span>
          <span className="text-xs text-gray-500">ID: {user.id}</span>
        </li>
      ))}
    </ul>
  );
}