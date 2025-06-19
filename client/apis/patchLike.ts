import request from 'superagent'

const rootUrl = new URL('/api/v1', document.baseURI)

export async function patchLike(id: number) {
  const res = await request.patch(`${rootUrl}/meowtivations/${id}/like`)
  return res.body.likesCount
}
