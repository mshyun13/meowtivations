import { useQuery } from '@tanstack/react-query'
import { getCommentsByMeowtivationId } from '../apis/comments'
interface Props {
  id: number
}

function CommentsList({ id }: Props) {
  // component.tsx
  const {
    data: comments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getCommentsByMeowtivationId(id),
  })

  if (isError) {
    return <p>😿 Cat-astrophic error! Try again later.</p> //Cat-astrophic error! Try again later... return <p>{error.message}</p>
  }

  if (isPending) {
    return <p>😼 Hang on, the server’s chasing a laser pointer...</p> //Hang on, the server’s chasing a laser pointer...{error.message}???
  }

  return (
    <div className="space-y-2">
      <div className="flex  items-center gap-2 ">
        <input
          type="text"
          placeholder="Love it!"
          className="flex-1 px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="btn btn-primary w-24 px-4 py-2 text-white rounded">
          Add
        </button>
      </div>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {comment.userId}: {comment.comment}
        </div>
      ))}
    </div>
  )
}

export default CommentsList
