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

const CAMPERS_PER_PAGE = 4;

export async function fetchCampers(
  filters: Filter,
  page: number,
  limit = CAMPERS_PER_PAGE,
): Promise<CamperListResponse> {
  try {
    const params = new URLSearchParams();

    params.append('page', page.toString());
    params.append('limit', limit.toString());

    if (filters.location.trim()) {
      params.append('location', filters.location.trim());
    }
    console.log('Filters type:', filters.type);
    if (filters.type) {
      params.append('form', filters.type);
    }

    filters.equipment.forEach((eq) => {
      params.append(eq, 'true');
    });

    const response = await axios.get<CamperListResponse>(`/campers?${params.toString()}`);

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch campers. Please try again later.');
  }
}
