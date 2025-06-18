import connection from '../connection.ts'
import { Meowtivation, MeowtivationData } from '../../../models/meowtivation.ts'
import Meowtivation from '@/pages/Meowtivation.tsx'

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

export async function toggleLike(
  meowtivationId: number,
  userId: number
): Promise<void> {
  const existingLike = await db('likes')
  .where({ meowtivation_id: meowtivationId, user_id: userId })
  .first()

  if (existingLike) {
    //Unlike
    await db('likes')
    .where({ meowtivation_id: meowtivationId, user_id: userId })
    .delete()

    await db('meowtivations')
    .where({ id: meowtivationId })
    .decrement('likes_count', 1)
  } else {
    //like
    await db('likes').insert({
      Meowtivation_id: meowtivationId,
      user_id: userId,
    })
    
    await db('meowtivations')
    .where({ id: meowtivationId })
    .increment('likes_count', 1)
  }
}
