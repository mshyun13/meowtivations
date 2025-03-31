/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      auth0_id: 'auth0|1',
      username: 'catLover6',
      email: 'cat.lover@example.com',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=catLover6',
    },
    {
      id: 2,
      auth0_id: 'auth0|2',
      username: 'LovelyPaw',
      email: 'pawsome@example.com',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LovelyPaw',
    },
    {
      id: 3,
      auth0_id: 'auth0|3',
      username: 'meowmewo',
      email: 'meow.master@example.com',
      avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=meowmewo',
    },
  ])
}
