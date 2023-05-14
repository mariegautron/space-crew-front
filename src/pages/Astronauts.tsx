import { type FC, useState } from 'react';
import AstronautsPage from '../components/page/AstronautPage';
import ErrorPage from '../components/page/ErrorPage';
import LoadingPage from '../components/page/LoadingPage';
import { useApi } from '../contexts/ApiContext';

const Astronauts: FC = () => {
  const { astronautService } = useApi();

  const [currentPage, setCurrentPage] = useState(1);

  const [seePictures, setSeePictures] = useState(false);

  const { data, isLoading, error } = astronautService.useGetAstronauts(
    currentPage,
    8
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!data || Boolean(error)) {
    return <ErrorPage />;
  }

  const { astronauts, totalPages } = data;

  return (
    <AstronautsPage
      setSeePictures={setSeePictures}
      seePictures={seePictures}
      astronauts={astronauts}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
    />
  );
};

export default Astronauts;
