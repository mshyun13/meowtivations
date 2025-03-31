import { useParams } from 'react-router'
import PageTitle from '@/components/PageTitle'
import CommentsList from '@/components/CommentsList'

function Meowtivation() {
  const { id } = useParams()

  if (!id) {
    return <p>Invalid id!</p>
  }

  return (
    <>
      <PageTitle title={`Meowtivation ${id}`} />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Meowtivation Details
          </h2>
          <p className="text-gray-600 mb-4">
            This is a stub component for viewing individual meowtivation cards.
          </p>
          <p className="text-sm text-gray-500">ID: {id}</p>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800">
              <strong>TODO for students:</strong> Implement the full
              meowtivation detail view
            </p>
            <ul className="text-left text-yellow-700 mt-2 text-sm">
              <li>• Fetch meowtivation data by ID</li>
              <li>• Display image, quote, and details</li>
              <li>• Add like/comment functionality</li>
              <li>• Handle loading and error states</li>
            </ul>
          </div>
          <CommentsList id={Number(id)} />
        </div>
      </div>
    </>
  )
}

export default Meowtivation
