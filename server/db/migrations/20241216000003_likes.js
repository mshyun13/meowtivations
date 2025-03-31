/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('likes', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table
      .integer('meowtivation_id')
      .references('meowtivations.id')
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('likes')
}
