"use server";
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function loadPost() {
    try {
        const post = await prisma.post.findMany();
        return post;
    } catch (error) {
        return {
            message: 'An error occurred while loading the post',
        };
    }
}

export async function loadUser() {
    try {
        const user = await prisma.user.findMany();
        return user;
    } catch (error) {
        return {
            message: 'An error occurred while loading the user',
        };
    }
}


export async function addPost(formData: FormData) {
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
}


