import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Routes, RoutesPaths } from "../../constants/routes";

const Sidebar: FC = () => {
  const variantChange = "0.2s linear";
  const activeBg = "#1A1F37";
  const inactiveBg = "transparent";
  const activeTextColor = "white";
  const inactiveTextColor = "whiteAlpha.700";
  const sidebarBg =
    "linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)";
  const sidebarRadius = "16px";
  const sidebarMargins = "16px 0px 16px 16px";

  const activeRoute = (routeName: string) => {
    return location.pathname === routeName ? "active" : "";
  };
  const brand = (
    <Box pt={"25px"} mb="12px">
      <Link
        to="/"
        as={NavLink}
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <Box
          bg="linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)"
          bgClip="text"
        >
          <Text fontSize="sm" letterSpacing="3px" mt="3px" color="transparent">
            SPACE CREW.
          </Text>
        </Box>
      </Link>
      <Flex
        h="1px"
        w="100%"
        bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 47.22%, rgba(224, 225, 226, 0.15625) 94.44%)"
      ></Flex>
    </Box>
  );
  const createLinks = () => {
    return Routes.map(({ label, path }) => {
      if (path === RoutesPaths.HOME) {
        return;
      }
      return (
        <NavLink key={label} to={path}>
          <Button
            boxSize="initial"
            justifyContent="flex-start"
            alignItems="center"
            bg={activeRoute(path) === "active" ? activeBg : inactiveBg}
            transition={variantChange}
            backdropFilter="blur(42px)"
            mb={{ xl: "12px" }}
            mx={{ xl: "auto" }}
            ps={{ sm: "10px", xl: "16px" }}
            py="12px"
            borderRadius="15px"
            w="100%"
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{ boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.04)" }}
          >
            <Flex>
              <Text
                color={
                  activeRoute(path) === "active"
                    ? activeTextColor
                    : inactiveTextColor
                }
                my="auto"
                fontSize="sm"
              >
                {label}
              </Text>
            </Flex>
          </Button>
        </NavLink>
      );
    });
  };

  return (
    <Box>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          backdropFilter="blur(10px)"
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          <Box>{brand}</Box>
          <Stack direction="column" mb="40px">
            <Box>{createLinks()}</Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
