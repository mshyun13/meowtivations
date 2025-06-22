import connection from '../connection.ts'
import { Meowtivation, MeowtivationData} from '../../../models/meowtivation.ts'
import request from 'superagent'
import { ImageSuggestion } from '../../../models/meowtivation.ts'
import { GoogleGenAI, Type } from '@google/genai'

import 'dotenv/config'

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

export async function toggleLike(
  meowtivationId: number,
  userId: number,
): Promise<number> {
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
      meowtivation_id: meowtivationId,
      user_id: userId,
    })

    await db('meowtivations')
      .where({ id: meowtivationId })
      .increment('likes_count', 1)
  }
  const updated = await db('meowtivations')
    .where({ id: meowtivationId })
    .select('likes_count')
    .first()

  return updated.likes_count
}

export async function fetchRandomCatImage(): Promise<ImageSuggestion> {
  const response = await request.get(
    `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}`,
  )
  return response.body as ImageSuggestion
}

export async function fetchFIVECatImages(): Promise<ImageSuggestion> {
  const response = await request.get(
    `https://api.thecatapi.com/v1/images/search?limit=5&api_key=${process.env.CAT_API_KEY}`,
  )
  return response.body as ImageSuggestion
}

export async function geminiQuote(): Promise<string | unknown> {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents:
      "Give me an inspiring quote about either success, dreams, determination, growth, or wisdom and include the author's name and give it a title that relates to it.",
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            text: { type: Type.STRING },
            author: { type: Type.STRING },
          },
          propertyOrdering: ['title', 'text', 'author'],
        },
        minItems: 5,
        maxItems: 5,
      },
    },
  })
  return response.text
}