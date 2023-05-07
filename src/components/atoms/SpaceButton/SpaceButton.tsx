import { ArrowBackIcon, ArrowForwardIcon, Icon } from "@chakra-ui/icons";
import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface SpaceButtonProps extends ButtonProps {
  children: ReactNode;
  spaceButtonType?: "primary" | "secondary";
  href?: string;
  spaceButtonLeftIcon?: boolean;
}

const SpaceButton: FC<SpaceButtonProps> = ({
  children,
  spaceButtonType = "primary",
  href,
  spaceButtonLeftIcon,
  ...props
}: SpaceButtonProps) => {
  if (spaceButtonType === "secondary") {
    return (
      <Button
        {...(href && { as: Link, to: href })}
        {...props}
        my={{ sm: "1.5rem", lg: "0px" }}
      >
        {spaceButtonLeftIcon && (
          <Icon
            as={ArrowBackIcon}
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
        )}
        <Text
          fontSize="sm"
          color="#fff"
          fontWeight="bold"
          cursor="pointer"
          transition="all .3s ease"
          _hover={{ me: "4px" }}
        >
          {children}
        </Text>
        {!spaceButtonLeftIcon && (
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
        )}
      </Button>
    );
  }

  return (
    <Button
      {...props}
      variant="solid"
      size="lg"
      colorScheme="green"
      {...(spaceButtonLeftIcon && { leftIcon: <ArrowBackIcon /> })}
      {...(!spaceButtonLeftIcon && { rightIcon: <ArrowForwardIcon /> })}
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
