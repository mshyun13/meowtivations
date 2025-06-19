import express from 'express'
import { StatusCodes } from 'http-status-codes'

import request from 'superagent'

import * as db from '../db/functions/meowtivations.ts'
import { ImageSuggestion } from '@models/meowtivation.ts'

const router = express.Router()

// GET /api/v1/meowtivations/random
router.get('/random', async (req, res) => {
  try {
    const meowtivation = await db.getRandomMeowtivation()

    if (!meowtivation) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: 'No meowtivations found',
      })
    }

    res.status(StatusCodes.OK).json(meowtivation)
  } catch (error) {
    console.error('Error fetching random meowtivation:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: 'Failed to fetch random meowtivation',
    })
  }
})
//CALLING THE API
router.get('/images', async (req, res) => {
  try {
    const kitty = await db.fetchRandomCatImage()
    res.json(kitty)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
      console.log('FAILED TO CALL THE_CAT_API')
    }
  }
})

//CALLING 5 IMAGES
router.get('/images/random', async (req, res) => {
  try {
    const kitties = await db.fetchFIVECatImages()
    res.json(kitties)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
      console.log('FAILED TO CALL 5 CAT IMAGES')
    }
  }
})

// TODO: Students to implement
// GET /api/v1/meowtivations - get all meowtivations
router.get('/', async (req, res) => {
  // Implement: Get all public meowtivations with pagination
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

// TODO: Students to implement
// GET /api/v1/meowtivations/:id - get specific meowtivation
router.get('/:id', async (req, res) => {
  // Implement: Get meowtivation by ID with proper error handling
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

router.post('/', async (req, res) => {
  try {
    const result = await db.createMeowtivation(req.body)
    res.status(201).json({ result }) //Making it an object might be bad, note if crap hits the fan.
  } catch (error) {
    console.error('Chicken jockey ' + error)
    res.status(500)
  }
})

// TODO: Students to implement
// PUT /api/v1/meowtivations/:id - update meowtivation
router.put('/:id', async (req, res) => {
  // Implement: Update existing meowtivation with authorization check
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

router.patch('/:id/like', async (req, res) => {
  const meowtivationId = Number(req.params.id)

  if (isNaN(meowtivationId)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid meowtivation ID' })
  }
  try {
    const userId = 1 // Temporary hardcoded user ID
    const updatedLikes = await db.toggleLike(meowtivationId, userId)
    res.status(StatusCodes.OK).json({ likesCount: updatedLikes })
  } catch (error) {
    console.error('Error toggling like:', error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to toggle like' })
  }
})

// TODO: Students to implement
// DELETE /api/v1/meowtivations/:id - delete meowtivation
router.delete('/:id', async (req, res) => {
  // Implement: Delete meowtivation with authorization check
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

export default router
