import prisma from '@/lib/db';

async function fetchUsers() {
  const users = await prisma.user.findMany();
  return users;
}

async function fetchPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function UserPage() {
  const users = await fetchUsers();
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} - {post.content}</li>
        ))}
      </ul>
    </div>
  );
}