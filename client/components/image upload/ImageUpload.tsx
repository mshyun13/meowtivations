import { useState } from 'react'
import { Button } from '../Button'
import Dropzone from './Dropzone'
import useUploadImage from '@/hooks/use-image-upload'
import useGetUserUploads from '@/hooks/use-get-user-uploads'

export default function ImageUpload() {
  const [preview, setPreview] = useState<null | string>(null)
  const [file, setFile] = useState<File | null>(null)
  const mutation = useUploadImage()

  const { data: images, isPending, error } = useGetUserUploads()

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Error loading past uploads</p>

  const handlePreview = (file: File) => {
    if (!file) {
      setPreview(null)
      return
    }

    setFile(file)
    const previewURL = URL.createObjectURL(file)
    setPreview(previewURL)
  }

  const handleUpload = async (event: React.MouseEvent) => {
    event.preventDefault()

    if (!file) return alert('Please select an image to upload')

    try {
      await mutation.mutateAsync(file)
      setPreview(null)
      setFile(null)
    } catch (err) {
      console.error('Upload failed:', err)
    }
  }

  console.log(images)

  return (
    <div className="relative parent flex max-w-7xl h-80 bg-white rounded-lg shadow-xl border">
      <div className="w-96">
        <h3 className="font-title p-5 py-3 text-4xl text-left">
          Uploaded Images
        </h3>
        <div>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.image_url}
              alt={`User's upload ${image.id}`}
            />
          ))}
        </div>
      </div>

      <div className="relative child right-0 mr-4 my-2 border-l pl-4 ml-auto">
        <div className="h-1/2">
          <p className="font-semibold">Upload preview:</p>
          {preview ? (
            <img
              src={preview}
              alt="upload preview"
              className="max-h-28 translate-y-1 mx-auto"
            />
          ) : (
            <p className="translate-y-12 italic">
              select your meows image 🐱👇
            </p>
          )}
        </div>

        <div className="min-w-80 min-h-24 flex items-center justify-center">
          {mutation.isPending ? (
            <p className="font-semibold mb-2 text-center">Uploading…</p>
          ) : (
            <Dropzone onUpload={handlePreview} />
          )}
        </div>

        <Button onClick={handleUpload}>Upload</Button>
      </div>
    </div>
  )
}
