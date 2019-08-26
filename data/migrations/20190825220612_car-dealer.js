exports.up = function(knex) {
    //create a car-dealer
      return knex.schema.createTable('car-dealer', tbl => {
          tbl.increments();
          tbl.string('VIN', 17).unique().notNullable();
          tbl.string('Make');
          tbl.string('Model');
          tbl.integer('Mileage');
          tbl.string('Title');
      })
  
  };
  //undo my changes
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-dealer')
  };
  