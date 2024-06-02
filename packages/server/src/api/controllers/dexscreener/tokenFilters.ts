import { FilterFunction } from './types/FilterFunctions';
import { FilterName } from './types/FilterName';
import { FiltrationOptions } from './types/FiltrationOptions';
import { Pair } from './types/Pair';

export const filterFunctions: Record<FilterName, FilterFunction> = {
  minLiquidity: (token: Pair, options: FiltrationOptions) => (token.liquidity?.usd ?? 0) >= options.minLiquidity,
  minMarketCap: (token: Pair, options: FiltrationOptions) => (token.fdv ?? 0) >= options.minMarketCap,
  maxPriceDip24h: (token: Pair, options: FiltrationOptions) => (token.priceChange.h24 ?? 0) >= options.maxPriceDip24h,
  maxPriceDip6h: (token: Pair, options: FiltrationOptions) => (token.priceChange.h6 ?? 0) >= options.maxPriceDip6h,
  maxPriceDip1h: (token: Pair, options: FiltrationOptions) => (token.priceChange.h1 ?? 0) >= options.maxPriceDip1h,
  maxPriceDip5m: (token: Pair, options: FiltrationOptions) => (token.priceChange.m5 ?? 0) >= options.maxPriceDip5m,
};
