import { type Mission } from './Mission';

export interface Astronaut {
  id?: number;
  name: string;
  description?: string;
  pseudo?: string;
  imageUrl: string;
  missionId?: number | null;
  mission?: Mission | null;
}

export interface AddAstronautBody {
  astronaut: Astronaut;
}
