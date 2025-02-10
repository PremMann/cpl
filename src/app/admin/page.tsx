import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function page() {
    const users = await prisma.user.findMany();
    const Post = await prisma.post.findMany();

    const addPost = async (formData: FormData) => {
        "use server";
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;

        await prisma.post.create({
            data: {
                title: title as string,
                content: content as string,
                authorId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
                published: true,
            },
        });
        revalidatePath('/admin');
    };
   
    return (
        <div>
            <h1>Admin Page</h1>

            <form action={addPost}>
                <h2>Add New Post</h2>
                <label>
                    Title:
                    <input type="text" name="title" required />
                </label>
                <label>
                    Content:
                    <textarea name="content" required></textarea>
                </label>
                <button type="submit">Add Post</button>
            </form>

            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.email}
                    </li>
                ))}
            </ul>
            <h2>Posts</h2>
            <ul>
                {Post.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );

}