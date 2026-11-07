export const ELEMENTS = {

  // Tier 1 Elements
  H: { symbol: "H", name: "Hydrogen", chance: 2, tier: 1 },
  O: { symbol: "O", name: "Oxygen", chance: 4, tier: 1 },
  Si: { symbol: "Si", name: "Silicon", chance: 8, tier: 1 },
  Al: { symbol: "Al", name: "Aluminum", chance: 12, tier: 1 },
  Fe: { symbol: "Fe", name: "Iron", chance: 20, tier: 1 },

  // Tier 2 Elements
  Ca: { symbol: "Ca", name: "Calcium", chance: 50, tier: 2 },
  Na: { symbol: "Na", name: "Sodium", chance: 80, tier: 2 },
  K: { symbol: "K", name: "Potassium", chance: 120, tier: 2 },
  Mg: { symbol: "Mg", name: "Magnesium", chance: 200, tier: 2 },
  Cl: { symbol: "Cl", name: "Chlorine", chance: 350, tier: 2 },
  C: { symbol: "C", name: "Carbon", chance: 500, tier: 2 },

  // Tier 3 Elements
  /* Ti: { symbol: "Ti", name: "Titanium", chance: 0, tier: 3 },
  P: { symbol: "P", name: "Phosphorus", chance: 0, tier: 3 },
  S: { symbol: "S", name: "Sulfur", chance: 0, tier: 3 },
  Zn: { symbol: "Zn", name: "Zinc", chance: 0, tier: 3 },
  Cu: { symbol: "Cu", name: "Copper", chance: 0, tier: 3 },
  N: { symbol: "N", name: "Nitrogen", chance: 0, tier: 3 },

  // Tier 4 Elements
  Pb: { symbol: "Pb", name: "Lead", chance: 0, tier: 4 },
  Sn: { symbol: "Sn", name: "Tin", chance: 0, tier: 4 },
  Li: { symbol: "Li", name: "Lithium", chance: 0, tier: 4 },
  Ag: { symbol: "Ag", name: "Silver", chance: 0, tier: 4 },

  // Tier 5 Elements
  U: { symbol: "U", name: "Uranium", chance: 0, tier: 5 },
  Hg: { symbol: "Hg", name: "Mercury", chance: 0, tier: 5 },
  Pt: { symbol: "Pt", name: "Platinum", chance: 0, tier: 5 },
  Au: { symbol: "Au", name: "Gold", chance: 0, tier: 5 } */
  
};

export class Engine {
  constructor() {
    this.stats = {
      rolls: 0,
      luck: 1,
      inventory: {}
    };
  }
  
  roll() {
    this.stats.rolls++;
    
    // Sort elements by chance
    const sortedElements = Object.values(ELEMENTS).sort(
      (a, b) => b.chance - a.chance
    );
    let pickedElement = ELEMENTS.H; // Default to hydrogen

    // Get the element
    for (const el of sortedElements) {
      const effectiveChance = Math.max(1, el.chance / this.stats.luck);
      if (Math.random() <= 1 / effectiveChance) {
        pickedElement = el;
        break;
      }
    }
    
    // Add the selected element to inventory
    const symbol = pickedElement.symbol;
    if (!this.stats.inventory[symbol]) this.stats.inventory[symbol] = 0;
    this.stats.inventory[symbol]++;
    
    // Return values for rendering the result
    return {
      result: symbol,
      data: pickedElement,
    };

  }
  
}
