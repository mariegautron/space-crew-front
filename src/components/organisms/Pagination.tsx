import { Box, Flex } from '@chakra-ui/react';
import { type FC } from 'react';
import SpaceButton from '../atoms/SpaceButton';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const handlePreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box>
        {currentPage > 1 && (
          <SpaceButton
            spaceButtonType="secondary"
            disabled={isPreviousDisabled}
            onClick={handlePreviousClick}
            spaceButtonLeftIcon
          >
            Page précédente
          </SpaceButton>
        )}
      </Box>

      <Box mx="4">
        {currentPage} / {totalPages}
      </Box>

      <Box>
        {currentPage < totalPages && (
          <SpaceButton
            spaceButtonType="secondary"
            disabled={isNextDisabled}
            onClick={handleNextClick}
          >
            Page suivante
          </SpaceButton>
        )}
      </Box>
    </Flex>
  );
};

export default Pagination;
