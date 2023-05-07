import * as astronautService from "./astronauts";

export default {
  astronautService,
};

export type Services = {
  astronautService: typeof astronautService;
};
