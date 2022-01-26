exports.up = function (knex) {
    return knex.schema.createTable("growthstocks", (table) => {
      table.increments("stock_id").primary(); // sets stock_id as the primary key
      table.string("ticker");
      table.string("name");
      table.integer("price").notNullable();
      table.integer("marketcap");
      table.string("screen_status");
      table.string("testing_status");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now())
     
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("growthstocks");
  };
