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
    table.string('route')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('display')
}
