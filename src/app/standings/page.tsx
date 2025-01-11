import Table from '../../components/Table';
import { getTeamsData } from '../../services/teamService';
import { ComboboxDemo } from "@/components/ui/combobox"

const columns = [
  { key: 'position', header: 'Pos' },
  { key: 'team', header: 'Club' },
  { key: 'played', header: 'Played' },
  { key: 'won', header: 'Won' },
  { key: 'drawn', header: 'Drawn' },
  { key: 'lost', header: 'Lost' },
  { key: 'gf', header: 'GF' },
  { key: 'ga', header: 'GA' },
  { key: 'gd', header: 'GD' },
  { key: 'points', header: 'Pts' },
  { key: 'lastFourMatches', header: 'Form' },
  { key: 'nextTeam', header: 'Next Team' },
];

function Page() {
  const data = getTeamsData();
  
  return (
    <div className='container mx-auto p-4'>
      <div className="flex w-full bg-black p-2 rounded">
        <div className="w-1 h-6 bg-white rounded-full"></div>
        <span className="text-l font-bold pl-2 text-center uppercase  border-white text-white">Standing</span>
      </div>
      <div className="py-4">
       <ComboboxDemo />
      </div>
      <Table 
        columns={columns} 
        data={data} 
        showHeader={true} 
        showBorder={false} />
    </div>
  );
}

export default Page;