import { Results, columns } from "./columns";
import mainLogo from "@/../public/main.jpg"
import { ComboboxDemo } from "@/components/ui/combobox"
import { DataTable } from "@/data/table/data-table";



   async function getData(): Promise<Results[]> {
    return [
      {
        id: "728ed52f",
        amount: 100,
        teamvs: { teamA: "Team A", logoA: mainLogo.src, teamB: "Team B", logoB: mainLogo.src, resultA: 2, resultB: 1 },
        email: "example@example.com",
        league: "Premier League",
        date: "2023-10-01",
        stadium: "Stadium Name",
        broadcast: "Broadcast Channel"
      }
    ,
    {
      id: "728ed530",
      amount: 150,
      teamvs: { teamA: "Team C", logoA: mainLogo.src, teamB: "Team D", logoB: mainLogo.src, resultA: 3, resultB: 2 },
      email: "example2@example.com",
      league: "Champions League",
      date: "2023-10-02",
      stadium: "Another Stadium",
      broadcast: "Another Broadcast Channel"
    },
    {
      id: "728ed531",
      amount: 200,
      teamvs: { teamA: "Team E", logoA: mainLogo.src, teamB: "Team F", logoB: mainLogo.src, resultA: 1, resultB: 1 },
      email: "example3@example.com",
      league: "Europa League",
      date: "2023-10-03",
      stadium: "Third Stadium",
      broadcast: "Third Broadcast Channel"
    },
    {
      id: "728ed532",
      amount: 250,
      teamvs: { teamA: "Team G", logoA: mainLogo.src, teamB: "Team H", logoB: mainLogo.src, resultA: 2, resultB: 2 },
      email: "example4@example.com",
      league: "Premier League",
      date: "2023-10-04",
      stadium: "Fourth Stadium",
      broadcast: "Fourth Broadcast Channel"
    },
    {
      id: "728ed533",
      amount: 300,
      teamvs: { teamA: "Team I", logoA: mainLogo.src, teamB: "Team J", logoB: mainLogo.src, resultA: 0, resultB: 1 },
      email: "example5@example.com",
      league: "Champions League",
      date: "2023-10-05",
      stadium: "Fifth Stadium",
      broadcast: "Fifth Broadcast Channel"
    },
    {
      id: "728ed534",
      amount: 350,
      teamvs: { teamA: "Team K", logoA: mainLogo.src, teamB: "Team L", logoB: mainLogo.src, resultA: 3, resultB: 0 },
      email: "example6@example.com",
      league: "Europa League",
      date: "2023-10-06",
      stadium: "Sixth Stadium",
      broadcast: "Sixth Broadcast Channel"
    },
    {
      id: "728ed535",
      amount: 400,
      teamvs: { teamA: "Team M", logoA: mainLogo.src, teamB: "Team N", logoB: mainLogo.src, resultA: 1, resultB: 3 },
      email: "example7@example.com",
      league: "Premier League",
      date: "2023-10-07",
      stadium: "Seventh Stadium",
      broadcast: "Seventh Broadcast Channel"
    },
    {
      id: "728ed536",
      amount: 450,
      teamvs: { teamA: "Team O", logoA: mainLogo.src, teamB: "Team P", logoB: mainLogo.src, resultA: 2, resultB: 4 },
      email: "example8@example.com",
      league: "Champions League",
      date: "2023-10-08",
      stadium: "Eighth Stadium",
      broadcast: "Eighth Broadcast Channel"
    },
    {
      id: "728ed537",
      amount: 500,
      teamvs: { teamA: "Team Q", logoA: mainLogo.src, teamB: "Team R", logoB: mainLogo.src, resultA: 0, resultB: 0 },
      email: "example9@example.com",
      league: "Europa League",
      date: "2023-10-09",
      stadium: "Ninth Stadium",
      broadcast: "Ninth Broadcast Channel"
    },
    {
      id: "728ed538",
      amount: 550,
      teamvs: { teamA: "Team S", logoA: mainLogo.src, teamB: "Team T", logoB: mainLogo.src, resultA: 1, resultB: 2 },
      email: "example10@example.com",
      league: "Premier League",
      date: "2023-10-10",
      stadium: "Tenth Stadium",
      broadcast: "Tenth Broadcast Channel"
    },
    {
      id: "728ed539",
      amount: 600,
      teamvs: { teamA: "Team U", logoA: mainLogo.src, teamB: "Team V", logoB: mainLogo.src, resultA: 3, resultB: 3 },
      email: "example11@example.com",
      league: "Champions League",
      date: "2023-10-11",
      stadium: "Eleventh Stadium",
      broadcast: "Eleventh Broadcast Channel"
    },
    {
      id: "728ed540",
      amount: 650,
      teamvs: { teamA: "Team W", logoA: mainLogo.src, teamB: "Team X", logoB: mainLogo.src, resultA: 2, resultB: 0 },
      email: "example12@example.com",
      league: "Europa League",
      date: "2023-10-12",
      stadium: "Twelfth Stadium",
      broadcast: "Twelfth Broadcast Channel"
    },
    {
      id: "728ed541",
      amount: 700,
      teamvs: { teamA: "Team Y", logoA: mainLogo.src, teamB: "Team Z", logoB: mainLogo.src, resultA: 1, resultB: 4 },
      email: "example13@example.com",
      league: "Premier League",
      date: "2023-10-13",
      stadium: "Thirteenth Stadium",
      broadcast: "Thirteenth Broadcast Channel"
    }
    ];
}

export default async function Page() {
  const data = await getData()
  return (
    <div className="container mx-auto py-4">
      <div className="flex w-full bg-black p-2 rounded">
        <div className="w-1 h-6 bg-white rounded-full"></div>
        <span className="text-l font-bold pl-2 text-center uppercase border-white text-white">Match Fixture</span>
      </div>
      <div className='py-4'>
        <ComboboxDemo />
      </div>
      
      <DataTable 
        columns={columns} 
        data={data}
        showHeader={false} />
    </div>
  );
}