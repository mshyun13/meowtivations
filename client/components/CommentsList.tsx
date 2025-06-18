import { useQuery } from '@tanstack/react-query'
import { getCommentsByMeowtivationId } from '../apis/comments'
interface Props {
  id: number
}


function CommentsList({ id }: Props) {
  // component.tsx
const { data: comments, isPending, isError } = useQuery ({queryKey: ['comments', id], queryFn: ()=> getCommentsByMeowtivationId(id)})

if (isError) {
  return <p>😿 Cat-astrophic error! Try again later.</p>//Cat-astrophic error! Try again later... return <p>{error.message}</p>
}

if (isPending) {
  return <p>😼 Hang on, the server’s chasing a laser pointer...</p>//Hang on, the server’s chasing a laser pointer...{error.message}???
}

//  <h2>Pokémon in {data.main_region.name}:</h2>
//       <ul>
//         {data.pokemon_species.map((p) => (
//           <li key={p.url}>{p.name}</li>
//         ))}
//       </ul>

  return (
    <>
    {comments.map((comment) => (
      <p key={comment.id}> {comment.username}: {comment.content}</p>
    ))}
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments: </h2>
      <p>Load comments for meowtivation: {id}</p> */}
    </>
  )
}


export default CommentsList
