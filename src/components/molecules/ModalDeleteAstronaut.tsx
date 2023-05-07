import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Flex,
} from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import { tokens } from "../../theme/tokens";
import GradientBorder from "../atoms/GradientBackground";
import SpaceButton from "../atoms/SpaceButton";
import { useApi } from "../../contexts/ApiContext";

type ModalDeleteAstronautProps = {
  isOpen: boolean;
  onClose: () => void;
  astronautName: string;
  astronautId: number;
};

const ModalDeleteAstronaut = ({
  onClose,
  isOpen,
  astronautName,
  astronautId,
}: ModalDeleteAstronautProps) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const { astronautService } = useApi();

  const { mutate } = astronautService.useDeleteAstronaut();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef as RefObject<HTMLButtonElement>}
      onClose={onClose}
      size="xl"
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <GradientBorder>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Supprimer {astronautName}
          </AlertDialogHeader>

          <AlertDialogBody textAlign={"center"}>
            {astronautName} n'a que 68 ans, iel n'a pas encore l'âge de prendre
            sa retraite. Mais si tu le/la supprimes, iel pourra enfin profiter
            de sa nouvelle activité à temps plein : garder ses petits enfants !
          </AlertDialogBody>

          <AlertDialogFooter>
            <Flex gap={tokens.spacing.s}>
              <SpaceButton
                ref={cancelRef}
                size="sm"
                onClick={onClose}
                spaceButtonType="secondary"
                spaceButtonLeftIcon
              >
                {astronautName} est encore vaillant.e
              </SpaceButton>

              <SpaceButton
                colorScheme="red"
                icon={<DeleteIcon />}
                spaceButtonLeftIcon
                size="sm"
                onClick={() => mutate(astronautId.toString())}
              >
                Retraite anticipée
              </SpaceButton>
            </Flex>
          </AlertDialogFooter>
        </GradientBorder>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalDeleteAstronaut;
