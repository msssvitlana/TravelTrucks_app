import axios from 'axios';
import { Camper, CamperListResponse, Filter } from '../types/camper';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async () => {
  const res = await axios.get<CamperListResponse>('/campers');
  return res.data;
};

export const getCamperDetails = async (id: string) => {
  const res = await axios.get<Camper>(`/campers/${id}`);
  return res.data;
};

export const getFilters = async () => {
  const res = await axios.get<Filter[]>('/categories');
  return res.data;
};

const CAMPERS_PER_PAGE = 4;

export async function fetchCampers(
  filters: Filter,
  page: number,
  limit = CAMPERS_PER_PAGE,
): Promise<CamperListResponse> {
  try {
    const params: Record<string, string | number | string[]> = {
      page,
      limit,
      ...(filters.location.trim() && { location: filters.location.trim() }),
      ...(filters.type && { type: filters.type }),
    };

    if (filters.equipment.length > 0) {
      params.equipment = filters.equipment;
    }

    const response = await axios.get<CamperListResponse>('/campers', { params });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch campers:', error);
    throw new Error('Failed to fetch campers. Please try again later.');
  }
}
