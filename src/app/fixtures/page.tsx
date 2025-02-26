import { Fixtres, columns } from "./columns"
import { DataTable } from "./data-table"
import mainLogo from "@/../public/main.jpg"
import { ComboboxDemo } from "@/components/ui/combobox";

async function getData(): Promise<Fixtres[]> {
  
  return [
    {
      id: "728ed52f",
      amount: 100,
      teamvs: { teamA: "Team A", logoA: mainLogo.src, teamB: "Team B", logoB: mainLogo.src },
      email: "m@example.com",
      league: "NBA",
      date: "2022-01-01 12:00 PM",
      stadium: "Stadium A",
      broadcast: "ABC"
    },
    {
      id: "728ed52g",
      amount: 200,
      teamvs: { teamA: "Team C", logoA: mainLogo.src, teamB: "Team D", logoB: mainLogo.src },
      email: "n@example.com",
      league: "NBA",
      date: "2022-01-01 12:00 PM",
      stadium: "Stadium B",
      broadcast: "ESPN"
    }, 
  {
    id: "728ed52h",
    amount: 150,
    teamvs: { teamA: "Team E", logoA: mainLogo.src, teamB: "Team F", logoB: mainLogo.src },
    email: "o@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium C",
    broadcast: "NBC"
  },
  {
    id: "728ed52i",
    amount: 250,
    teamvs: { teamA: "Team G", logoA: mainLogo.src, teamB: "Team H", logoB: mainLogo.src },
    email: "p@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium D",
    broadcast: "CBS"
  },
  {
    id: "728ed52j",
    amount: 300,
    teamvs: { teamA: "Team I", logoA: mainLogo.src, teamB: "Team J", logoB: mainLogo.src },
    email: "q@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium E",
    broadcast: "FOX"
  },
  {
    id: "728ed52k",
    amount: 350,
    teamvs: { teamA: "Team K", logoA: mainLogo.src, teamB: "Team L", logoB: mainLogo.src },
    email: "r@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium F",
    broadcast: "TNT"
  },
  {
    id: "728ed52l",
    amount: 400,
    teamvs: { teamA: "Team M", logoA: mainLogo.src, teamB: "Team N", logoB: mainLogo.src },
    email: "s@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium G",
    broadcast: "NBC"
  },
  {
    id: "728ed52m",
    amount: 450,
    teamvs: { teamA: "Team O", logoA: mainLogo.src, teamB: "Team P", logoB: mainLogo.src },
    email: "t@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium H",
    broadcast: "CBS"
  },
  {
    id: "728ed52n",
    amount: 500,
    teamvs: { teamA: "Team Q", logoA: mainLogo.src, teamB: "Team R", logoB: mainLogo.src },
    email: "u@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium I",
    broadcast: "ABC"
  },
  {
    id: "728ed52o",
    amount: 550,
    teamvs: { teamA: "Team S", logoA: mainLogo.src, teamB: "Team T", logoB: mainLogo.src },
    email: "v@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium J",
    broadcast: "ESPN"
  },
  {
    id: "728ed52p",
    amount: 600,
    teamvs: { teamA: "Team U", logoA: mainLogo.src, teamB: "Team V", logoB: mainLogo.src },
    email: "w@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium K",
    broadcast: "TNT"
  },
  {
    id: "728ed52q",
    amount: 650,
    teamvs: { teamA: "Team W", logoA: mainLogo.src, teamB: "Team X", logoB: mainLogo.src },
    email: "x@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium L",
    broadcast: "FOX"
  },
  {
    id: "728ed52r",
    amount: 700,
    teamvs: { teamA: "Team Y", logoA: mainLogo.src, teamB: "Team Z", logoB: mainLogo.src },
    email: "y@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium M",
    broadcast: "NBC"
  },
  {
    id: "728ed52s",
    amount: 750,
    teamvs: { teamA: "Team AA", logoA: mainLogo.src, teamB: "Team BB", logoB: mainLogo.src },
    email: "z@example.com",
    league: "NBA",
    date: "2022-01-01 12:00 PM",
    stadium: "Stadium N",
    broadcast: "CBS"
  }
  ]
}

export default async function Page() {

  const data = await getData()
 
  return (
    <div className="container mx-auto py-4">
       <div className="flex w-full bg-black p-2 rounded">
        <div className="w-1 h-6 bg-white rounded-full"></div>
        <span className="text-l font-bold pl-2 text-center uppercase  border-white text-white">Match Fixture</span>
      </div>
      <div className='py-4'>
        <ComboboxDemo />
      </div>
      
      <DataTable 
        columns={columns} 
        data={data}
        showHeader={false} />
    </div>
  )

}