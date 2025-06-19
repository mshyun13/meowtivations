import request from 'superagent'
import { Comment } from '@models/meowtivation'

const rootUrl = new URL('/api/v1', document.baseURI)

// apis/fruits.ts
export async function getCommentsByMeowtivationId(id: number) {
  const response = await request
    .get(`${rootUrl}/meowtivations/${id}/comments`)

  return response.body as Comment[]
}


 
