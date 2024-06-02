export type RugCheckResponse = {
  mint: string;
  tokenProgram: string;
  token: {
    mintAuthority: string | null;
    supply: number;
    decimals: number;
    isInitialized: boolean;
    freezeAuthority: string | null;
  };
  token_extensions: any; // You can replace `any` with a more specific type if available
  tokenMeta: {
    name: string;
    symbol: string;
    uri: string;
    mutable: boolean;
    updateAuthority: string;
  };
  topHolders: Array<{
    address: string;
    amount: number;
    decimals: number;
    pct: number;
    uiAmount: number;
    uiAmountString: string;
    owner: string;
  }>;
  freezeAuthority: string | null;
  mintAuthority: string | null;
  risks: Array<{
    name: string;
    value: string;
    description: string;
    score: number;
    level: string;
  }>;
  score: number;
  fileMeta: {
    description: string;
    name: string;
    symbol: string;
    image: string;
  };
  lockerOwners: any; // You can replace `any` with a more specific type if available
  lockers: any; // You can replace `any` with a more specific type if available
  lpLockers: any; // You can replace `any` with a more specific type if available
  markets: Array<{
    pubkey: string;
    marketType: string;
    mintA: string;
    mintB: string;
    mintLP: string;
    liquidityA: string;
    liquidityB: string;
    mintAAccount: {
      mintAuthority: string | null;
      supply: number;
      decimals: number;
      isInitialized: boolean;
      freezeAuthority: string | null;
    };
    mintBAccount: {
      mintAuthority: string | null;
      supply: number;
      decimals: number;
      isInitialized: boolean;
      freezeAuthority: string | null;
    };
    mintLPAccount: {
      mintAuthority: string;
      supply: number;
      decimals: number;
      isInitialized: boolean;
      freezeAuthority: string | null;
    };
    liquidityAAccount: {
      mint: string;
      owner: string;
      amount: number;
      delegate: string | null;
      state: number;
      delegatedAmount: number;
      closeAuthority: string | null;
    };
    liquidityBAccount: {
      mint: string;
      owner: string;
      amount: number;
      delegate: string | null;
      state: number;
      delegatedAmount: number;
      closeAuthority: string | null;
    };
    lp: {
      baseMint: string;
      quoteMint: string;
      lpMint: string;
      quotePrice: number;
      basePrice: number;
      base: number;
      quote: number;
      reserveSupply: number;
      currentSupply: number;
      quoteUSD: number;
      baseUSD: number;
      pctReserve: number;
      pctSupply: number;
      holders: Array<{
        address: string;
        amount: number;
        decimals: number;
        pct: number;
        uiAmount: number;
        uiAmountString: string;
        owner: string;
      }>;
      totalTokensUnlocked: number;
      tokenSupply: number;
      lpLocked: number;
      lpUnlocked: number;
      lpLockedPct: number;
      lpLockedUSD: number;
      lpMaxSupply: number;
      lpCurrentSupply: number;
      lpTotalSupply: number;
    };
  }>;
  rugged: boolean;
  tokenType: string;
  transferFee: {
    pct: number;
    maxAmount: number;
    authority: string;
  };
  knownAccounts: any; // You can replace `any` with a more specific type if available
  events: Array<any>; // You can replace `any` with a more specific type if available
};
