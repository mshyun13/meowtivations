export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('meowtivations').del()

  // Inserts seed entries
  await knex('meowtivations').insert([
    {
      id: 1,
      image_url: 'https://cdn2.thecatapi.com/images/MTg3MjE2OQ.jpg',
      quote_text: 'Every day is a new opportunity to be pawsome!',
      title: 'Pawsitive Thinking',
      user_id: 1,
      likes_count: 42,
    },
    {
      id: 2,
      image_url: 'https://cdn2.thecatapi.com/images/c2d.jpg',
      quote_text: 'Life is better when you purr through the challenges.',
      title: 'Inner Peace',
      user_id: 1,
      likes_count: 28,
    },
    {
      id: 3,
      image_url: 'https://cdn2.thecatapi.com/images/e35.jpg',
      quote_text: 'Chase your dreams like you chase laser pointers!',
      title: 'Never Give Up',
      user_id: 1,
      likes_count: 67,
    },
    {
      id: 4,
      image_url: 'https://cdn2.thecatapi.com/images/b1p.jpg',
      quote_text: 'Sometimes you just need to take a cat nap and start fresh.',
      title: 'Rest and Recharge',
      user_id: 1,
      likes_count: 35,
    },
    {
      id: 5,
      image_url: 'https://cdn2.thecatapi.com/images/duh.jpg',
      quote_text: 'Be curious, be brave, be yourself.',
      title: 'Simple Wisdom',
      user_id: 1,
      likes_count: 19,
    },
  ])
}
