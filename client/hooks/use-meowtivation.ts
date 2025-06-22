import { useQuery } from '@tanstack/react-query'
import {
  getMeowtivationById,
  getRandomMeowtivation,
} from '../apis/meowtivations.ts'

export function useRandomMeowtivation() {
  return useQuery({
    queryKey: ['meowtivations', 'random'],
    queryFn: getRandomMeowtivation,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })
}

export function useMeowtivation(id: number) {
  return useQuery({
    queryKey: ['meowtivations', id],
    queryFn: () => getMeowtivationById(id),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })
}
