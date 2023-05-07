import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { callApi } from "../utils";
import { Mission } from "./mission";

export type Astronaut = {
  id: number;
  name: string;
  description: string;
  pseudo: string;
  imageUrl: string;
  missionId: number;
  mission: Mission;
};

export type GetAstronautsResponse = {
  astronauts: Astronaut[];
  totalCount: number;
  totalPages: number;
};

export const useGetAstronauts = (
  page = 1,
  limit = 6
): UseQueryResult<GetAstronautsResponse, unknown> => {
  return useQuery(["astronauts", page, limit], async () => {
    const { data } = await callApi(`/astronauts?page=${page}&limit=${limit}`);
    return data;
  });
};
