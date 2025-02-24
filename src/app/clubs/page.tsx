import { ComboboxDemo } from "@/components/ui/combobox";
import mainLogo from "@/../public/main.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { loadAllTeams } from "@/actions/team";
import Link from 'next/link';

export default async function Club() {
  const teams = await loadAllTeams();

  return (
    <div className="container mx-auto py-10">
      <div className="flex w-full bg-black p-2 rounded">
        <div className="w-1 h-6 bg-white rounded-full"></div>
        <span className="text-l font-bold pl-2 text-center uppercase  border-white text-white">Clubs</span>
      </div>
      <div className="py-4">
       <ComboboxDemo />
      </div>
    
      <div className="flex flex-row gap-8 flex-wrap justify-center py-4">
        {Array.isArray(teams) && teams.map((team, index) => (
          <Link key={index} href={`/clubs/${team.id}`}>
            <div className="flex flex-col bg-blue-500 w-72 h-72 justify-end rounded-lg shadow-lg overflow-hidden cursor-pointer" style={{ backgroundImage: `url(${mainLogo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="flex flex-row gap-4 bg-black bg-opacity-75 p-4">
                <div className="content-center">
                  <Avatar>
                    <AvatarImage src={mainLogo.src} />
                    <AvatarFallback>{team.name}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="gap-8 text-white">
                  <h2 className="text-lg font-semibold">{team.name}</h2>
                  <p className="text-sm">{team.stadium}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}