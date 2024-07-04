import { useState } from "react";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
  GameSymbol,
} from "../components/game";
import { Header } from "../components/header";
import { UiModal } from "../components/uikit/ui-modal";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 pb-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4 "
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="w-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        {/* <UiModal width="md">
          <UiModal.Header></UiModal.Header>
          <UiModal.Body></UiModal.Body>
          <UiModal.Footer></UiModal.Footer>
        </UiModal> */}
        <GameField
          playersCount={playersCount}
          className="mt-6 "
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
