import {
  useMutation,
  type UseMutationResult,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from '@tanstack/react-query';
import { callApi } from '../utils';
import {
  type AddAstronautBody,
  type Astronaut,
} from '../../../types/Astronaut';
import { useToast } from '@chakra-ui/react';

export interface GetAstronautsResponse {
  astronauts: Astronaut[];
  totalCount: number;
  totalPages: number;
}

export const useGetAstronauts = (
  page = 1,
  limit = 10
): UseQueryResult<GetAstronautsResponse, unknown> => {
  return useQuery(['astronauts', page, limit], async () => {
    const { data } = await callApi(`/astronauts?page=${page}&limit=${limit}`);
    return data;
  });
};

export const useDeleteAstronaut = (): UseMutationResult<
  unknown,
  unknown,
  string
> => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    async (astronautId) => {
      await callApi(`/astronauts/${astronautId}`, 'DELETE');
      return null;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['astronauts']);
        toast({
          title: 'Astronaute supprimé.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error) => {
        console.log('Erreur: ', error);
        toast({
          title: 'Erreur lors de la suppression.',
          description:
            "Une erreur est survenue lors de la suppression de l'astronaute.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    }
  );
};

export const useAddAstronaut = (): UseMutationResult<
  Astronaut | null,
  unknown,
  AddAstronautBody,
  unknown
> => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    async (newAstronaut: AddAstronautBody) => {
      const { data } = await callApi<Astronaut>('/astronauts', 'POST', {
        body: JSON.stringify(newAstronaut),
      });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['astronauts']);
        toast({
          title: 'Astronaute ajouté.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      },
      onError: (error) => {
        console.log('Erreur: ', error);
        toast({
          title: "Erreur lors de l'ajout.",
          description:
            "Une erreur est survenue lors de l'ajout de l'astronaute.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
    }
  );
};
