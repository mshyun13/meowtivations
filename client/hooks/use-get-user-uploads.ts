import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useGetUserUploads() {
  return useQuery({
    queryKey: ['userUploads'],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/images/upload`)
      return res.body
    },
  })
}
