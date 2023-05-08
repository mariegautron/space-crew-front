import { useToast } from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import { useApi } from "../../../contexts/ApiContext";
import ModalDelete from "./ModalDelete";

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
  const toast = useToast();

  const { astronautService } = useApi();

  const { mutate } = astronautService.useDeleteAstronaut();

  const deleteAstronaut = () => {
    try {
      mutate(astronautId.toString());
      toast({
        title: "Astronaute supprimé.",
        description: `${astronautName} est bien parti.e en retraite anticipée`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Erreur lors de la suppression.",
        description:
          "Une erreur est survenue lors de la suppression de l'astronaute.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <ModalDelete
      onClose={onClose}
      isOpen={isOpen}
      astronautName={astronautName}
      cancelRef={cancelRef as RefObject<HTMLButtonElement>}
      deleteAstronaut={deleteAstronaut}
    />
  );
};

export default ModalDeleteAstronaut;
