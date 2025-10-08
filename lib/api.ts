import axios from 'axios';
import { Camper, CamperListResponse, Filter } from '../types/camper';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

axios.defaults.baseURL = baseURL;

export const getCampers = async () => {
  const res = await axios.get<CamperListResponse>('/');
  return res.data;
};

export const getCamperDetails = async (id: string) => {
  const res = await axios.get<Camper>(`/${id}`);
  return res.data;
};

export const getFilters = async () => {
  const res = await axios<Filter[]>('/categories');
  return res.data;
};
