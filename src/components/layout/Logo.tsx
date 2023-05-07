import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme/tokens";

const Logo: FC = () => {
  return (
    <Box pt={tokens.spacing.xxl} mb={tokens.spacing.m}>
      <Link
        to="/"
        as={NavLink}
        display="flex"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
      >
        <Box bg={tokens.gradients.logo} bgClip="text">
          <Text
            fontSize="sm"
            letterSpacing={tokens.spacing.xs}
            mt={tokens.spacing.xs}
            color="transparent"
          >
            SPACE CREW.
          </Text>
        </Box>
      </Link>
      <Flex h="1px" w="100%" bg={tokens.gradients.separator}></Flex>
    </Box>
  );
};

export default Logo;
