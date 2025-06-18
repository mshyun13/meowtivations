import { useDropzone } from 'react-dropzone'

export default function ImageUpload({ onUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0])
      }
    },
  })

  return (
    <div
      {...getRootProps()}
      className={`p-8 border-2 border-dashed rounded-xl text-center mb-3 ${
        isDragActive ? 'bg-blue-100' : ''
      }`}
    >
      <input {...getInputProps()} />
      <p>Drag and drop image, or click to select</p>
    </div>
  )
}
