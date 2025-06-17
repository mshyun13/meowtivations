import PageTitle from '@/components/PageTitle'
import { MeowtivationData } from '@models/meowtivation.ts'
import { useState } from 'react'

// Initial state based on database fields
const initialState: MeowtivationData = {
  imageUrl: '',
  quoteText: '',
  quoteAuthor: '',
  title: '',
  userId: '',
  isPublic: true,
}

const images = ['1', '2', '3', '4', '5']

export default function Create() {
  const [selectedImage, setSelectedImage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault
    if (!selectedImage) {
      setError('Select Image')
      return
    }
  }
  return (
    <>
      <div>
        <PageTitle title="Meowtivate" />
        <div className="text-center p-8">
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Choose image</h2>
              {images.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedImage(cat)}
                  className={`border-4 rounded ${selectedImage === cat ? 'border-pink-500' : 'border-transparent'}`}
                >
                  <img src={cat} alt={`funny cat haha ${cat}`} />
                </button>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
