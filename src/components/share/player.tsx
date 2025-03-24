import React from 'react';

interface PlayerProps {
    appearances: number;
    cleanSheets: number;
    saves: number;
    goalsConceded: number;
    firstName: string;
    lastName: string;
    position: string;
    jerseyNumber: number;
    profileImage?: string;
}

const PlayerCard: React.FC<PlayerProps> = ({
    appearances,
    cleanSheets,
    saves,
    goalsConceded,
    firstName,
    lastName,
    position,
    jerseyNumber,
    profileImage,
}) => {
    return (
        <div className="flex flex-col bg-white w-72 rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div className="basis-3/5 bg-red-100 flex flex-row">
                <div className="basis-1/3 bg-green-100 flex flex-col justify-around p-2">
                    <div className="flex flex-col">
                        <span className="text-xs">Appearances</span>
                        <span className="text-2xl">{appearances}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs">Clean sheets</span>
                        <span className="text-2xl">{cleanSheets}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs">Saves</span>
                        <span className="text-2xl">{saves}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs">Goals Conceded</span>
                        <span className="text-2xl">{goalsConceded}</span>
                    </div>
                </div>
                <div className="bg-[#490125] w-full">
                    {profileImage && (
                        <img src={profileImage} alt={`${firstName} ${lastName}`} className="w-full h-full" />
                    )}
                </div>
            </div>
            <div className="basis-2/5 bg-blue-100 flex flex-col p-2.5 pt-0">
                <div className="flex flex-col items-start p-2 gap-2">
                    <span className="text-lg">{firstName}</span>
                    <span className="text-4xl">{lastName}</span>
                    <span className="text-sm">{jerseyNumber} {position}</span>
                </div>
                <div className="flex items-center justify-between p-2">
                    <div>View Profile</div>
                </div>
            </div>
        </div>
    );
};

interface PlayerDetail {
    appearances: number;
    cleanSheets: number;
    saves: number;
    goalsConceded: number;
    firstName: string;
    lastName: string;
    position: string;
    jerseyNumber: number;
    profileImage?: string;
}

const Players: React.FC<{ playerDetail: PlayerDetail }> = ({ playerDetail }) => {
    return (
        // <div className="bg-white mt-[-10px] p-4 flex flex-row gap-4 justify-center">
            <PlayerCard
                appearances={playerDetail.appearances}
                cleanSheets={playerDetail.cleanSheets}
                saves={playerDetail.saves}
                goalsConceded={playerDetail.goalsConceded}
                firstName={playerDetail.firstName}
                lastName={playerDetail.lastName}
                position={playerDetail.position}
                jerseyNumber={playerDetail.jerseyNumber}
                profileImage={playerDetail.profileImage}
                />
        // </div>
    );
};

export default Players;