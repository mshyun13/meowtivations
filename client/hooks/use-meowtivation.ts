import { useQuery } from '@tanstack/react-query'
import { getRandomMeowtivation } from '../apis/meowtivations.ts'

export function useRandomMeowtivation() {
  return useQuery({
    queryKey: ['meowtivations', 'random'],
    queryFn: getRandomMeowtivation,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })
}

export function useMeowtivation() {
  return useQuery({
    queryKey: ['meowtivations', 'random'],
    queryFn: getRandomMeowtivation,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })
}
