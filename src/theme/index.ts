import { extendTheme } from "@chakra-ui/react";
import { background } from "./background";
import { globalStyles } from "./styles";
import { config } from "./config";

export default extendTheme(config, globalStyles, background);
