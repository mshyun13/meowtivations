import PageTitle from '@/components/PageTitle'
import { MeowtivationData } from '@models/meowtivation.ts'
import { title } from 'node:process'
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

const quotes = [
  { title: 'Nothing selected', subText: "You shouldn't be seeting this" },
  { title: 'Nothing selected 2', subText: "You shouldn't be seeting this 2" },
  { title: 'Nothing selected 3', subText: "You shouldn't be seeting this 3" },
  { title: 'Nothing selected 4', subText: "You shouldn't be seeting this 4" },
  { title: 'Nothing selected 5', subText: "You shouldn't be seeting this 5" },
]

interface Quote {
  title: string
  subText: string
}

export default function Create() {
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
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
                  className={`border-4 rounded ${selectedImage === cat ? 'border-green' : 'border-black-5'}`}
                >
                  <img src={cat} alt={`funny cat haha ${cat}`} />
                </button>
              ))}
            </div>
            <div>
              <h2>Choose quote</h2>
              {quotes.map((quote) => (
                <button
                  key={quote.title}
                  type="button"
                  onClick={() => setSelectedQuote(quote)}
                  className={`border-4 rounded ${selectedQuote === quote ? 'border-green' : 'border-black-5'}`}
                >
                  <p>{quote.title}</p>
                  <p>{quote.subText}</p>
                </button>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
