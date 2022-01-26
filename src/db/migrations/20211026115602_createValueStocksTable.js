exports.up = function (knex) {
    return knex.schema.createTable("valuestocks", (table) => {
      table.increments("stock_id").primary(); // sets stock_id as the primary key
      table.string("ticker");
      table.string("name");
      table.integer("price");
      table.integer("marketcap");
      table.string("screen_status");
      table.string("testing_status");
      table.timestamps(true, true); // adds created_at and updated_at columns; passing true as the first argument sets the columns to be a timestamp type while passing true as the second argument sets those columns to be non-nullable and to use the current timestamp by default
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("valuestocks");
  };