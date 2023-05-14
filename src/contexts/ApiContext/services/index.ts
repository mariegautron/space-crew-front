import * as astronautService from './astronauts';

export default {
  astronautService,
};

export interface Services {
  astronautService: typeof astronautService;
}
