import connection from '../connection.ts'
import { Meowtivation, MeowtivationData } from '../../../models/meowtivation.ts'
import request from 'superagent'
import { ImageSuggestion } from '../../../models/meowtivation.ts'

const db = connection

export async function getRandomMeowtivation(): Promise<
  Meowtivation | undefined
> {
  const meowtivation = await db('meowtivations')
    .where('is_public', true)
    .orderByRaw('RANDOM()')
    .select(
      'id',
      'image_url as imageUrl',
      'quote_text as quoteText',
      'quote_author as quoteAuthor',
      'title',
      'user_id as userId',
      'likes_count as likesCount',
      'is_public as isPublic',
      'created_at as createdAt',
      'updated_at as updatedAt',
    )
    .first()

  return meowtivation as Meowtivation | undefined
}

// TODO:
export async function getAllMeowtivations(): Promise<Meowtivation[]> {
  // Implement: Get all public meowtivations, ordered by created_at DESC
  throw new Error('Not implemented yet')
}

// TODO:
export async function getMeowtivationById(
  id: number,
): Promise<Meowtivation | undefined> {
  // Implement: Get a specific meowtivation by ID
  throw new Error('Not implemented yet')
}

// TODO:
export async function createMeowtivation(
  meowtivation: MeowtivationData,
): Promise<Meowtivation> {
  // Implement: Create a new meowtivation and return it with generated ID and timestamps
  throw new Error('Not implemented yet')
}

// TODO:
export async function updateMeowtivation(
  id: number,
  updates: Partial<MeowtivationData>,
): Promise<Meowtivation | undefined> {
  // Implement: Update an existing meowtivation and return the updated record
  throw new Error('Not implemented yet')
}

// TODO:
export async function deleteMeowtivation(id: number): Promise<boolean> {
  // Implement: Delete a meowtivation and return true if successful
  throw new Error('Not implemented yet')
}

export async function fetchRandomCatImage(): Promise<ImageSuggestion> {
  const response = await request.get(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}`,
  )
  return response.body as ImageSuggestion
}

export async function fetchFIVECatImages(): Promise<ImageSuggestion> {
  const response = await request.get(
    ` https://api.thecatapi.com/v1/images/search?limit=5api_key=${process.env.CAT_API_KEY}`,
  )
  return response.body as ImageSuggestion
}
