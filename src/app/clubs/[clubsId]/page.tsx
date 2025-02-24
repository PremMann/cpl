import teamCover from "@/../public/club/astonCover.jpg";
import teamImg from "@/../public/club/astonvila.jpg";
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page({ params } : { params: { clubsId: number } }) {
  const tabs = [
    { label: 'overview', content: 'Overview' },
    { label: 'players', content: 'Players' },
    { label: 'matches', content: 'Matches' },
    { label: 'news', content: 'News' },
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
          <TabsList className="flex flex-row gap-4 bg-[#490125] justify-start">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.label} className="bg-white p-2 px-4 data-[state=active]:font-bold hover:font-bold rounded-b-none rounded-t">{tab.content}</TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.label} className="bg-white mt-[-4px]">{tab.content} {params.clubsId}</TabsContent>
          ))}
        </Tabs>
    </main>
  );
}