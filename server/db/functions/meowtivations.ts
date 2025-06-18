import connection from '../connection.ts'
import { Meowtivation, MeowtivationData } from '../../../models/meowtivation.ts'

const db = connection

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

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

export async function getAllMeowtivations(sort?: string) {
  if (sort === 'popular') {
    return db('meowtivations').orderBy('likes_count')
  } else if (sort === 'random') {
    return db('meowtivations').orderByRaw('RANDOM()')
  } else {
    return db('meowtivations').orderBy('created_at')
  }
}

// TODO:
export async function getMeowtivationById(
  id: number,
): Promise<Meowtivation | undefined> {
  // Implement: Get a specific meowtivation by ID
  throw new Error('Not implemented yet')
}

export async function createMeowtivation(
  meowtivation: MeowtivationData,
): Promise<Meowtivation> {
  return db('meowtivations')
    .insert({
      image_url: meowtivation.imageUrl,
      quote_text: meowtivation.quoteText,
      title: meowtivation.title,
      user_id: meowtivation.userId,
    })
    .returning([
      'id',
      'image_url as imageURL',
      'quote_text as quoteText',
      'title',
      'user_id as userId',
      'likes_count as likesCount',
      'created_at as createdAt',
      'updated_at as updatedAt',
    ])
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
