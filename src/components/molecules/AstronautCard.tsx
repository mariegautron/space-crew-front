import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { Astronaut } from "../../contexts/ApiContext/services/astronauts";
import { tokens } from "../../theme/tokens";
import SpaceButton from "../atoms/SpaceButton";
import ModalDeleteAstronaut from "./ModalDeleteAstronaut";

const AstronautCard: FC<Astronaut> = ({
  id,
  name,
  description,
  pseudo,
  imageUrl,
  mission,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center py={6} w="100%" h="100%">
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "100%" }}
          height={{ sm: "100%", md: "100%" }}
          direction={{ base: "column", md: "row" }}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} maxHeight="100%" maxWidth={150}>
            <Image objectFit="cover" boxSize="100%" src={imageUrl} />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="start"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              @{pseudo}
            </Text>
            <Text>{description}</Text>
            <Badge py={1} fontWeight={"400"} colorScheme="purple">
              #{mission ? mission.name : "Pas de mission affectée"}
            </Badge>

            <Flex gap={tokens.spacing.s}>
              <SpaceButton icon={<EditIcon />} size="sm" spaceButtonLeftIcon>
                Modifier
              </SpaceButton>
              <SpaceButton
                colorScheme="red"
                icon={<DeleteIcon />}
                size="sm"
                onClick={onOpen}
                spaceButtonLeftIcon
              >
                Suprimer
              </SpaceButton>
            </Flex>
          </Stack>
        </Stack>
      </Center>
      <ModalDeleteAstronaut
        isOpen={isOpen}
        onClose={onClose}
        astronautName={name}
        astronautId={id}
      />
    </>
  );
};

export default AstronautCard;
