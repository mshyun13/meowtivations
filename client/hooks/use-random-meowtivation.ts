import { useQuery } from '@tanstack/react-query'
import { getRandomMeowtivation } from '../apis/meowtivations.ts'

export default function useRandomMeowtivation() {
  return useQuery({
    queryKey: ['meowtivations', 'random'],
    queryFn: getRandomMeowtivation,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })
}