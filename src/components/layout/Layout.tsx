import { FC, ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import useIsMobileOrTablet from "../../hooks/useIsMobileOrTablet";
import SideBarMobile from "./SidebarMobile";
import { tokens } from "../../theme/tokens";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const isMobileOrTablet = useIsMobileOrTablet();

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

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
