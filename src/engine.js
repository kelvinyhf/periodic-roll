export const ELEMENTS = {

  // Tier 1 Elements
  H: { symbol: "H", name: "Hydrogen", chance: 2, tier: 1, isMetal: false, valency: 1 },
  O: { symbol: "O", name: "Oxygen", chance: 4, tier: 1, isMetal: false, charge: -2, valency: 2 },
  Al: { symbol: "Al", name: "Aluminum", chance: 12, tier: 1, isMetal: true, charge: 3, valency: 3 },
  Fe: { symbol: "Fe", name: "Iron", chance: 20, tier: 1, isMetal: true, charge: 2, valency: 2 },

  // Tier 2 Elements
  Ca: { symbol: "Ca", name: "Calcium", chance: 50, tier: 2, isMetal: true, charge: 2, valency: 2 },
  Na: { symbol: "Na", name: "Sodium", chance: 2, tier: 2, isMetal: true, charge: 1, valency: 1 },
  K: { symbol: "K", name: "Potassium", chance: 120, tier: 2, isMetal: true, charge: 1, valency: 1 },
  Mg: { symbol: "Mg", name: "Magnesium", chance: 200, tier: 2, isMetal: true, charge: 2, valency: 2 },
  Cl: { symbol: "Cl", name: "Chlorine", chance: 2, tier: 2, isMetal: false, charge: -1, valency: 1 },
  C: { symbol: "C", name: "Carbon", chance: 500, tier: 2, isMetal: false, valency: 4 },

  // Tier 3 Elements
  Ti: { symbol: "Ti", name: "Titanium", chance: 1200, tier: 3, isMetal: true, charge: 4, valency: 4 },
  P: { symbol: "P", name: "Phosphorus", chance: 2500, tier: 3, isMetal: false, valency: 3 },
  S: { symbol: "S", name: "Sulfur", chance: 4000, tier: 3, isMetal: false, charge: -2, valency: 2 },
  Zn: { symbol: "Zn", name: "Zinc", chance: 6500, tier: 3, isMetal: true, charge: 2, valency: 2 },
  Cu: { symbol: "Cu", name: "Copper", chance: 9000, tier: 3, isMetal: true, charge: 2, valency: 2 },
  N: { symbol: "N", name: "Nitrogen", chance: 12000, tier: 3, isMetal: false, valency: 3 },

  // Tier 4 Elements
  Pb: { symbol: "Pb", name: "Lead", chance: 25000, tier: 4, isMetal: true, charge: 2, valency: 2 },
  Sn: { symbol: "Sn", name: "Tin", chance: 40000, tier: 4, isMetal: true, charge: 2, valency: 4 },
  Li: { symbol: "Li", name: "Lithium", chance: 65000, tier: 4, isMetal: true, charge: 1, valency: 1 },
  Ag: { symbol: "Ag", name: "Silver", chance: 100000, tier: 4, isMetal: true, charge: 1, valency: 1 },

  // Tier 5 Elements
  U: { symbol: "U", name: "Uranium", chance: 250000, tier: 5, isMetal: true, charge: 4, valency: 6 },
  Hg: { symbol: "Hg", name: "Mercury", chance: 500000, tier: 5, isMetal: true, charge: 2, valency: 2 },
  Pt: { symbol: "Pt", name: "Platinum", chance: 1000000, tier: 5, isMetal: true, charge: 2, valency: 2 },
  Au: { symbol: "Au", name: "Gold", chance: 2500000, tier: 5, isMetal: true, charge: 1, valency: 1 },
  
  NaCl: { symbol: "NaCl", name: "Sodium Chloride" }

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

  craft(elements) {
    let hasMetal = false;
    let hasNonMetal = false;
    let totalCharge = 0;
    let totalValency = 0;
    let maxValency = 0;

    // Loop through all elements to get their charge or valency
    for (const [symbol, count] of Object.entries(elements)) {
      const element = ELEMENTS[symbol];
      if (element.isMetal) {
        hasMetal = true;
      } else {
        hasNonMetal = true;
      }

      // Add charge or valency
      if (element.charge !== undefined) {
        totalCharge += element.charge * count;
      }
      if (element.valency !== undefined) {
        totalValency += element.valency * count;
        if (element.valency > maxValency) maxValency = element.valency;
      }

    }

    // Check if it's a valid ionic/covalent compound
    const othersValency = totalValency - maxValency;
    if (
      (hasMetal && hasNonMetal && totalCharge === 0)
      ||
      (!hasMetal && hasNonMetal && totalValency >= 2 && totalValency % 2 === 0 && maxValency <= othersValency)
    ) {

      // Remove added elements
      for (const [symbol, count] of Object.entries(elements)) {
        this.stats.inventory[symbol] -= count;
        if (this.stats.inventory[symbol] === 0) delete this.stats.inventory[symbol];
      }

      // Add the compound
      const compound = Object.keys(elements).join("");
      if (!this.stats.inventory[compound]) this.stats.inventory[compound] = 0;
      this.stats.inventory[compound]++;

      return true;
    }

    return false;
  }
  
}