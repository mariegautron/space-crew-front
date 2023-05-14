import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { type FC } from 'react';
import Layout from '../organisms/Layout';
import { tokens } from '../../theme/tokens';
import SpaceButton from '../atoms/SpaceButton';
import AstronautCard from '../molecules/AstronautCard';
import Pagination from '../organisms/Pagination';
import { type Astronaut } from '../../types/Astronaut';
import { RoutesPaths } from '../../constants/routes';

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
        <Heading as="h1">Tous les astronautes</Heading>
        <SpaceButton
          icon={<PlusSquareIcon />}
          href={RoutesPaths.ADD_ASTRONAUT}
          spaceButtonLeftIcon
        >
          Ajouter un astronaute
        </SpaceButton>
      </Flex>
      <SpaceButton
        spaceButtonType="secondary"
        onClick={() => {
          setSeePictures(!seePictures);
        }}
        noIcon
      >
        {seePictures
          ? 'Cacher les photos des astronautes'
          : 'Voir les photos des astronautes'}
      </SpaceButton>
      <SimpleGrid minChildWidth="450px" spacing={tokens.spacing.xs}>
        {astronauts?.map((astronaut) => (
          <Box key={astronaut.id}>
            <AstronautCard {...astronaut} seePicture={seePictures} />
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
