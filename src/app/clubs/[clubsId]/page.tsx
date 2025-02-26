import teamCover from "@/../public/club/astonCover.jpg";
import teamImg from "@/../public/club/astonvila.jpg";
import Image from 'next/image';
import player from '@/../public/club/player.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/data/table/data-table";
import { columns as fixturesColumns, Fixtres } from "../../fixtures/columns";
import { Results, columns as resultsColumns } from "../../results/columns";

async function getResultData(): Promise<Results[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      teamvs: { teamA: "Team A", logoA: player.src, teamB: "Team B", logoB: player.src, resultA: 2, resultB: 1 },
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
    teamvs: { teamA: "Team C", logoA: player.src, teamB: "Team D", logoB: player.src, resultA: 3, resultB: 2 },
    email: "example2@example.com",
    league: "Champions League",
    date: "2023-10-02",
    stadium: "Another Stadium",
    broadcast: "Another Broadcast Channel"
  },
  {
    id: "728ed531",
    amount: 200,
    teamvs: { teamA: "Team E", logoA: player.src, teamB: "Team F", logoB: player.src, resultA: 1, resultB: 1 },
    email: "example3@example.com",
    league: "Europa League",
    date: "2023-10-03",
    stadium: "Third Stadium",
    broadcast: "Third Broadcast Channel"
  },
  ]
}

async function getData(): Promise<Fixtres[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      teamvs: { teamA: "Team A", logoA: player.src, teamB: "Team B", logoB: player.src },
      email: "m@example.com",
      league: "NBA",
      date: "2022-01-01 12:00 PM",
      stadium: "Stadium A",
      broadcast: "ABC"
    },
    {
      id: "728ed52g",
      amount: 150,
      teamvs: { teamA: "Team C", logoA: player.src, teamB: "Team D", logoB: player.src },
      email: "n@example.com",
      league: "EPL",
      date: "2022-02-01 03:00 PM",
      stadium: "Stadium B",
      broadcast: "NBC"
    },
    {
      id: "728ed52h",
      amount: 200,
      teamvs: { teamA: "Team E", logoA: player.src, teamB: "Team F", logoB: player.src },
      email: "o@example.com",
      league: "La Liga",
      date: "2022-03-01 05:00 PM",
      stadium: "Stadium C",
      broadcast: "ESPN"
    },
    {
      id: "728ed52i",
      amount: 250,
      teamvs: { teamA: "Team G", logoA: player.src, teamB: "Team H", logoB: player.src },
      email: "p@example.com",
      league: "Serie A",
      date: "2022-04-01 07:00 PM",
      stadium: "Stadium D",
      broadcast: "Fox Sports"
    }
  ]
}
const Overview = () => {
  return (
    <div className="bg-white mt-[-10px] pt-4">
      <h1>Overview</h1>
    </div>
  );
}
const Players = () => {
  return (
    <div className="bg-white mt-[-10px] p-4 flex flex-row gap-4 justify-center">
      <div className="flex flex-col bg-white w-72 rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <div className="basis-3/5 bg-red-100 flex flex-row">
          <div className="basis-1/3 bg-green-100 flex flex-col justify-around p-2">
            <div className="flex flex-col">
              <span className="text-xs">Appearances</span>
              <span className="text-2xl">2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">Clean sheets</span>
              <span className="text-2xl">1</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">Saves</span>
              <span className="text-2xl">2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">Goals Concesed</span>
              <span className="text-2xl">3</span>
            </div>
          </div>
         <div className="bg-[#490125] w-full">
            <Image src={player} alt="logo" width={50} height={50} className="w-full h-full" />
         </div>
        </div>
        <div className="basis-2/5 bg-blue-100 flex flex-col p-2.5 pt-0">
          <div className="flex flex-col items-start p-2 gap-2">
            <span className="text-lg">Marcus</span>
            <span className="text-4xl">Bettinelli</span>
            <span className="text-sm">13 GoalKeeper</span>
          </div>
          <div className="flex items-center justify-between p-2">
            <Image src={player} alt="logo" width={50} height={50}  className="w-6 h-6"/>
            <div>View Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}
const  Fixtures = async () => {
  const data = await getData();
  return (
    <div className="bg-white mt-[-10px] p-4">
      <DataTable 
        columns={fixturesColumns} 
        data={data}
        showHeader={false} />

    </div>
  );
}
const Result = async () => {
  const resultData = await getResultData();
  return (
    <div className="bg-white mt-[-10px] p-4">
      <DataTable 
        columns={resultsColumns} 
        data={resultData}
        showHeader={false} />

    </div>
  );
}
const Trophy = () => {
  return (
    <div className="bg-white mt-[-10px] p-4">
      <h1>News</h1>
    </div>
  );
}
export default function Page() {
  const tabs = [
    { label: 'overview', content: <Overview /> },
    { label: 'players', content: <Players /> },
    { label: 'fixtures', content: <Fixtures /> },
    { label: 'results', content: <Result /> },
    { label: 'trophy', content: <Trophy /> },
  ];

  return (
    <main className="text-center ">
      <div className="flex flex-col-reverse md:flex-row bg-[#490125] md:gap-4 items-center items-center justify-between p-4 bg-[#490125] w-full ">
        <div className="flex flex-row bg-opacity-75 p-4 gap-2 md:gap-10 self-start md:self-center">
          <div className="content-center">
            <Image src={teamCover} alt="logo" width={50} height={50} className="md:w-[100px] md:h-[100px] bg-white" />
          </div>
          <div className="gap-4 text-white flex flex-col">
            <h1 className="text-2xl md:text-4xl font-semibold">Aston Villa</h1>
            <p className="text-md md:text-xl text-left">Villa Park, Birmingham</p>
          </div>
        </div>
        <Image src={teamImg} alt="logo" className="w-full h-40 md:w-[400px] md:h-[300px] bg-white rounded-lg" />
      
      </div>
        <Tabs defaultValue="overview" className="bg-[#490125]">
          <TabsList className="flex flex-row gap-4 bg-[#490125] justify-start px-4 md:px-8">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.label} className="bg-white p-2 px-4 data-[state=active]:font-bold hover:font-bold rounded-b-none rounded-t capitalize">{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          
            <TabsContent value="overview">
              <Overview />
            </TabsContent>
            <TabsContent value="players">
              <Players />
            </TabsContent>
            <TabsContent value="fixtures">
              <Fixtures />
            </TabsContent>
            <TabsContent value="results">
              <Result />
            </TabsContent>
            <TabsContent value="trophy">
              <Trophy />
            </TabsContent>
        </Tabs>
    </main>
  );
}