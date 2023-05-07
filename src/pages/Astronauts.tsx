import { Box, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FC, useState } from "react";
import Layout from "../components/layout/Layout";
import Pagination from "../components/layout/Pagination";
import AstronautCard from "../components/molecules/AstronautCard/AstronautCard";
import { useApi } from "../contexts/ApiContext";
import { tokens } from "../theme/tokens";

const Astronauts: FC = () => {
  const { astronautService } = useApi();

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = astronautService.useGetAstronauts(
    currentPage,
    6
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <p>Bah une erreur.</p>;
  }

  const { astronauts, totalPages } = data;

  return (
    <>
      <Layout>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading>Tous les astronautes</Heading>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
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
