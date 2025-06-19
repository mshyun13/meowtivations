import { MutationFunction, useQuery } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import * as API from '../apis/users'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export function useUser() {
  const { user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()

  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return API.getUser({ token })
    },
    enabled: !!user,
    refetchOnWindowFocus: false,
    retry: false,
  })

  useEffect(() => {
    if (query.data) {
      navigate('/')
    }
  }, [query.data, navigate])

  return {
    ...query,
    add: useAddUser(),
  }
}

export function useUserMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  return mutation
}

export function useAddUser() {
  return useUserMutation(API.addUser)
}
