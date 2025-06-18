export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()

  // Inserts seed entries
  await knex('comments').insert([
    {
      id: 1,
      meowtivation_id: 1,
      user_id: 2,
      comment:
        "This really brightened my day! I'm feeling pawsitively inspired! 😺",
    },
    {
      id: 2,
      meowtivation_id: 1,
      user_id: 3,
      comment:
        'Your meowtivational posts always make me smile. Keep them coming! 🐱',
    },
    {
      id: 3,
      meowtivation_id: 2,
      user_id: 3,
      comment:
        'Inner peace is so important. This reminds me to take a moment and just breathe... and maybe purr a little 😌',
    },
    {
      id: 4,
      meowtivation_id: 3,
      user_id: 1,
      comment: 'I needed this reminder today! Time to chase those dreams! 🌟',
    },
    {
      id: 5,
      meowtivation_id: 3,
      user_id: 2,
      comment:
        'This is purrfect motivation for my morning! Starting the day with positive vibes 🌅',
    },
    {
      id: 6,
      meowtivation_id: 4,
      user_id: 3,
      comment:
        'Nothing beats a good cat nap to reset your energy! Wise words 😴',
    },
    {
      id: 7,
      meowtivation_id: 5,
      user_id: 2,
      comment:
        'Simple but powerful message. Being yourself is always the best policy 💖',
    },
    {
      id: 8,
      meowtivation_id: 5,
      user_id: 1,
      comment:
        'Love how this combines wisdom with our feline friends! Great meowtivation! 🐾',
    },
  ])
}
