import Image from 'next/image';

interface Column {
  key: string;
  header: string;
}

interface TableProps {
  data: Record<string, any>[];
  columns: Column[];
  showHeader: boolean;
  showBorder?: boolean;
}

const matchIcons: Record<string, string> = {
  win: 'W',
  draw: 'D',
  loss: 'L',
};

export default function Table({ data, columns, showHeader, showBorder }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border-none text-center">
        {showHeader && (
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-2 text-centerm bg-gray-200 text-gray-600 font-semibold uppercase"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key} className={`text-center p-4 ${index % 2 !== 0 ? 'bg-[#eff4fd]' : ''}`}>
                  {column.key === 'team' ? (
                  <div className="flex items-center">
                    <Image src={row[column.key].logo}  alt={row[column.key].name} width={24} height={24} className="mr-2" />
                    {row[column.key].name}
                  </div>
                  ) : column.key === 'lastFourMatches' ? (
                  <div className="flex">
                    {row[column.key].map((result: string, i: number) => (
                      <span
                        key={i}
                        className={`flex text-xs text-white rounded-full m-1 p-1 w-7 h-7 self-center items-center justify-center ${
                          result === 'win' ? 'bg-[#00db74]' : result === 'draw' ? 'bg-[#c3b3c5]' : 'bg-[#e0005e]'
                        }`}
                      >
                        {matchIcons[result]}
                      </span>
                    ))}
                  </div>
                  ) : column.key === 'nextTeam' ? (
                    <div className="flex justify-center">
                    <Image src={row[column.key]} alt="Next Team" width={24} height={24} />
                  </div>
                  ) : (
                  row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}