import { useParams } from 'react-router'
import PageTitle from '@/components/PageTitle'
import CommentsList from '@/components/CommentsList'
import Card from '@/components/Card'
import { useMeowtivation } from '@/hooks/use-meowtivation'

function Meowtivation() {
  const { id } = useParams()

  const { data: meowtivation, isError, isPending } = useMeowtivation()

  if (!id) {
    return <p>Invalid id!</p>
  }

  if (isPending) return <p>Loading your meowtivation...</p>
  if (isError) return <p>There was an error fetching your meowtivation</p>

  return (
    <>
      <PageTitle title="Random Meowtivation" />
      {/* Card component */}
      <div className="flex justify-center">
        <Card meowtivation={meowtivation} />
      </div>
      {/* refresh button */}
      <div className="flex gap-4 justify-center mt-6">
        <CommentsList id={Number(id)} />
      </div>
    </>
  )
}

export default Meowtivation
