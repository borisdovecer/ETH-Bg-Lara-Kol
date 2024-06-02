import { AxiosResponse } from 'axios';
import axios from './axiosConfig';

export const cacheLatestRaydiumData = async (): Promise<any[]> => {
  try {
    const response: AxiosResponse<any[]> = await axios.get('/cache-new-pool-data');
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getFilteredData = async (): Promise<any[]> => {
  try {
    const response: AxiosResponse<any> = await axios.get('/get-filtered-dexscreener-data');
    console.log('hello');
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    console.error('Error fetching data:', error);
    return [];
  }
};
