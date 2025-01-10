import mainLogo from "@/../public/main.jpg";


export default function Video() {

  const videos = [
    { teamName: 'Team A', scoreA: 0, scoreB: 3, teamB: 'Team B', logo: mainLogo.src, week: 1 },
    { teamName: 'Team C', scoreA: 1, scoreB: 1, teamB: 'Team D', logo: mainLogo.src, week: 2 },
    { teamName: 'Team E', scoreA: 2, scoreB: 2, teamB: 'Team F', logo: mainLogo.src, week: 3 },
    { teamName: 'Team G', scoreA: 3, scoreB: 3, teamB: 'Team H', logo: mainLogo.src, week: 4 },
    { teamName: 'Team I', scoreA: 4, scoreB: 4, teamB: 'Team J', logo: mainLogo.src, week: 5 },
    { teamName: 'Team K', scoreA: 5, scoreB: 5, teamB: 'Team L', logo: mainLogo.src, week: 6 },
    { teamName: 'Team M', scoreA: 6, scoreB: 6, teamB: 'Team N', logo: mainLogo.src, week: 7 },
    { teamName: 'Team O', scoreA: 7, scoreB: 7, teamB: 'Team P', logo: mainLogo.src, week: 8 },
    { teamName: 'Team Q', scoreA: 8, scoreB: 8, teamB: 'Team R', logo: mainLogo.src, week: 9 },
    { teamName: 'Team S', scoreA: 9, scoreB: 9, teamB: 'Team T', logo: mainLogo.src, week: 10 },
    { teamName: 'Team U', scoreA: 10, scoreB: 10, teamB: 'Team V', logo: mainLogo.src, week: 11 },
    { teamName: 'Team W', scoreA: 11, scoreB: 11, teamB: 'Team X', logo: mainLogo.src, week: 12 },
    { teamName: 'Team Y', scoreA: 12, scoreB: 12, teamB: 'Team Z', logo: mainLogo.src, week: 13 },
  ];
    return  (
      <div className="container mx-auto py-10">
        <div className="flex w-full bg-black p-2 rounded">
          <div className="w-1 h-6 bg-white rounded-full"></div>
          <span className="text-l font-bold pl-2 text-center uppercase  border-white text-white">Video</span>
        </div>
        
        <div className="flex flex-row gap-8 flex-wrap justify-center py-4">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col bg-blue-500 w-72 h-72 justify-end rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url(${video.logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="flex flex-row gap-4 bg-red-100 bg-opacity-75 p-4 bg-[#1b1e08]">
              <div className="gap-8 text-white">
                <span className="text-lg font-semibold">
                  Highlight: {video.teamName} ({video.scoreA} - {video.scoreB}) {video.teamB} | CPL-Week {video.week}
                </span>
              </div>
              </div>
            </div>))}
        </div>
    </div>
    );
   
}