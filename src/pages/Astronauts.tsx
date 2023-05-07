import { Box, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FC, useState } from "react";
import Layout from "../components/layout/Layout";
import Pagination from "../components/organisms/Pagination";
import AstronautCard from "../components/molecules/AstronautCard";
import { useApi } from "../contexts/ApiContext";
import { tokens } from "../theme/tokens";
import SpaceButton from "../components/atoms/SpaceButton";
import { PlusSquareIcon } from "@chakra-ui/icons";
import ErrorPage from "../components/page/ErrorPage";

const Astronauts: FC = () => {
  const { astronautService } = useApi();

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = astronautService.useGetAstronauts(
    currentPage,
    8
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <ErrorPage />;
  }

  const { astronauts, totalPages } = data;

  return (
    <>
      <Layout>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>Tous les astronautes</Heading>
          <SpaceButton icon={<PlusSquareIcon />} spaceButtonLeftIcon>
            Ajouter un astronaute
          </SpaceButton>
        </Flex>
        <SimpleGrid minChildWidth="450px" spacing={tokens.spacing.xs}>
          {astronauts?.map((astronaut) => (
            <Box key={astronaut.id}>
              <AstronautCard {...astronaut} />
            </Box>
          ))}
        </SimpleGrid>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Layout>
    </>
  );
};

export default Astronauts;
