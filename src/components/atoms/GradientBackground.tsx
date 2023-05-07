import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const GradientBackground: FC<{ children: ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      p="2px"
      justify="center"
      align="center"
      direction="column"
      borderRadius={10}
      bg="linear-gradient(159.02deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)"
      border={"1px solid white"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default GradientBackground;
