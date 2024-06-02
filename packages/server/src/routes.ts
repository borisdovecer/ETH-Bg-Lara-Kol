import express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.get('/cache-new-pool-data', async (_req: Request, res: Response) => {
  try {
    // await cacheLatestLPData();
    res.send('Successfully cached new pool data');
  } catch (error) {
    console.error('Error caching new pool data:', error);
    res.status(500).send('Error caching data');
  }
});

router.get('/get-filtered-data-from-cache', async (_req: Request, res: Response) => {
  // const result = await getFilteredResultsFromCachedLPData();
  // res.send(result);
});

router.get('/get-filtered-dexscreener-data', async (_req: Request, res: Response) => {
  // const filteredResultsFromCachedLPData = await getFilteredResultsFromCachedLPData();
  // const result = await getFilteredDexscreenerPairList(filteredResultsFromCachedLPData);
  // console.log('filteredResultsFromCachedLPData', result);
  // res.send(result);
});

router.use((err: any, _req: Request, res: Response, _next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default router;
