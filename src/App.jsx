import React, { useState, useRef } from "react";
import { Engine, ELEMENTS } from "./engine";
import Roll from "./components/Roll";

export default function App() {
  const engineRef = useRef(new Engine());
  const [stats, setStats] = useState({
    rolls: 0,
    luck: 1,
    inventory: {}
  });

  const [lastRollResult, setLastRollResult] = useState(null);

  function handleRoll() {
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
      <header className="fixed top-0 left-0 right-0 bg-slate-800 px-4 py-2 border-b border-slate-250 flex justify-center items-center gap-4">
        <h1 className="hidden" aria-hidden="true">Periodic Roll</h1>
      </header>

      <main className="py-16">
        <Roll />
      </main>

    </div>
  );
}
