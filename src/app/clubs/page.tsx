import { ComboboxDemo } from "@/components/ui/combobox"
import Image from "next/image";
import mainLogo from "@/../public/main.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Club() {

  const teams = [
    { name: 'Team A', stadium: 'Stadium A', logo: mainLogo.src },
    { name: 'Team B', stadium: 'Stadium B', logo: mainLogo.src },
    { name: 'Team C', stadium: 'Stadium C', logo: mainLogo.src },
    { name: 'Team D', stadium: 'Stadium D', logo: mainLogo.src },
    { name: 'Team E', stadium: 'Stadium E', logo: mainLogo.src },
    { name: 'Team F', stadium: 'Stadium F', logo: mainLogo.src },
    { name: 'Team G', stadium: 'Stadium G', logo: mainLogo.src },
    { name: 'Team H', stadium: 'Stadium H', logo: mainLogo.src },
    { name: 'Team I', stadium: 'Stadium I', logo: mainLogo.src },
    { name: 'Team J', stadium: 'Stadium J', logo: mainLogo.src },
    { name: 'Team K', stadium: 'Stadium K', logo: mainLogo.src },
    { name: 'Team L', stadium: 'Stadium L', logo: mainLogo.src },
    { name: 'Team M', stadium: 'Stadium M', logo: mainLogo.src },
    { name: 'Team N', stadium: 'Stadium N', logo: mainLogo.src },
    { name: 'Team O', stadium: 'Stadium O', logo: mainLogo.src },
    { name: 'Team P', stadium: 'Stadium P', logo: mainLogo.src },
    { name: 'Team Q', stadium: 'Stadium Q', logo: mainLogo.src },
    { name: 'Team R', stadium: 'Stadium R', logo: mainLogo.src },
    { name: 'Team S', stadium: 'Stadium S', logo: mainLogo.src },
    { name: 'Team T', stadium: 'Stadium T', logo: mainLogo.src },
    { name: 'Team U', stadium: 'Stadium U', logo: mainLogo.src },
    { name: 'Team V', stadium: 'Stadium V', logo: mainLogo.src },
    { name: 'Team W', stadium: 'Stadium W', logo: mainLogo.src },
    { name: 'Team X', stadium: 'Stadium X', logo: mainLogo.src },
    { name: 'Team Y', stadium: 'Stadium Y', logo: mainLogo.src },
    { name: 'Team Z', stadium: 'Stadium Z', logo: mainLogo.src },
  ];
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
        {teams.map((team, index) => (
          <div key={index} className="flex flex-col bg-blue-500 w-72 h-72 justify-end rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url(${team.logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex flex-row gap-4 bg-red-100 bg-opacity-75 p-4 bg-[#1b1e08]">
              <div className="content-center">
                <Avatar>
                  <AvatarImage src={team.logo} />
                  <AvatarFallback>{team.name}</AvatarFallback>
                </Avatar>
              </div>
              <div className="gap-8 text-white">
              <h2 className="text-lg font-semibold">{team.name}</h2>
              <p className="text-sm">{team.stadium}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}