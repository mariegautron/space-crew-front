import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import Layout from "../organisms/Layout";
import { tokens } from "../../theme/tokens";
import SpaceButton from "../atoms/SpaceButton";
import AstronautCard from "../molecules/AstronautCard";
import Pagination from "../organisms/Pagination";
import { Astronaut } from "../../types/Astronaut";

interface AstronautsPageProps {
  setSeePictures: (seePictures: boolean) => void;
  seePictures: boolean;
  astronauts: Astronaut[];
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const AstronautsPage: FC<AstronautsPageProps> = ({
  setSeePictures,
  seePictures,
  astronauts,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <Layout>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={tokens.spacing.l}
      >
        <Heading>Tous les astronautes</Heading>
        <SpaceButton icon={<PlusSquareIcon />} spaceButtonLeftIcon>
          Ajouter un astronaute
        </SpaceButton>
      </Flex>
      <SpaceButton
        spaceButtonType="secondary"
        onClick={() => setSeePictures(!seePictures)}
        noIcon
      >
        {seePictures
          ? "Cacher les photos des astronautes"
          : "Voir les photos des astronautes"}
      </SpaceButton>
      <SimpleGrid minChildWidth="450px" spacing={tokens.spacing.xs}>
        {astronauts?.map((astronaut) => (
          <Box key={astronaut.id}>
            <AstronautCard {...astronaut} seePictures={seePictures} />
          </Box>
        ))}
      </SimpleGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default AstronautsPage;
