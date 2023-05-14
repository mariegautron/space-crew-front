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

const AstronautCard: FC<
  Astronaut & { seePicture: boolean; preview?: boolean }
> = ({
  id,
  name,
  description,
  pseudo,
  imageUrl,
  mission,
  seePicture,
  preview = false,
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
          {seePicture && (
            <Flex flex={1} maxHeight="100%" maxWidth={150}>
              {imageUrl && (
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  src={imageUrl}
                  alt={`Image de l'astronaute ${name}`}
                />
              )}
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
            {name && (
              <Flex justifyContent="space-between" alignItems="center" w="100%">
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {name}
                </Heading>
              </Flex>
            )}
            {pseudo && (
              <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                @{pseudo}
              </Text>
            )}
            {description && <Text>{description}</Text>}
            <StatusIndicator isActive={!mission}></StatusIndicator>
            <Badge py={1} fontWeight={"400"} colorScheme="purple">
              #{mission ? mission.name : "Pas de mission affectée"}
            </Badge>

            {!preview && id && (
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
            )}
          </Stack>
        </Stack>
      </Center>
      {id && (
        <ModalDeleteAstronaut
          isOpen={isOpen}
          onClose={onClose}
          astronautName={name}
          astronautId={id}
        />
      )}
    </>
  );
};

export default AstronautCard;
