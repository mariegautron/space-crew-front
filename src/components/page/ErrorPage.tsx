import { Box, Code, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FC } from "react";
import SpaceButton from "../atoms/SpaceButton";

const ErrorPage: FC = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.200"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
      <Heading as="h1" size="xl" mt={6} mb={2}>
        Il y a eu une erreur 👀
      </Heading>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        As-tu bien lancé le back-end ?
      </Heading>
      <Text mt={6}>
        Rends toi sur{" "}
        <Link href="https://github.com/mariegautron/space-crew-api" isExternal>
          le repo Github du back-end du projet <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <Text mt={6}>Clone le repo</Text>
      <Code mt={6}>
        git clone https://github.com/mariegautron/space-crew-back-end.git
      </Code>
      <Text mt={6}>
        Entre la variable d'environnement du port backend dans ton .env
      </Text>
      <Code mt={6}>API_PORT=8080</Code>
      <Text mt={6}>Et lance la commande</Text>
      <Code mt={6}>make install start</Code>
      <Text mt={6}>
        Attends un petit peu, et si on te demande quelque chose tu met oui (y).
      </Text>
      <Text mt={6}>
        C'est tout ... et c'est déjà beaucoup. Sinon retourne sur la page
        d'accueil. (mais elle sert à rien)
      </Text>
      <SpaceButton href="/" mt={6}>
        Page d'accueil
      </SpaceButton>
    </Box>
  );
};

export default ErrorPage;
