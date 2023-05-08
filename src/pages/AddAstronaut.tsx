import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import AddAstronautForm from "../components/organisms/AddAstronautForm";
import { useApi } from "../contexts/ApiContext";
import { AddAstronautBody } from "../types/Astronaut";
import Layout from "../components/organisms/Layout";

const AddAstronaut: FC = () => {
  const { astronautService } = useApi();

  const { mutate } = astronautService.useAddAstronaut();

  const addAstronaut = (astronaut: AddAstronautBody) => {
    mutate(astronaut);
  };

  return (
    <Layout>
      <Heading as="h1">Ajouter un astronaute</Heading>
      <AddAstronautForm addAstronaut={addAstronaut} />
    </Layout>
  );
};

export default AddAstronaut;