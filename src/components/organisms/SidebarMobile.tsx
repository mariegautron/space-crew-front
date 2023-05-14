import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Box,
  Stack,
} from '@chakra-ui/react';
import { type FC, useMemo } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

import { Routes, RoutesPaths } from '../../constants/routes';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';
import { tokens } from '../../theme/tokens';

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
