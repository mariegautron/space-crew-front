import { Mission } from "./Mission";

export type Astronaut = {
  id?: number;
  name: string;
  description?: string;
  pseudo?: string;
  imageUrl: string;
  missionId?: number | null;
  mission?: Mission | null;
};

export type AddAstronautBody = {
  astronaut: Astronaut;
};
