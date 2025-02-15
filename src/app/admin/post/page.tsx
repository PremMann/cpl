// filepath: /Users/premmann/Next/cpl/src/app/admin/page.tsx
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadPost, addPost } from '@/actions/data';
import { Suspense } from 'react';

export default async function page() {
    const posts = await loadPost();

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

            <Suspense fallback={<div>Loading...</div>}>
               <div>
                <h2>Post</h2>
                <ul>
                    {Array.isArray(posts) ? (
                        posts.map((post) => (
                            <li key={post.id}>
                                {post.title}: {post.content}
                            </li>
                        ))
                    ) : (
                        <div>{posts.message}</div>
                    )}
                </ul>
               </div>
            </Suspense>
        </div>
    );
}