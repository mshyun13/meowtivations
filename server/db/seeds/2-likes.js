export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('likes').del()

  // Inserts seed entries
  await knex('likes').insert([
    {
      id: 1,
      user_id: 1,
      meowtivation_id: 1,
    },
    {
      id: 2,
      user_id: 1,
      meowtivation_id: 2,
    },
    {
      id: 3,
      user_id: 1,
      meowtivation_id: 3,
    },
    {
      id: 4,
      user_id: 1,
      meowtivation_id: 4,
    },
    {
      id: 5,
      user_id: 1,
      meowtivation_id: 5,
    },
  ])
}
