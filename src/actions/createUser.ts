
import prisma from '@/lib/db';

  export async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  export async function getAllPosts() {
    const posts = await prisma.post.findMany();
    return posts;
  }
