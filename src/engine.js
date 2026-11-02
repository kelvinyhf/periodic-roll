export const ELEMENTS = {
  H: { symbol: "H", name: "Hydrogen", chance: 5000, tier: 1 },
  O: { symbol: "O", name: "Oxygen", chance: 3000, tier: 1 },
  C: { symbol: "C", name: "Carbon", chance: 2000, tier: 1 },
};

export class Engine {
  constructor() {
    this.stats = {
      rolls: 0,
      luck: 1,
      inventory: {}
    };
  }
  
  getFinalChance(chance, tier) {
    const multiplier = Math.pow(this.stats.luck, tier);
    return chance * multiplier;
  }
  
  roll() {
    this.stats.rolls++;
    
    // Get elements pool
    const entries = Object.entries(ELEMENTS);
    const pool = entries.map(([symbol, data]) => ({
      symbol,
      chance: this.getFinalChance(data.chance, data.tier)
    }));
    
    // Get total chance and random value for selecting an element
    const totalChance = pool.reduce((sum, el) => sum + el.chance, 0);
    let randomVal = Math.random() * totalChance;
    let selectedElement = entries[0][0];
    
    // Get the element
    for (const el of pool) {
      if (randomVal < el.chance) {
        selectedElement = el.symbol;
        break;
      }
      randomVal -= el.chance;
    }
    
    // Add the selected element to inventory
    if (!this.stats.inventory[selectedElement]) {
      this.stats.inventory[selectedElement] = 0;
    }
    this.stats.inventory[selectedElement]++;
    
    // Return values for rendering the result
    return {
      result: selectedElement,
      data: ELEMENTS[selectedElement]
    };
  }
  
}
