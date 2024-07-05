import { PLAYERS } from "./constants";
import { GameInfo } from "./ui/game-info";
import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameLayout } from "./ui/game-layout";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
      }
      playersList={PLAYERS.map((player, index) => (
        <PlayerInfo
          key={player.id}
          avatar={player.avatar}
          name={player.name}
          rating={player.rating}
          seconds={60}
          symbol={player.symbol}
          isRight={index % 2 === 1}
        />
      ))}
    />
  );
}