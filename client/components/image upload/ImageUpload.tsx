import { useState } from 'react'
import { Button } from '../Button'
import Dropzone from './Dropzone'
import useUploadImage from '@/hooks/use-image-upload'
import useGetUserUploads from '@/hooks/use-get-user-uploads'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'

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
    <div className="flex max-w-7xl h-80 bg-white rounded-lg shadow-xl border">
      <div className="w-[660px]">
        <h3 className="font-title p-5 py-3 text-4xl text-left">
          Uploaded Images
        </h3>
        <Swiper
          modules={[FreeMode, Mousewheel, Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          grabCursor={true}
          freeMode={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          className="relative w-[600px] h-64 rounded "
        >
          {images.reverse().map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.image_url}
                alt={`User's upload ${image.id}`}
                className="object-contain w-full h-full rounded -translate-y-8"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-100 right-0 mr-4 my-2 border-l pl-4">
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
