import { useState } from 'react'
import { Button } from '../Button'
import Dropzone from './Dropzone'

export default function ImageUpload() {
  const [preview, setPreview] = useState<null | string>(null)

  const handlePreview = (file: File) => {
    if (!file) {
      setPreview(null)
      return
    }

    const previewURL = URL.createObjectURL(file)
    setPreview(previewURL)
  }

  const handleUpload = () => {}

  return (
    <div className="relative parent flex max-w-7xl h-80 bg-white rounded-lg shadow-xl border">
      <div className="w-96">
        <h3 className="font-title p-5 py-3 text-4xl text-left">
          Uploaded Images
        </h3>
        <div>{/* diplay user uploads here */}</div>
      </div>

      <div className="relative child right-0 flex-column mr-4 my-2 border-l pl-4 max-w-sm ml-auto">
        <div className="h-1/2">
          <p className="font-semibold">Upload preview:</p>
          {preview ? (
            <img
              src={preview}
              alt="upload preview"
              className="max-h-28 translate-y-1 mx-auto"
            />
          ) : (
            <p className="translate-y-8 italic">No preview available</p>
          )}
        </div>
        <Dropzone onUpload={handlePreview} />
        <Button onClick={handleUpload}>Upload</Button>
      </div>
    </div>
  )
}
