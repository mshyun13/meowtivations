import { Button } from '@/components/Button'
import PageTitle from '@/components/PageTitle'
import Card from '@/components/Card'
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
      {/* Card component */}
      <div className='flex justify-center'>
      <Card meowtivation={meowtivation} onClick={handleViewDetails} />
      </div>
      {/* refresh button */}
      <div className='flex gap-4 justify-center mt-6'>
        <Button onClick={handleGetAnother} >
          Get Another
        </Button>
      </div>
    </>
  )
}

export default RandomMeowtivation
