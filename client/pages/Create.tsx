import PageTitle from '@/components/PageTitle'
import { useCreateMeowtivation } from '@/hooks/useCreateMeowtivation'
import { MeowtivationData, QuoteSuggestion } from '@models/meowtivation.ts'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useQuery } from '@tanstack/react-query'
import { getRandomImages, getRandomQuotes } from '@/apis/suggestions'
import ImageUpload from '@/components/image upload/ImageUpload'

export default function Create() {
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedQuote, setSelectedQuote] = useState<QuoteSuggestion | null>(
    null,
  )
  const [error, setError] = useState('')

  const { data: images, ...imageSuggestions } = useQuery({
    queryKey: ['imageSuggestions'],
    queryFn: getRandomImages,
    refetchOnWindowFocus: false,
  })

  const { data: quotes, ...quoteSuggestions } = useQuery({
    queryKey: ['quoteSuggestions'],
    queryFn: getRandomQuotes,
    refetchOnWindowFocus: false,
  })

  const mutation = useCreateMeowtivation()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedImage || !selectedQuote) {
      setError('Select Image and Quote')
      return
    }
    const newMeowtivation: MeowtivationData = {
      userId: 1,
      imageUrl: selectedImage,
      title: selectedQuote.title,
      quoteText: selectedQuote.text,
    }

    mutation.mutate(newMeowtivation)

    setSelectedImage('')
    setSelectedQuote(null)
    setError('')
    imageSuggestions.refetch()
    quoteSuggestions.refetch()
  }

  if (imageSuggestions.error) {
    return <>Unable to load images</>
  }

  if (quoteSuggestions.error) {
    return <>Unable to load images</>
  }

  return (
    <>
      <div>
        <PageTitle title="Create Meowtivation!" />
        <div className="text-center p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="max-w-xl mx-auto my-4">
                <Alert variant="destructive">
                  <AlertTitle>Oops!</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </div>
            )}
            {/* Choose Image */}

            <div>
              <h2 className="mb-4 mt-2 font-title text-4xl font-bold tracking-wide text-primary text-left">
                Choose image
              </h2>
              {imageSuggestions.isPending || !images ? (
                <p>loading...</p>
              ) : (
                images.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedImage(cat.url)}
                    className={`border-4 rounded m-1 ${selectedImage === cat.url ? 'border-primary' : 'border-border'}`}
                  >
                    <img
                      src={cat.url}
                      alt={`funny cat haha ${cat}`}
                      className="h-32 w-auto"
                    />
                  </button>
                ))
              )}
            </div>

            {/* select from user uploads  */}
            <ImageUpload
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />

            {/* Choose Quote */}

            <div>
              <h2 className="mb-4 mt-2 font-title text-4xl font-bold tracking-wide text-primary text-left">
                Choose quote
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quoteSuggestions.isPending || !quotes ? (
                  <p>loading...</p>
                ) : (
                  quotes.map((quote) => (
                    <button
                      key={quote.title}
                      type="button"
                      onClick={() => setSelectedQuote(quote)}
                      className={`border-4 rounded p-2 m-1 w-full text-left ${selectedQuote?.title === quote.title ? 'border-primary' : 'border-border'}`}
                    >
                      <p className="font-semibold">{quote.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {quote.text}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex gap-4 mt-6 justify-center">
              <button
                type="submit"
                className="btn btn-primary px-8 py-4 text-white font-semibold rounded-xl shadow"
              >
                Create Meowtivation
              </button>
              <button
                type="button"
                className="btn btn-secondary px-8 py-4 text-white font-semibold rounded- shadow"
                onClick={() => {
                  setSelectedImage('')
                  setSelectedQuote(null)
                  setError('')
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
