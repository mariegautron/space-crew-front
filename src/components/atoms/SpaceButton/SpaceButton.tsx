import { ArrowForwardIcon, Icon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const SpaceButton: FC<{
  children: ReactNode;
  type?: "primary" | "secondary";
  href?: string;
}> = ({ children, type = "primary", href }) => {
  if (type === "secondary") {
    return (
      <Button {...(href && { as: Link, to: href })}>
        <Text
          fontSize="sm"
          color="#fff"
          fontWeight="bold"
          cursor="pointer"
          transition="all .3s ease"
          my={{ sm: "1.5rem", lg: "0px" }}
          _hover={{ me: "4px" }}
        >
          Whereas recognition of the inherent dignity
        </Text>
        <Icon
          as={ArrowForwardIcon}
          w="20px"
          h="20px"
          color="#fff"
          fontSize="2xl"
          transition="all .3s ease"
          mx=".3rem"
          cursor="pointer"
          pt="4px"
          _hover={{ transform: "translateX(20%)" }}
        />
      </Button>
    );
  }

  return (
    <Button
      variant="solid"
      size="lg"
      colorScheme="green"
      rightIcon={<ArrowForwardIcon />}
      backgroundColor="green.300"
      color="blackAlpha.800"
      bgGradient="linear(to right, green.300,cyan.300)"
      borderRadius={10}
      p={5}
      {...(href && { as: Link, to: href })}
    >
      {children}
    </Button>
  );
};

export default SpaceButton;
