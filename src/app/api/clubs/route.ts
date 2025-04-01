import prisma from '@/lib/db';

export async function GET() {
    // For example, fetch data from your DB here
    const teams = await prisma.team.findMany({
      include: {
        homeMatches: true,
        awayMatches: true,
        standings: true,
        leagues: true,
      },
    });
    return new Response(JSON.stringify(teams), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
   
  export async function POST(request: Request) {
    // Parse the request body
    const body = await request.json();
    const { name } = body;
   
    // e.g. Insert new user into your DB
    const newUser = { id: Date.now(), name };
   
    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  }