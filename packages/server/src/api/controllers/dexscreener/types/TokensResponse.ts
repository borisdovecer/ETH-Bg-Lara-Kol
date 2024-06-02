import { Pair } from './Pair';

export type TokensResponse = {
  schemaVersion: string;
  pairs: Pair[] | null;
};
