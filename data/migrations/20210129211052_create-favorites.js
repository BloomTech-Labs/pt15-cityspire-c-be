exports.up = function (knex) {
  return knex.schema.crateTable('favorites', function (table) {
    table.increments('id').notNullable().unique().primary();
    table
      .integer('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('lat').notNullable();
    table.string('lng').notNullable();
    table.string('city_id').unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('favorites');
};
