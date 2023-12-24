export const TENORS = [
  { tenorId: 1, tenor: "1w", tenorDays: 7 },
  { tenorId: 2, tenor: "1m", tenorDays: 30 },
  { tenorId: 3, tenor: "2m", tenorDays: 60 },
  { tenorId: 4, tenor: "3m", tenorDays: 90 },
  { tenorId: 5, tenor: "6m", tenorDays: 180 },
  { tenorId: 6, tenor: "9m", tenorDays: 270 },
  { tenorId: 7, tenor: "1y", tenorDays: 365 },
];

export const MARKETS = ["Fx-Market", "MMK", "FRWD"];

export const EMBEDED_MARKETS = [
  {
    listName: "FX",
    list: ["Spot", "Forward", "Swap"],
  },
  {
    listName: "MMK",
    list: ["Deposit/Loan", "FRA"],
  },
];
