import { ELEMENTS } from "../engine";

export default function Inventory({ inventory }) {
  return (
    <section className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-between items-center gap-8">
      <div className="w-full flex flex-col items-start gap-2">
        <h2 className="text-4xl font-bold">Inventory</h2>
        <p>Always keep an eye on your inventory!</p>
      </div>

      <ul className="w-full flex-1 flex flex-col items-center gap-6">
        {Object.entries(inventory).map(([symbol, count]) => {
          const elementData = ELEMENTS[symbol];
          return (
            <li className="w-full border border-white px-4 py-2 flex justify-between items-center">
              <span>{ elementData.name } ({ symbol })</span>
              <span>x{ count }</span>
            </li>
          );
        })}
      </ul>

    </section>
  );
}
