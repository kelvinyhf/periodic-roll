export default function Roll({ handleRoll, lastRollResult }) {
  return (
    <section className="w-full flex-1 flex flex-col justify-between items-center">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-4xl font-bold">Roll</h2>
        <p>Click the roll button below!</p>
      </div>

      <div key={Date.now()} className="flex flex-col items-center gap-2 animate-roll-shift">
        <span className="text-lg font-semibold">{ lastRollResult?.data?.name || "Nothing" } ({ lastRollResult?.result || "N/A" })</span>
        <span>1 in { lastRollResult?.data?.chance ? Math.floor(10000 / lastRollResult.data.chance) : "1" }</span>
      </div>
      
      <button onClick={handleRoll} className="w-full px-4 py-2 text-lg font-medium border-2 border-white hover:bg-slate-100/15 active:bg-slate-100/30">Roll</button>
    </section>
  );
}
