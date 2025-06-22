import express, { json } from 'express'
import upload from '../middleware/multer.config'
import { getUserUploads, uploadImageToDb } from '../db/image_uploads'

const router = express.Router()

const mockUserId = 1 // mock user ID (REPLACE LATER)

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: 'No file uploaded or invalid file type' })
  }

  try {
    // Save to DB using mock user
    await uploadImageToDb({
      user_id: mockUserId,
      image_URL: req.file.path, // Cloudinary URL
      caption: req.body.caption || null,
    })

    res.json({
      message: 'Upload successful',
      cloudinaryUrl: req.file.path,
      publicId: req.file.filename,
    })
  } catch (err) {
    console.error('Upload failed:', err)
    res.status(500).send('Upload failed: internal server error')
  }
})

router.get('/', async (req, res) => {
  const id = mockUserId // change later

  try {
    const userUploads = await getUserUploads(id)
    return res.json(userUploads)
  } catch (err) {
    console.error(err)
    res.status(500).send('Request failed: internal server error')
  }
})

export default router
