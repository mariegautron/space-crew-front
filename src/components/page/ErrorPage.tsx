import { Box, Code, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FC } from "react";
import SpaceButton from "../atoms/SpaceButton";
import { tokens } from "../../theme/tokens";

const ErrorPage: FC = () => {
  return (
    <Flex h="100vh" justifyContent={"center"} alignItems={"center"}>
      <Box
        textAlign="center"
        py={tokens.spacing.xxl}
        px={tokens.spacing.xl}
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg="red.200"
            rounded={tokens.spacing["6xl"]}
            w={tokens.spacing["7xl"]}
            h={tokens.spacing["7xl"]}
            textAlign="center"
          >
            <CloseIcon boxSize={tokens.spacing.xl} />
          </Flex>
        </Box>
        <Heading as="h1" size="xl" mt={tokens.spacing.xl} mb={tokens.spacing.l}>
          Il y a eu une erreur 👀
        </Heading>
        <Text mt={tokens.spacing.xl}>
          Vérifie que{" "}
          <Link
            href="https://github.com/mariegautron/space-crew-api"
            isExternal
          >
            cette url
            <ExternalLinkIcon mx={tokens.spacing.xxs} />
          </Link>
          fonctionne bien.
        </Text>
        <Text mt={tokens.spacing.xl}>
          Si ce n'est pas le cas, tu peux lancer le back-end :
        </Text>
        <Text mt={tokens.spacing.xl}>Clone le repo</Text>
        <Code mt={tokens.spacing.xl}>
          git clone https://github.com/mariegautron/space-crew-back-end.git
        </Code>
        <Text mt={tokens.spacing.xl}>
          Entre la variable d'environnement du port backend dans ton .env
        </Text>
        <Code mt={tokens.spacing.xl}>API_PORT=8080</Code>
        <Text mt={tokens.spacing.xl}>Et lance la commande</Text>
        <Code mt={tokens.spacing.xl}>make install start</Code>
        <Text mt={tokens.spacing.xl}>
          Attends un petit peu, et si on te demande quelque chose tu met oui
          (y).
        </Text>
        <Text mt={tokens.spacing.xl}>
          C'est tout ... et c'est déjà beaucoup. Sinon retourne sur la page
          d'accueil. (mais elle sert à rien)
        </Text>
        <SpaceButton href="/" mt={tokens.spacing.xl}>
          Page d'accueil
        </SpaceButton>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
