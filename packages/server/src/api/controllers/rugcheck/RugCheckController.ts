import axios from 'axios';
import { RugCheckResponse } from './types/RugCheckResponse';

async function rugCheckGivenToken(tokenAddress: string): Promise<boolean> {
  try {
    const rugCheckResponse: RugCheckResponse = (
      await axios.get(`https://api.rugcheck.xyz/v1/tokens/${tokenAddress}/report`)
    ).data;

    return (
      rugCheckResponse.token.freezeAuthority === null &&
      rugCheckResponse.token.mintAuthority === null &&
      rugCheckResponse.markets[0].lp.lpLockedPct > 90
    );
  } catch (error) {
    throw error;
  }
}
