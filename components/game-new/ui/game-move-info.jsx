import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
        Ход: <GameSymbol symbol={currentMove} />
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий: <GameSymbol symbol={nextMove} />
      </div>
    </>
  );
}
