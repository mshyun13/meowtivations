import connection from '../connection.ts'
import { Meowtivation, MeowtivationData } from '../../../models/meowtivation.ts'

const db = connection

export async function getRandomMeowtivation(): Promise<
  Meowtivation | undefined
> {
  const meowtivation = await db('meowtivations')
    .join('users', 'users.id', 'meowtivations.user_id')
    .orderByRaw('RANDOM()')
    .select(
      'meowtivations.id',
      'image_url as imageUrl',
      'quote_text as quoteText',
      'users.username as quoteAuthor',
      'title',
      'user_id as userId',
      'likes_count as likesCount',
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
