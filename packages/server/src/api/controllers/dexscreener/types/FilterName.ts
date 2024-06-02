const validFilters = [
  'minLiquidity',
  'minMarketCap',
  'maxPriceDip24h',
  'maxPriceDip6h',
  'maxPriceDip1h',
  'maxPriceDip5m',
] as const;

export const defaultFilters: FilterName[] = [
  'minLiquidity',
  'minMarketCap',
  'maxPriceDip24h',
  'maxPriceDip6h',
  'maxPriceDip1h',
  'maxPriceDip5m',
];

export type FilterName = (typeof validFilters)[number];
