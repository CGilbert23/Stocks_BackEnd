const stock_data = require("../fixtures/valuestocks")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE valuestocks RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex('valuestocks').insert(stock_data)
      
    });
};