import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex w="100%" h="100%">
      <Box>
        <Sidebar></Sidebar>
      </Box>
      <Box ml={350} mt={50}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
