import axios from 'axios';
import { CamperListResponse } from '../types/camper';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = baseURL;
export const getCampers = async () => {
  const res = await axios.get<CamperListResponse>('/');
  return res.data;
};
