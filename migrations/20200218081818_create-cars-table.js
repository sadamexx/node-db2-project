
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('Make', 128)
        .notNullable();
      tbl.text('Model', 128)
        .notNullable();
      tbl.integer('Vin', 128)
        .notNullable()
        .unique();
      tbl.integer('Mileage', 128)
      .notNullable();
      tbl.integer('Year', 128);
      tbl.text('Transmission_Type', 128);
      tbl.text('Title_Status', 128);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
