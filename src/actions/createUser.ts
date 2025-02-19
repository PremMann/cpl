import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

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

export async function getPosts() {
  return await prisma.post.findMany();
}