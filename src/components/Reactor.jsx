import { useState, useRef, useEffect } from "react";
import ELEMENTS from "../database";

export default function Reactor({ handleCraft, inventory }) {
  const [added, setAdded] = useState({});
  const [craftedLabel, setCraftedLabel] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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

  function onCraftClick() {
    const craftedFormula = handleCraft(added);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (craftedFormula) {
      setAdded({});
      setCraftedLabel(`Crafted ${craftedFormula}!`);
    } else {
      setCraftedLabel("Invalid input!");
    }

    timeoutRef.current = setTimeout(() => {
      setCraftedLabel(null);
    }, 2000);
  }

  const elementEntries = Object.entries(inventory).filter(([symbol]) => {
    const elementData = ELEMENTS[symbol];
    return elementData && elementData.addLuck === undefined;
  });

  return (
    <section className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-between items-center gap-8">
      <div className="w-full flex flex-col items-start gap-2">
        <h2 className="text-4xl font-bold">Reactor</h2>
        <p>Craft compounds and boost your stats!</p>
      </div>
      
      <button onClick={onCraftClick} className="w-full px-4 py-2 text-lg font-medium border border-white hover:bg-slate-100/15 active:bg-slate-100/30">{ craftedLabel || "Craft!" }</button>

      <ul className="w-full flex-1 flex flex-col items-center gap-6">
        {elementEntries.map(([symbol, count]) => {
          const elementData = ELEMENTS[symbol];
          const addedCount = added[symbol] || 0;

          return (
            <li key={symbol} className="w-full border border-white px-4 py-2 flex items-center gap-3">
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
