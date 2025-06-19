export function up(knex) {
  return knex.schema.createTable('meowtivations', (table) => {
    table.increments('id').primary()
    table.text('image_url').notNullable()
    table.text('quote_text').notNullable()
    table.string('title')
    table
      .integer('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable()
    table.integer('likes_count').defaultTo(0)
    table.integer('share_count').defaultTo(0)
    table.timestamps(true, true) // Sets default timestamps for created_atand updated_at to now
  })
}

export function down(knex) {
  return knex.schema.dropTable('meowtivations')
}
