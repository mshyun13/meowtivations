import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useUploadImage() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async (data) => {
      await request.post(`${rootURL}/images/upload`).send(data)
    },
    onSuccess: async () => {
      navigate('/gallery') // change later if needed
    },
    onError: (err) => {
      console.error('Upload failed:', err)
    },
  })
}
