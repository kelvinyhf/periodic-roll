import React, { useState, useRef } from "react";
import { Engine, ELEMENTS } from "./engine";
import Roll from "./components/Roll";
import Inventory from "./components/Inventory";

export default function App() {
  const engineRef = useRef(new Engine());
  const [stats, setStats] = useState({
    rolls: 0,
    luck: 1,
    inventory: {}
  });
  const [lastRollResult, setLastRollResult] = useState(null);
  const [currentPage, setCurrentPage] = useState("roll");
  const rollSfx = useRef(new Audio("/sfxs/roll.mp3"));

  function handleRoll() {

    // Play roll sfx
    rollSfx.current.currentTime = 0;
    rollSfx.current.play();

    // Roll once, set and display the result
    const result = engineRef.current.roll();
    setStats({
      rolls: engineRef.current.stats.rolls,
      luck: engineRef.current.stats.luck,
      inventory: { ...engineRef.current.stats.inventory }
    });
    setLastRollResult(result);

  }

  return (
    <div className="min-h-svh flex flex-col justify-between items-center">
      
      {/* Stats Display */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900 p-4 border-b-2 border-slate-300 flex justify-center items-center gap-16">
        <h1 className="hidden" aria-hidden="true">Periodic Roll</h1>
        <span className="bg-blue-600/40 border-b border-blue-200 min-w-16 px-2 py-1 font-semibold text-sm text-right">{ stats.rolls }</span>
        <span className="bg-yellow-600/40 border-b border-yellow-200 min-w-16 px-2 py-1 font-semibold text-sm text-right">{ stats.luck }</span>
      </header>

      {/* Main Content */}
      <main className="w-full px-12 pt-24 pb-28 flex-1 flex flex-col">
        {currentPage === "roll" && <Roll handleRoll={handleRoll} lastRollResult={lastRollResult} />}
        {currentPage === "inventory" && <Inventory inventory={stats.inventory} />}
      </main>
      
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 pt-3 pb-6 border-t border-slate-300 flex justify-center items-center gap-16">
        <button onClick={() => setCurrentPage("roll")} className={`${currentPage === "roll" && "font-semibold bg-slate-100/5"} px-4 py-1 border-b border-white hover:bg-slate-100/10 active:bg-slate-100/20`}>
          Roll
        </button>
        <button onClick={() => setCurrentPage("inventory")} className={`${currentPage === "inventory" && "font-semibold bg-slate-100/5"} px-4 py-1 border-b border-white hover:bg-slate-100/10 active:bg-slate-100/20`}>
          Inventory
        </button>
      </nav>

    </div>
  );
}
