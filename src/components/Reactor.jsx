import { useState } from "react";
import { ELEMENTS } from "../engine";

export default function Reactor({ handleCraft, inventory }) {
  const [added, setAdded] = useState({});

  function changeCount(symbol, count, maxCount) {
    setAdded(prev => {
      const prevCount = prev[symbol] || 0;
      const newCount = Math.max(0, Math.min(maxCount, prevCount + count));

      const updated = { ...prev };
      if (newCount === 0) {
        delete updated[symbol];
      } else {
        updated[symbol] = newCount;
      }

      return updated;
    });
  }

  return (
    <section className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-between items-center gap-8">
      <div className="w-full flex flex-col items-start gap-2">
        <h2 className="text-4xl font-bold">Reactor</h2>
        <p>Craft compounds and boost your stats!</p>
      </div>
      
      <button onClick={() => handleCraft(added)} className="w-full px-4 py-2 text-lg font-medium border border-white hover:bg-slate-100/15 active:bg-slate-100/30">Craft!</button>

      <ul className="w-full flex-1 flex flex-col items-center gap-6">
        {Object.entries(inventory).map(([symbol, count]) => {
          const elementData = ELEMENTS[symbol];
          const addedCount = added[symbol] || 0;

          return (
            <li className="w-full border border-white px-4 py-2 flex items-center gap-3">
              <div className="flex-1 flex justify-between items-center">
                <span>{ elementData.name } ({ symbol })</span>
                <span>x{ count }</span>
              </div>
              <span>|</span>
              <div className="flex items-center gap-2">
                <button onClick={() => changeCount(symbol, -1, count)} className="text-sm bg-slate-100/5 hover:bg-slate-100/10 active:bg-slate-100/15 px-1">-</button>
                <span className="text-sm font-semibold">{ addedCount }</span>
                <button onClick={() => changeCount(symbol, 1, count)} className="text-sm bg-slate-100/5 hover:bg-slate-100/10 active:bg-slate-100/15 px-1">+</button>
              </div>
            </li>
          )
        })}
      </ul>

    </section>
  );
}
