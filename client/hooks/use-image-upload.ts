import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useUploadImage() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append('image', file) // this is where it ties into "upload.single('image')" in server-side uploadRoutes.ts
      await request.post(`${rootURL}/images/upload`).send(formData)
    },
    onSuccess: async () => {
      qc.invalidateQueries({ queryKey: ['userUploads'] })
    },
    onError: (err) => {
      console.error('Upload failed:', err)
    },
  })
}
