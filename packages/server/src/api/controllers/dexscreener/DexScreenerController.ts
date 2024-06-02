import axios from 'axios';
import { TokensResponse } from './types/TokensResponse';
import { Pair } from './types/Pair';
import { FiltrationOptions, defaultFiltratonOptions } from './types/FiltrationOptions';
import { FilterName, defaultFilters } from './types/FilterName';
import { filterFunctions } from './tokenFilters';

async function fetchDexScreenerDataForGivenPairs(chain: string, pairs: string[]): Promise<TokensResponse> {
  try {
    return (await axios.get(`https://api.dexscreener.com/latest/dex/pairs/${chain}/${pairs}`)).data;
  } catch (error) {
    throw error;
  }
}

async function getFilteredResultsFromDexscreenerPairs(
  pairs: Pair[],
  filtrationOptions: FiltrationOptions = defaultFiltratonOptions,
  filterNames: FilterName[] = defaultFilters,
): Promise<Pair[]> {
  return pairs.filter((token: Pair) =>
    filterNames.every((filterName) => filterFunctions[filterName](token, filtrationOptions)),
  );
}

export async function getFilteredDexscreenerPairList(
  chain: string,
  pairs: string[],
  filtrationOptions?: FiltrationOptions,
  filterNames?: FilterName[],
) {
  const tokensResponse: TokensResponse = await fetchDexScreenerDataForGivenPairs(chain, pairs);
  const pairsData: Pair[] = tokensResponse.pairs ?? [];
  return await getFilteredResultsFromDexscreenerPairs(pairsData, filtrationOptions, filterNames);
}
