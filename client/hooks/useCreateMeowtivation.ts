import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createMeowtivation } from '@/apis/meowtivations'
import { Meowtivation, MeowtivationData } from '@models/meowtivation'

export function useCreateMeowtivation() {
  const queryClient = useQueryClient()
  return useMutation<Meowtivation, Error, MeowtivationData>({
    mutationFn: createMeowtivation,
    onSuccess: () => {
      // invalidate
      queryClient.invalidateQueries({ queryKey: ['meowtivations'] })
    },
    onError: (error: Error) => {
      console.error('Mutation failed:', error.message)
    },
  })
}
