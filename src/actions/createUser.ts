import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, passwordHash, role, email } = req.body;

    try {
      const user = await prisma.user.create({
        data: {
          username,
          passwordHash,
          role,
          email,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export async function createUser(username: string, passwordHash: string, role: string, email: string) {
    console.log("createuser in actions : ", username, passwordHash, role, email);
    try {
      const user = await prisma.user.create({
        data: {
          username,
          passwordHash,
          role,
          email,
        },
      });
      return user;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  export async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  export async function getAllPosts() {
    const posts = await prisma.post.findMany();
    return posts;
  }
