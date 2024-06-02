export type FiltrationOptions = {
  minLiquidity: number;
  minMarketCap: number;
  maxPriceDip24h: number;
  maxPriceDip6h: number;
  maxPriceDip1h: number;
  maxPriceDip5m: number;
};

export const defaultFiltratonOptions: FiltrationOptions = {
  minLiquidity: 10000,
  minMarketCap: 500000,
  maxPriceDip24h: -90,
  maxPriceDip6h: -60,
  maxPriceDip1h: -999,
  maxPriceDip5m: -999,
};
