import { getAllUsers, getAllPosts } from "@/actions/createUser";

export default async function UserPage() {
 const users = await getAllUsers();
 const posts = await getAllPosts();
    console.log("posts : ", posts);
 console.log("users : ", users);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.id}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span>{user.role}</span>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
      <h1>Posts</h1>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>
                <span>{post.id}</span>
                <span>{post.title}</span>
                <span>{post.content}</span>
            </li>
            ))}
        </ul>
    </div>
  );
}