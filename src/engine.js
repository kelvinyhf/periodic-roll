import ELEMENTS from "./database";

export class Engine {
  constructor() {
    this.stats = {
      rolls: 0,
      luck: 1,
      inventory: {}
    };
  }

  recalculateLuck() {
    let totalLuck = 1;

    for (const [symbol, count] of Object.entries(this.stats.inventory)) {
      const item = ELEMENTS[symbol];
      if (item && item.addLuck !== undefined) {
        totalLuck += item.addLuck * count;
      }
    }

    this.stats.luck = totalLuck;
  }
  
  roll() {
    this.stats.rolls++;
    
    // Sort elements by chance
    const sortedElements = Object.values(ELEMENTS)
      .filter(el => el.chance !== undefined)
      .sort((a, b) => b.chance - a.chance);
    let pickedElement = ELEMENTS.H;

    // Get the element
    const luckPower = Math.pow(this.stats.luck, 1.5);
    const weights = sortedElements.map(el => {
      const effectiveChance = Math.max(1, el.chance / luckPower);
      return Math.pow(1 / effectiveChance, 1.35);
    });
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let rollValue = Math.random() * totalWeight;

    for (let i = 0; i < sortedElements.length; i++) {
      rollValue -= weights[i];
      if (rollValue <= 0) {
        pickedElement = sortedElements[i];
        break;
      }
    }
    
    // Add the selected element to inventory
    const symbol = pickedElement.symbol;
    if (!this.stats.inventory[symbol]) this.stats.inventory[symbol] = 0;
    this.stats.inventory[symbol]++;
    this.recalculateLuck();
    
    // Return values for rendering the result
    return {
      result: symbol,
      data: pickedElement,
    };

  }

  craft(elements) {
    const elementOrder = Object.keys(ELEMENTS);
    const compound = Object.entries(elements)
      .filter(([, count]) => count > 0)
      .sort(([a], [b]) => elementOrder.indexOf(a) - elementOrder.indexOf(b))
      .map(([symbol, count]) => `${symbol}${count > 1 ? count : ""}`)
      .join("");

    const compoundData = ELEMENTS[compound];

    if (compoundData && "addLuck" in compoundData) {

      // Remove added elements
      for (const [symbol, count] of Object.entries(elements)) {
        this.stats.inventory[symbol] -= count;
        if (this.stats.inventory[symbol] === 0) delete this.stats.inventory[symbol];
      }

      // Add the compound
      if (!this.stats.inventory[compound]) this.stats.inventory[compound] = 0;
      this.stats.inventory[compound]++;
      this.recalculateLuck();

      return compound;
    }

    return null;
  }
  
}
