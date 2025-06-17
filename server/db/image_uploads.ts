import connection from './connection'

export async function uploadImageToDb(upload: {
  user_id: number
  image_url: string
  caption: string
}) {
  return await connection('image_uploads')
    .insert({
      user_id: upload.user_id,
      image_url: upload.image_url,
      caption: upload.caption,
    })
    .returning('id')
}
