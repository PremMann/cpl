import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import { addPost } from '@/actions/createUser';

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
        <div className='flex flex-col gap-4 items-center flex-wrap items-center content-center p-4'>
            <h1>Admin Page</h1>
            <form  
                action={addPost}
                className='flex flex-col gap-4 w-1/2 justify-center items-left'
            >
                <h2>Add New Post</h2>
                <label> Title: </label>
                    <Input 
                        type="text" 
                        name="title" 
                        placeholder='Title'
                        required />
                
                <label>Content:</label>
                <textarea
                    className="border border-gray-300 rounded-md p-2"
                    name="content" 
                    placeholder='Content'
                    required>
                    
                </textarea>
                
                <Button type="submit">Add Post</Button>
            </form>
            <div className="flex flex-col gap-4 w-1/2 justify-center items-left">
               
                <h2 className='self-center'>Posts</h2>
                <ul className='flex flex-col gap-1'>
                    {Post.map((post) => (
                        <li key={post.id}>
                            {post.title}
                            : {post.content}
                        </li>
                        
                    ))}
                </ul>
                <h2 className='selft-center'>Users</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}