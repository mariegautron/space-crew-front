import { Box, Stack } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { Routes, RoutesPaths } from "../../constants/routes";
import { tokens } from "../../theme/tokens";
import Logo from "./Logo";
import NavItem from "./NavItem";

const Sidebar: FC = () => {
  const navLinks = useMemo(() => {
    return Routes.map(({ label, path }) => {
      if (path === RoutesPaths.HOME) {
        return;
      }
      return <NavItem label={label} path={path} />;
    });
  }, []);

  return (
    <Box>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={tokens.gradients.sidebar}
          backdropFilter="blur(10px)"
          transition={tokens.transition.navbar}
          w="260px"
          maxW="260px"
          ms={{
            sm: tokens.spacing.l,
          }}
          my={{
            sm: tokens.spacing.l,
          }}
          h="calc(100vh - 32px)"
          ps={tokens.spacing.xl}
          pe={tokens.spacing.xl}
          m={`${tokens.spacing.l} 0px ${tokens.spacing.l} ${tokens.spacing.l}`}
          borderRadius={tokens.spacing.l}
        >
          <Box>
            <Logo />
          </Box>
          <Stack direction="column" mb="40px">
            <Box>{navLinks}</Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
