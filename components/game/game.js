import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { ResetButton } from "./reset-button";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 my-auto mx-auto py-24 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
}
