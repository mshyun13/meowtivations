import connection from '../connection.ts'
import { UserData } from '@models/meowtivation.ts'

const db = connection

export async function createUserProfile(user: UserData) {
  await db('users').insert({
    // auth0_id: user.auth0_id,
    username: user.username,
    email: user.email,
    // avatar_url: user.avatar_url,
  })
  const data = await connection('users')
    .where('username', user.username)
    .select('id')
    .first()
  return Number(data.id)
}

export async function getUserProfile(id: number) {
  const result = await db('users')
    .select('username', 'email')
    .where('id', id)
    .first()
  return result
}
