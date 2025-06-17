import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import multer from 'multer'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let publicId

    if (file && typeof file.originalname === 'string') {
      // 1. Get the original filename (e.g., "my_photo.jpg")
      const originalFileName = file.originalname

      // 2. Remove the file extension (e.g. "my_photo")
      const nameWithoutExtension = originalFileName
        .split('.')
        .slice(0, -1) // -1 starts from the end of the array
        .join('.')

      // 3. Sanitize the filename to be URL-friendly: replace non-alphanumeric characters (except hyphens) with hyphens, and converts to lowercase.
      const sanitizedName = nameWithoutExtension
        .replace(/[^a-zA-Z0-9-]/g, '-')
        .toLowerCase()

      // 4. Add a timestamp for uniqueness
      const timestamp = Date.now()

      // 5. construct the public_id
      // publicId = `${sanitizedName}-${timestamp}`

      // option to include user info later:
      const username = req.user?.username || 'user1' // req.user.username needs to be present (check this later)
      publicId = `user-${username}-${sanitizedName}-${timestamp}`
    } else {
      // if no originalname, prompt warning and create a unique default
      console.warn(
        'file.originalname was not available. Using a default public_id.',
      )

      publicId = `uploaded-file-${Date.now()}`
    }

    return {
      folder: 'uploads',
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
      transformation: [{ width: 1000, crop: 'limit', fetch_format: 'auto' }],
      resource_type: 'auto',
      public_id: publicId,
      overwrite: false, // Allows preventing overwrites if public_id already exists (for edge case where same file name is uploaded at exact same time??)
    }
  },
})

// File type validation here (look into client side validation as well)
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // limits file size to 10 MB
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'video/mp4',
    ]

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true) // Accept file
    } else {
      cb(new Error('Unsupported file type. Allowed types: jpg, png, webp, mp4')) // Reject file
    }
  },
})

export default upload
