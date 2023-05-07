import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import useIsMobileOrTablet from "../../hooks/useIsMobileOrTablet";
import SideBarMobile from "./SidebarMobile";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <Flex
      w="100%"
      h="100%"
      {...(isMobileOrTablet && { direction: "column" })}
      p={2}
      gap={4}
    >
      <Box>
        {isMobileOrTablet ? (
          <SideBarMobile></SideBarMobile>
        ) : (
          <Sidebar></Sidebar>
        )}
      </Box>
      <Box {...(!isMobileOrTablet && { ml: 350, mt: 50 })}>{children}</Box>
    </Flex>
  );
};

export default Layout;
