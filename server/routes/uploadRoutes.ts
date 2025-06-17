import express from 'express'
import upload from '../middleware/multer.config'

const router = express.Router()

router.post('/', upload.single('media'), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ error: 'No file uploaded or invalid file type' })
  }

  try {
    res.json({
      message: 'Upload successful',
      cloudinaryUrl: req.file?.path,
      publicId: req.file?.filename,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Upload failed: internal server error')
  }
})

export default router
