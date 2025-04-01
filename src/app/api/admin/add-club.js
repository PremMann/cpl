import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, stateId } = req.body;
    const club = await prisma.club.create({
      data: {
        name,
        stateId: parseInt(stateId),
      },
    });
    res.status(200).json(club);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}