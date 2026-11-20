export default {

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

  // Compounds
  H2O: { symbol: "H2O", name: "Water", addLuck: 3 },
  HCl: { symbol: "HCl", name: "Hydrogen Chloride", addLuck: 3 },
  H2S: { symbol: "H2S", name: "Hydrogen Sulfide", addLuck: 5 },
  Fe2O3: { symbol: "Fe2O3", name: "Iron(III) Oxide", addLuck: 5 },
  Al2O3: { symbol: "Al2O3", name: "Aluminum Oxide", addLuck: 5 },
  NaCl: { symbol: "NaCl", name: "Sodium Chloride", addLuck: 4 },
  CO2: { symbol: "CO2", name: "Carbon Dioxide", addLuck: 4 },
  CH4: { symbol: "CH4", name: "Methane", addLuck: 6 },
  NaOH: { symbol: "NaOH", name: "Sodium Hydroxide", addLuck: 4 },
  CaO: { symbol: "CaO", name: "Calcium Oxide", addLuck: 3 },
  CaCl2: { symbol: "CaCl2", name: "Calcium Chloride", addLuck: 6 },
  MgO: { symbol: "MgO", name: "Magnesium Oxide", addLuck: 3 },
  MgCl2: { symbol: "MgCl2", name: "Magnesium Chloride", addLuck: 6 },
  KOH: { symbol: "KOH", name: "Potassium Hydroxide", addLuck: 4 },
  KCl: { symbol: "KCl", name: "Potassium Chloride", addLuck: 4 },
  NH3: { symbol: "NH3", name: "Ammonia", addLuck: 6 },
  SO2: { symbol: "SO2", name: "Sulfur Dioxide", addLuck: 5 },
  PH3: { symbol: "PH3", name: "Phosphine", addLuck: 6 },
  ZnO: { symbol: "ZnO", name: "Zinc Oxide", addLuck: 4 },
  CuO: { symbol: "CuO", name: "Copper(II) Oxide", addLuck: 4 },
  TiO2: { symbol: "TiO2", name: "Titanium Dioxide", addLuck: 5 },
  LiCl: { symbol: "LiCl", name: "Lithium Chloride", addLuck: 6 },
  AgCl: { symbol: "AgCl", name: "Silver Chloride", addLuck: 6 },
  PbO: { symbol: "PbO", name: "Lead(II) Oxide", addLuck: 5 },
  SnO2: { symbol: "SnO2", name: "Tin(IV) Oxide", addLuck: 6 },
  UO2: { symbol: "UO2", name: "Uranium Dioxide", addLuck: 7 },
  HgO: { symbol: "HgO", name: "Mercury(II) Oxide", addLuck: 6 },
  PtO2: { symbol: "PtO2", name: "Platinum Dioxide", addLuck: 7 },
  AuCl3: { symbol: "AuCl3", name: "Gold(III) Chloride", addLuck: 11 },

};
