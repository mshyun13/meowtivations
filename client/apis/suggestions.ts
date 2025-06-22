import { ImageSuggestion, QuoteSuggestion } from '@models/meowtivation'
import request from 'superagent'

const rootUrl = new URL('/api/v1', document.baseURI)

export async function getRandomImages(): Promise<ImageSuggestion[]> {
  const response = await request.get(`${rootUrl}/meowtivations/images/random`)
  return response.body
}

export async function getRandomQuotes(): Promise<QuoteSuggestion[]> {
  const response = await request.get(`${rootUrl}/meowtivations/quotes/random`)
  return response.body
}
