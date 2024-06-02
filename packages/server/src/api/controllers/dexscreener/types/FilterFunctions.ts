import { FiltrationOptions } from './FiltrationOptions';
import { Pair } from './Pair';

export type FilterFunction = (token: Pair, options: FiltrationOptions) => boolean;
