import { Box, Stack } from '@chakra-ui/react';
import { type FC, useMemo } from 'react';
import { Routes, RoutesPaths } from '../../constants/routes';
import { tokens } from '../../theme/tokens';
import Logo from '../atoms/Logo';
import NavItem from '../molecules/NavItem';

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
      <Box display={{ sm: 'none', xl: 'block' }} position="fixed">
        <Box
          bg={tokens.gradients.sidebar}
          backdropFilter="blur(10px)"
          transition={tokens.transition.navbar}
          w="260px"
          maxW="260px"
          ms={{
            sm: tokens.spacing.xs,
          }}
          my={{
            sm: tokens.spacing.m,
          }}
          h="calc(100vh - 32px)"
          ps={tokens.spacing.xl}
          pe={tokens.spacing.xl}
          m={`${tokens.spacing.m} 0px ${tokens.spacing.m} ${tokens.spacing.m}`}
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
