const stock_data = require("../fixtures/growthstocks")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE growthstocks RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex('growthstocks').insert(stock_data)
      
    });
};