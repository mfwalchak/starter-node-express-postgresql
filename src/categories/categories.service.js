const knex = require("../db/connections");

function list() {
    return knex('categories').select('*');
}

module.exports = {
    list,
}