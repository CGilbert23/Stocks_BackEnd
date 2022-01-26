const knex = require("../db/connection")

function create(newStock) {
    return knex("growthstocks")
      .insert(newStock)
      .returning("*")
      .then((createdRecords) => createdRecords[0]);
  }
  
  function read(stock_id) {
    return knex("growthstocks").select("*").where({ stock_id }).first();
  }
  
  function update(updatedStock) {
    return knex("growthstocks")
      .select("*")
      .where({ stock_id: updatedStock.stock_id })
      .update(updatedStock, "*")
      .then((updatedRecords) => updatedRecords[0]);
  }
  
  function destroy(stock_id) {
    return knex("growthstocks").where({ stock_id }).del();
  } 

  function list() {
    return knex("growthstocks").select("*");
  }

function max(){
  return knex("growthstocks")
  .select("stock_id")
  .max("price")
  .groupBy("stock_id")
}
 

module.exports = {
  list,
  create,
  read,
  update,
  max,
  delete: destroy,
};