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
    <>
      {comments.map((comment) => (
        <p key={comment.id}>
          {' '}
          {comment.userId}: {comment.comment}
        </p>
      ))}
    </>
  )
}

export default CommentsList
