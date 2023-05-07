import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { Box, Stack } from "@chakra-ui/react";
import { useMemo } from "react";
import { Routes, RoutesPaths } from "../../constants/routes";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { tokens } from "../../theme/tokens";

const SideBarMobile: FC = () => {
  const navLinks = useMemo(() => {
    return Routes.map(({ label, path }) => {
      if (path === RoutesPaths.HOME) {
        return;
      }
      return <NavItem label={label} path={path} />;
    });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        <AiOutlineMenuUnfold />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent
          p={10}
          bg={tokens.gradients.sidebar}
          backdropFilter="blur(10px)"
        >
          <Box>
            <Logo />
          </Box>
          <Stack direction="column" mb="40px">
            <Box>{navLinks}</Box>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBarMobile;
