"use server";
import prisma from '@/lib/db';
import { revalidatePath } from "next/cache";

export async function loadAllTeams() {
  try {
    const teams = await prisma.team.findMany({
      include: {
        homeMatches: true,
        awayMatches: true,
        standings: true,
        leagues: true,
      },
    });
    
    return teams;
  } catch (error) {
    console.error("Error loading teams:", error);
    return {
      message: "An error occurred while loading the teams",
    };
  }
}

export async function addTeam(formData: FormData) {
  const name = formData.get("name") as string;
  const logoUrl = formData.get("logoUrl") as string;
  const stadium = formData.get("stadium") as string;
  const coach = formData.get("coach") as string;
  const foundedYear = Number(formData.get("foundedYear") as unknown);

  try {
    await prisma.team.create({
      data: {
        name,
        logoUrl,
        stadium,
        coach,
        foundedYear,
      },
    });
    revalidatePath("/admin/team");
  }
    catch (error) {
        console.log(error);
    }

}

export async function loadPlayers() {
  try {
 
    const players = await prisma.player.findMany();
    
    return players;
  } catch (error) {
    return {
      message: "An error occurred while loading the players",
    };
  }
}
