import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import AstronautCard from "../molecules/AstronautCard";
import { AddAstronautBody, Astronaut } from "../../types/Astronaut";

const AddAstronautForm: FC<{
  addAstronaut: (astronaut: AddAstronautBody) => void;
}> = ({ addAstronaut }) => {
  const [errors, setErrors] = useState<Partial<Astronaut>>({});

  const [formState, setFormState] = useState<Astronaut>({
    name: "",
    description: "",
    pseudo: "",
    imageUrl: "",
    missionId: null,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    const errors = validate(formState);
    setErrors(errors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validate(formState);
    if (Object.keys(errors).length === 0) {
      addAstronaut({ astronaut: { ...formState } });
    } else {
      setErrors(errors);
    }
  };

  const validate = (values: Astronaut) => {
    const errors: Partial<Astronaut> = {};

    if (!values.name.trim()) {
      errors.name = "Le nom est requis";
    }

    if (!values.imageUrl.trim()) {
      errors.imageUrl = "L'URL de l'image est requise";
    }

    return errors;
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} mt={4}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Nom (obligatoire)</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                errorBorderColor="red.300"
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="description">Description</FormLabel>
              <Textarea
                id="description"
                name="description"
                value={formState.description}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="pseudo">Pseudo</FormLabel>
              <Input
                type="text"
                id="pseudo"
                name="pseudo"
                value={formState.pseudo}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isInvalid={!!errors.imageUrl}>
              <FormLabel htmlFor="imageUrl">
                URL de l'image (obligatoire)
              </FormLabel>
              <Input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formState.imageUrl}
                onChange={handleChange}
                errorBorderColor="red.300"
              />
              <FormErrorMessage>{errors.imageUrl}</FormErrorMessage>
            </FormControl>

            <Button type="submit">Ajouter</Button>
          </VStack>
        </form>
      </Box>
      <Box>
        <Heading as="h2" size="md">
          Prévisualisez votre astronaute :{" "}
        </Heading>
        <AstronautCard {...formState} seePicture={true} preview />
      </Box>
    </>
  );
};

export default AddAstronautForm;