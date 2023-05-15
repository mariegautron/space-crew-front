import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useRef, type FC } from 'react';
import {
  type Astronaut,
  type AddAstronautBody,
} from '../../../types/Astronaut';
import AddOrUpdateAstronautForm from '../../organisms/AddOrUpdateAstronautForm';
import LoadingPage from '../../page/LoadingPage';

interface ModalUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  astronautName: string;
  isLoading: boolean;
  astronaut: Astronaut | undefined;
  updateAstronaut: (astronaut: AddAstronautBody) => void;
  isLoadingUpdate: boolean;
}

const ModalUpdate: FC<ModalUpdateProps> = ({
  isOpen,
  onClose,
  astronautName,
  isLoading,
  astronaut,
  updateAstronaut,
  isLoadingUpdate,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modifier {astronautName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {isLoading || !astronaut ? (
            <LoadingPage />
          ) : (
            <AddOrUpdateAstronautForm
              onSubmit={updateAstronaut}
              initialValues={astronaut}
              isLoading={isLoadingUpdate}
              labelButton="Modifier cet astronaute"
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalUpdate;
