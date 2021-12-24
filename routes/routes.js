//import of hardcoded search data
const data = require("../data/data");

//using express router
const express = require("express");
const router = express.Router();

//endpoint for filtering data in query string using key value pairs in for in loop
router.get("/", async (req, res) => {
  const filters = req.query;
  const filterData = data.filter((element) => {
    return filters.title.toLowerCase() === element.title.toLocaleLowerCase();
  });
  res.json(filterData);
});

//get endpoint for getting accessing the single search result by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const getDataById = data.filter((element) => {
      return id.toString() === element.id.toString();
    });
    res.status(200).json(getDataById);
  } catch (error) {
    console.log({ message: error });
  }
});

module.exports = router;
