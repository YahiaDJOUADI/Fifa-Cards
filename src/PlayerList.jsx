
import Player from "./Player";
import { players } from "./players";
export default () => {

  return (
    <div className="grid grid-cols-4 gap-8 p-6 bg-[#101820]">
      {players.length > 0 ? (
        players.map((player) => (
          <Player
            key={player.name}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageUrl={player.imageUrl}
            goals={player.goals}
            assists={player.assists}
            rating={player.rating}
          />
        ))
      ) : (
        <p className="text-white text-center text-xl font-bold">No players available.</p>
      )}
    </div>
  );
};


