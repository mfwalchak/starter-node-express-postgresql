const knex = require("../db/connections");

function list() {
    return knex("products").select('*');
}

function read(product_id) {
    return knex("products").select("*").where({ product_id }).first();
  }

module.exports = {
    list,
    read,
};