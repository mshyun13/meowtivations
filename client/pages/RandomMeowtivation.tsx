import { Button } from '@/components/Button'
import PageTitle from '@/components/PageTitle'
import useRandomMeowtivation from '@/hooks/use-random-meowtivation'
import { useNavigate } from 'react-router'

function RandomMeowtivation() {
  const {
    data: meowtivation,
    isError,
    isPending,
    refetch,
  } = useRandomMeowtivation()
  const navigate = useNavigate()

  if (isPending) return <p>Loading your meowtivation...</p>
  if (isError) return <p>There was an error fetching your meowtivation</p>

  const handleViewDetails = () => {
    navigate(`/meowtivations/${meowtivation?.id}`)
  }

  const handleGetAnother = () => {
    refetch()
  }

  return (
    <>
      <PageTitle title="Random Meowtivation" />
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="aspect-[3/2] w-full overflow-hidden rounded bg-black">
          <img
            src={meowtivation?.imageUrl}
            alt="Motivational cat"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center p-8 max-w-3xl mx-auto">
          {meowtivation?.title && (
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {meowtivation.title}
            </h3>
          )}
          <blockquote className="text-xl italic text-gray-700 mb-4">
            {`"${meowtivation?.quoteText}"`}
          </blockquote>
          {meowtivation?.quoteAuthor && (
            <p className="text-right w-full text-sm text-gray-500 mb-4">
              — {meowtivation.quoteAuthor}
            </p>
          )}

          <div className="flex gap-4 justify-center">
            <Button onClick={handleViewDetails}>View Details</Button>
            <Button onClick={handleGetAnother}>Get Another</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RandomMeowtivation
