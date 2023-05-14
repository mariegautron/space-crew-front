import { type FC } from 'react';
import { useApi } from '../../../contexts/ApiContext';
import { type AddAstronautBody } from '../../../types/Astronaut';
import ModalUpdate from './ModalUpdate';

interface ModalUdpateAstronautProps {
  isOpen: boolean;
  onClose: () => void;
  astronautName: string;
  astronautId: number;
}

const ModalUpdateAstronaut: FC<ModalUdpateAstronautProps> = ({
  isOpen,
  onClose,
  astronautName,
  astronautId,
}) => {
  const { astronautService } = useApi();

  const { data, isLoading } =
    astronautService.useGetAstronautsById(astronautId);

  const { mutate, isLoading: isLoadingUpdate } =
    astronautService.useUpdateAstronaut(astronautId);

  const updateAstronaut = (astronaut: AddAstronautBody) => {
    mutate(astronaut);
  };

  return (
    <ModalUpdate
      isOpen={isOpen}
      onClose={onClose}
      astronautName={astronautName}
      isLoading={isLoading}
      astronaut={data}
      updateAstronaut={updateAstronaut}
      isLoadingUpdate={isLoadingUpdate}
    />
  );
};

export default ModalUpdateAstronaut;
