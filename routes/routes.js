//import of hardcoded search data
const data = require('../data/data')

//using express router
const express = require('express');
const router = express.Router();


//endpoint for filtering data in query string using key value pairs in for in loop
router.use('/', async (req, res) => {
    const filters = req.query;
    console.log(filters);
    const filterData = data.filter(element => {
        return filters.title.toLowerCase() === element.title.toLocaleLowerCase();
    })
    res.json(filterData);
});


module.exports = router;