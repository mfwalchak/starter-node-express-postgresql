const categoriesService = require("./categories.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list (req, res, next) {
  const data = await categoriesService.list()
    res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
}
