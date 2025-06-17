import connection from '../connection.ts'

const db = connection

export default async function getAuthUser(authId) {
  const user = db('users').where('auth0_id', authId).select()
  return user
}
