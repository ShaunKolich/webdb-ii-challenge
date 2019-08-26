//changes I want to make
exports.up = function(knex) {
  //create a car-dealer
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments();
        tbl.text('VIN', 17).unique().notNullable();
        tbl.text('Make');
        tbl.text('Model');
        tbl.integer('Mileage');
        tbl.text('Status of Title');
    })

};
//undo my changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer')
};
