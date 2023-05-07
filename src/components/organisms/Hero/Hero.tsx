import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import SpaceButton from "../../atoms/SpaceButton/SpaceButton";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Prêt à embarquer pour
            <br />
            <Text as={"span"} color={"green.300"}>
              une aventure spatiale ?
            </Text>
          </Heading>
          <Text>
            Bienvenue sur Space Crew ! L'application qui vous permet de gérer
            votre propre équipage d'astronautes...ou de faux astronautes, si
            vous préférez les chats portant des costumes spatiaux (on ne juge
            pas).
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <SpaceButton href="/astronauts">C'est parti !</SpaceButton>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;
