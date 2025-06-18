import request from "superagent"

export async function patchLike(id: number) {
  const res = await request.patch(`/api/v1/meowtivations/${id}/like`)
  return res.body.likesCount
}