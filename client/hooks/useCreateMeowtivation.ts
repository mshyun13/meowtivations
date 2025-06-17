import { useMutation } from '@tanstack/react-query'
import { createMeowtivation } from '../apis/meowtivations.ts'
import type {
  Meowtivation,
  MeowtivationData,
} from '../../models/meowtivation.ts'
export function useCreateMeowtivation() {
  return useMutation<Meowtivation, Error, MeowtivationData>({
    mutationFn: createMeowtivation,
  })
}
