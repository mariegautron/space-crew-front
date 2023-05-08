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
import { tokens } from "../../theme/tokens";
import SpaceButton from "../atoms/SpaceButton";
import ModalDeleteAstronaut from "./ModalDeleteAstronaut";
import StatusIndicator from "../atoms/StatusIndicator";
import { Astronaut } from "../../types/Astronaut";

const AstronautCard: FC<Astronaut & { seePictures: boolean }> = ({
  id,
  name,
  description,
  pseudo,
  imageUrl,
  mission,
  seePictures,
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
          {seePictures && (
            <Flex flex={1} maxHeight="100%" maxWidth={150}>
              <Image objectFit="cover" boxSize="100%" src={imageUrl} />
            </Flex>
          )}
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="space-between"
            alignItems="start"
            p={1}
            pt={2}
          >
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {name}
              </Heading>
            </Flex>
            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              @{pseudo}
            </Text>
            <Text>{description}</Text>
            <StatusIndicator isActive={!mission}></StatusIndicator>
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
