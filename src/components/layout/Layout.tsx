import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import useIsMobileOrTablet from "../../hooks/useIsMobileOrTablet";
import SideBarMobile from "./SidebarMobile";
import { tokens } from "../../theme/tokens";

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
      <Box
        w="100%"
        {...(!isMobileOrTablet && { ml: 280, mt: 50 })}
        my={tokens.spacing["3xl"]}
        mr={tokens.spacing["3xl"]}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
