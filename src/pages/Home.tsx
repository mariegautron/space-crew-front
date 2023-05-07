import { useColorMode } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import Hero from "../components/organisms/Hero";

const Home: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
