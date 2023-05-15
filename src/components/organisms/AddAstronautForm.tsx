import { type FC } from 'react';
import { type AddAstronautBody } from '../../types/Astronaut';
import AddOrUpdateAstronautForm from './AddOrUpdateAstronautForm';

const AddAstronautForm: FC<{
  addAstronaut: (astronaut: AddAstronautBody) => void;
  isLoading: boolean;
}> = ({ addAstronaut, isLoading }) => {
  const initialValues = {
    name: '',
    description: '',
    pseudo: '',
    imageUrl:
      'https://www.slate.fr/sites/default/files/styles/1060x523/public/moon-landing-60582_1280.jpg',
    missionId: null,
  };

  return (
    <AddOrUpdateAstronautForm
      onSubmit={addAstronaut}
      initialValues={initialValues}
      isLoading={isLoading}
      labelButton="Ajouter mon astronaute"
    />
  );
};

export default AddAstronautForm;
