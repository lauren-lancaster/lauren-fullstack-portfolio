/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('display', (table) => {
    table.increments('id')
    table.string('school')
    table.string('group')
    table.string('complete')
    table.string('title')
    table.string('description')
    table.string('github')
    table.string('url')
    table.string('created_at')
    table.string('tech')
    table.string('full_description')
    table.string('reflections')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('display')
}
