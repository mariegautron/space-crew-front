import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme/tokens";

const NavItem: FC<{ label: string; path: string }> = ({ label, path }) => {
  const activeRoute = (routeName: string) => {
    return location.pathname === routeName ? "active" : "";
  };

  return (
    <NavLink key={label} to={path}>
      <Button
        boxSize="initial"
        justifyContent="flex-start"
        alignItems="center"
        bg={
          activeRoute(path) === "active"
            ? tokens.colors.sidebar.activeBg
            : tokens.colors.sidebar.inactiveBg
        }
        transition={tokens.transition.navbar}
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
                ? tokens.colors.sidebar.activeTextColor
                : tokens.colors.sidebar.inactiveTextColor
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
};

export default NavItem;
