import request from 'superagent'
import { Meowtivation, MeowtivationData } from '../../models/meowtivation.ts'

const rootUrl = new URL('/api/v1', document.baseURI)

export async function getRandomMeowtivation(): Promise<Meowtivation> {
  const response = await request.get(`${rootUrl}/meowtivations/random`)
  return response.body as Meowtivation
}

// TODO: To be implemented
export async function getAllMeowtivations(): Promise<Meowtivation[]> {
  // Implement: Get all meowtivations from /meowtivations endpoint
  throw new Error('Not implemented yet')
}

// TODO: To be implemented
export async function getMeowtivationById(id: number): Promise<Meowtivation> {
  // Implement: Get specific meowtivation from /meowtivations/:id endpoint
  throw new Error('Not implemented yet')
}

// TODO: To be implemented
export async function createMeowtivation(
  meowtivation: MeowtivationData,
): Promise<Meowtivation> {
  try {
    const response = await request
      .post(`${rootUrl}/meowtivations`)
      .send(meowtivation)
    return response.body as Meowtivation
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to create meowtivation:', error.message)
      throw error
    } else {
      console.error('Unknown error creating meowtivation')
      throw new Error('Unknown error occurred')
    }
  }
}

// TODO: To be implemented
export async function updateMeowtivation(
  id: number,
  updates: Partial<MeowtivationData>,
): Promise<Meowtivation> {
  // Implement: PUT to /meowtivations/:id endpoint
  throw new Error('Not implemented yet')
}

// TODO: To be implemented
export async function deleteMeowtivation(id: number): Promise<void> {
  // Implement: DELETE to /meowtivations/:id endpoint
  throw new Error('Not implemented yet')
}
