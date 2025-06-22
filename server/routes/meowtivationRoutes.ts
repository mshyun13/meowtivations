import express from 'express'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/functions/meowtivations.ts'
import { Meowtivation } from '@models/meowtivation.ts'

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

//GET /api/v1/meowtivations/quotes/random - get random ai quote
router.get('/quotes/random', async (req, res) => {
  try {
    const result = await db.geminiQuote()
    res.json(JSON.parse(result as string))
  } catch (error) {
    console.error('Could not create ai call', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.get('/filter/:filter?', async (req, res) => {
  try {
    const filter = req.params.filter
    let meowtivations: Meowtivation[] = []
    if (filter === 'popularSort') {
      meowtivations = await db.getAllMeowtivations('popular')
    } else if (filter === 'randomSort') {
      meowtivations = await db.getAllMeowtivations('random')
    } else {
      meowtivations = await db.getAllMeowtivations('recent')
    }
    res.status(200).json({ meowtivations })
  } catch (error) {
    console.error('Could not grab all meowtivations. ' + error)
    res.status(500)
  }
})

// GET /api/v1/meowtivations/:id/comments - get specific meowtivation
router.get('/:id/comments', async (req, res) => {
  try {
    const id = Number(req.params.id) // can't convert 'a' to a number but we can convert '1' to 1
    const comments = await db.getCommentsByMeowtivationId(id)
    if (!comments) {
      res.status(400)
      return
    }

    // ...
    res.status(200).json(comments)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('unknown error')
    }
    res.status(500).json({
      error: `Something went wrong.`,
    })
  }
})

// POST /api/v1/meowtivations/:id/comments - post new comments

router.post('/:id/comments'),
  async (req, res) => {
    try {
      const id = Number(req.params.id)
      const { userId, comment } = req.body

      const newComment = { meowtivationId: id, userId, comment }
      const savedComment = await db.addComment(newComment)
      res.status(201).json(savedComment)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('unknown error')
      }
      res.status(500).json({
        error: `Something went wrong.`,
      })
    }
  }

// GET /api/v1/meowtivations/:id - get specific meowtivation
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const meowtivation = await db.getMeowtivationById(id)

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
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Invalid meowtivation ID' })
  }
  try {
    const userId = 1 // Temporary hardcoded user ID
    const updatedLikes = await db.toggleLike(meowtivationId, userId)
    res.status(StatusCodes.OK).json({ likesCount: updatedLikes })
  } catch (error) {
    console.error('Error toggling like:', error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Failed to toggle like' })
  }
})

// TODO: Students to implement
// DELETE /api/v1/meowtivations/:id - delete meowtivation
router.delete('/:id', async (req, res) => {
  // Implement: Delete meowtivation with authorization check
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ error: 'Not implemented yet' })
})

export default router
