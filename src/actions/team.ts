"use server";
import prisma from '@/lib/db';
import { revalidatePath } from "next/cache";

export async function loadAllTeams() {
  try {
    const teams = await prisma.team.findMany();
    
    return teams;
  } catch (error) {
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