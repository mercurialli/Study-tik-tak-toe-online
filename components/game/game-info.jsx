import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";

const players = [ 
    {
      id: 1,
      name: 'Paromovevg', 
      rating: 1230, 
      avatar: avatarSrc1, 
      symbol: GAME_SYMBOLS.CROSS 
    },
    {
      id: 2,
      name: "VereIntedinglapotur",
      rating: 850,
      avatar: avatarSrc2,
      symbol: GAME_SYMBOLS.ZERO,
    },
    {
      id: 3,
      name: "Lara",
      rating: 1400,
      avatar: avatarSrc3,
      symbol: GAME_SYMBOLS.TRINGLE,
    },
    {
      id: 4,
      name: "Додик",
      rating: 760,
      avatar: avatarSrc4,
      symbol: GAME_SYMBOLS.SQUARE,
    },
]


export function GameInfo({ className, playersCount }) {
  return (
    <div 
    className={clsx(
      className,
      "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3"
    )}
  >
    {players.slice(0, playersCount).map((player, index) =>(
      <PlayerInfo key={player.id} playerInfo={player} isRight={ index % 2 === 1 }/>
      ))} 
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight }){
  return(
    <div className="flex gap-3 items-center">
    <div className={clsx("relative", isRight && "order-3")}>
    <Profile 
          className="w-44"
          name={playerInfo.name} 
          rating={playerInfo.rating}
          avatar={playerInfo.avatar} />

      <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
        <GameSymbol symbol={playerInfo.symbol} />
      </div>
    </div>
  <div className="h-6 w-px bg-slate-200" />
  <div className="text-slate-900 text-lg font-semibold">01:08 </div>
</div>
  );
}