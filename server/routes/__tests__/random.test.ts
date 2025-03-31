import {
  vi,
  describe,
  it,
  expect,
  beforeEach,
  afterAll,
  beforeAll,
} from 'vitest'
import request from 'supertest'
import { StatusCodes } from 'http-status-codes'

import connection from '../../db/connection.ts'
import server from '../../server.ts'

vi.mock('../../db/functions/meowtivations.ts', async () => {
  const actual = await vi.importActual('../../db/functions/meowtivations.ts')
  return {
    ...actual,
    getRandomMeowtivation: vi.fn(),
  }
})

import * as db from '../../db/functions/meowtivations.ts'

beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(() => {
  vi.clearAllMocks()
})

afterAll(async () => {
  await connection.destroy()
})

describe('GET /api/v1/meowtivations/random', () => {
  it('returns a random meowtivation', async () => {
    // ARRANGE
    const mockMeowtivation = {
      id: 1,
      imageUrl: 'https://example.com/cat.jpg',
      quoteText: 'Every day is a new opportunity to be pawsome!',
      quoteAuthor: 'Wise Cat',
      title: 'Pawsitive Thinking',
      userId: 1,
      likesCount: 42,
      isPublic: true,
      createdAt: '2024-01-01T00:00:00.000Z',
      updatedAt: '2024-01-01T00:00:00.000Z',
    }

    vi.mocked(db.getRandomMeowtivation).mockResolvedValue(mockMeowtivation)

    // ACT
    const response = await request(server).get('/api/v1/meowtivations/random')

    // ASSERT
    expect(response.status).toBe(StatusCodes.OK)
    expect(response.body).toEqual(mockMeowtivation)
    expect(db.getRandomMeowtivation).toHaveBeenCalledOnce()
  })

  it('returns 404 when no meowtivations exist', async () => {
    // ARRANGE
    vi.mocked(db.getRandomMeowtivation).mockResolvedValue(undefined)

    // ACT
    const response = await request(server).get('/api/v1/meowtivations/random')

    // ASSERT
    expect(response.status).toBe(StatusCodes.NOT_FOUND)
    expect(response.body).toEqual({
      error: 'No meowtivations found',
    })
  })

  it('returns 500 when database error occurs', async () => {
    // ARRANGE
    vi.mocked(db.getRandomMeowtivation).mockRejectedValue(
      new Error('Database error'),
    )

    // ACT
    const response = await request(server).get('/api/v1/meowtivations/random')

    // ASSERT
    expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
    expect(response.body).toEqual({
      error: 'Failed to fetch random meowtivation',
    })
  })
})
