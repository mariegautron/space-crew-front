import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Badge,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { tokens } from '../../theme/tokens';
import SpaceButton from '../atoms/SpaceButton';
import ModalDeleteAstronaut from './ModalDeleteAstronaut';
import StatusIndicator from '../atoms/StatusIndicator';
import { type Astronaut } from '../../types/Astronaut';
import ModalUpdateAstronaut from './ModalUpdateAstronaut';

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
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();

  return (
    <>
      <Center py={6} w="100%" h="100%">
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '100%' }}
          height={{ sm: '100%', md: '100%' }}
          direction={{ base: 'column', md: 'row' }}
          boxShadow={'2xl'}
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
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  {name}
                </Heading>
              </Flex>
            )}
            {pseudo && (
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                @{pseudo}
              </Text>
            )}
            {description && <Text>{description}</Text>}
            <StatusIndicator isActive={mission == null}></StatusIndicator>
            <Badge py={1} fontWeight={'400'} colorScheme="purple">
              #{mission != null ? mission.name : 'Pas de mission affectée'}
            </Badge>

            {!preview && id && (
              <Flex gap={tokens.spacing.s}>
                <SpaceButton
                  icon={<EditIcon />}
                  size="sm"
                  spaceButtonLeftIcon
                  onClick={onOpenUpdate}
                >
                  Modifier
                </SpaceButton>
                <SpaceButton
                  colorScheme="red"
                  icon={<DeleteIcon />}
                  size="sm"
                  onClick={onOpenDelete}
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
        <ModalUpdateAstronaut
          isOpen={isOpenUpdate}
          onClose={onCloseUpdate}
          astronautName={name}
          astronautId={id}
        />
      )}
      {id && (
        <ModalDeleteAstronaut
          isOpen={isOpenDelete}
          onClose={onCloseDelete}
          astronautName={name}
          astronautId={id}
        />
      )}
    </>
  );
};

export default AstronautCard;
