export function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table
      .integer('meowtivation_id')
      .references('meowtivations.id')
      .onDelete('CASCADE')
    table
      .integer('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .notNullable()
    table.text('comment').notNullable()
    table.timestamps(true, true) // Sets default timestamps for created_atand updated_at to now
  })
}

export function down(knex) {
  return knex.schema.dropTable('comments')
}
