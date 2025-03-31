interface Props {
  id: number
}

function CommentsList({ id }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Comments: </h2>
      <p>Load comments for meowtivation: {id}</p>
    </>
  )
}

export default CommentsList
