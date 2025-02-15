// filepath: /Users/premmann/Next/cpl/src/app/admin/page.tsx
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTeam, loadAllTeams } from '@/actions/team';

export default async function page() {

    const teams = await loadAllTeams();

    return (
        <div className='flex flex-col gap-4 items-center flex-wrap items-center content-center p-4'>
            <h1>Admin Page</h1>
            <form  
                action={addTeam}
                className='flex flex-col gap-4 w-1/2 justify-center items-left'
                >
            <h2>Add New Team</h2>
            <label htmlFor="name">Name</label>
            <Input id="name" name='name' placeholder='Name' required />

            <label htmlFor="logoUrl">Logo URL</label>
            <Input id="logoUrl" name='logoUrl' placeholder='Logo URL' required />

            <label htmlFor="stadium">Stadium</label>
            <Input id="stadium" name="stadium" placeholder='Stadium' required />

            <label htmlFor="coach">Coach</label>
            <Input id="coach" name='coach' placeholder='Coach' required />

            <label htmlFor="foundedYear">Founded Year</label>
            <Input id="foundedYear" name='foundedYear' type="number" placeholder='Founded Year' required/>

            <Button type="submit">Add Team</Button>
            </form>

            <div>
                <h2>Teams</h2>
                <ul>
                    {Array.isArray(teams) ? (
                        teams.map((team) => (
                            <li key={team.id}>
                                {team.name}
                            </li>
                        ))
                    ) : (
                        <div>{teams.message}</div>
                    )}
                </ul>
            </div>

        </div>
    );
}