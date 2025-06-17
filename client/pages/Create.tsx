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
    if (!selectedImage || !selectedQuote) {
      setError('Select Image')
      return
    }
  }

  return (
    <>
      <div>
        <PageTitle title="Create Meowtivation!" />
        <div className="text-center p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Choose Image */}
            <div>
              <h2 className="mb-4 mt-2 font-title text-4xl font-bold tracking-wide text-primary text-left">
                Choose image
              </h2>
              {images.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedImage(cat)}
                  className={`border-4 rounded m-1 ${selectedImage === cat ? 'border-primary' : 'border-border'}`}
                >
                  <img
                    src={cat}
                    alt={`funny cat haha ${cat}`}
                    className="h-32 w-auto"
                  />
                </button>
              ))}
            </div>
            {/* Choose Quote */}

            <div>
              <h2 className="mb-4 mt-2 font-title text-4xl font-bold tracking-wide text-primary text-left">
                Choose quote
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quotes.map((quote) => (
                  <button
                    key={quote.title}
                    type="button"
                    onClick={() => setSelectedQuote(quote)}
                    className={`border-4 rounded p-2 m-1 w-full text-left ${selectedQuote?.title === quote.title ? 'border-primary' : 'border-border'}`}
                  >
                    <p className="font-semibold">{quote.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {quote.subText}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex gap-4 mt-4 justify-centre">
              <button type="submit" className="btn btn-primary">
                Create Meowtivation
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedImage('')
                  setSelectedQuote(null)
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
