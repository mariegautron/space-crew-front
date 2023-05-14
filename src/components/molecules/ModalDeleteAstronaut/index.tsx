import { type RefObject, useRef } from 'react';
import { useApi } from '../../../contexts/ApiContext';
import ModalDelete from './ModalDelete';

interface ModalDeleteAstronautProps {
  isOpen: boolean;
  onClose: () => void;
  astronautName: string;
  astronautId: number;
}

const ModalDeleteAstronaut = ({
  onClose,
  isOpen,
  astronautName,
  astronautId,
}: ModalDeleteAstronautProps) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const { astronautService } = useApi();

  const { mutate, isLoading } = astronautService.useDeleteAstronaut();

  const deleteAstronaut = () => {
    mutate(astronautId.toString());
  };

  return (
    <ModalDelete
      onClose={onClose}
      isOpen={isOpen}
      astronautName={astronautName}
      cancelRef={cancelRef as RefObject<HTMLButtonElement>}
      deleteAstronaut={deleteAstronaut}
      isLoading={isLoading}
    />
  );
};

export default ModalDeleteAstronaut;
