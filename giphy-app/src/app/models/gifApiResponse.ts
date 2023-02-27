import { Giphy } from './giphy';

export interface GiphyApiResponse {
  data: Giphy[];
  pagination: {
    offset: number;
    total_count: number;
    count: number;
  };
  meta: {
    status: number;
    msg: string;
  };
}
