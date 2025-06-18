import connection from './connection'

export async function uploadImageToDb(upload: {
  user_id: number
  image_URL: string
  caption: string
}) {
  return await connection('image_uploads')
    .insert({
      user_id: upload.user_id,
      image_url: upload.image_URL,
      caption: upload.caption,
    })
    .returning('id')
}

export async function getUserUploads(user_id: string) {
  return await connection('image_uploads').where({ user_id }).select('*')
}
