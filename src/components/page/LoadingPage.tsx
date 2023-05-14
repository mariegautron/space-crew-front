import { Flex, Spinner } from '@chakra-ui/react';
import { type FC } from 'react';

const LoadingPage: FC = () => {
  return (
    <Flex h="100vh" justifyContent={'center'} alignItems={'center'}>
      <Spinner />
    </Flex>
  );
};

export default LoadingPage;
