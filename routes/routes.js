//import of hardcoded search data
const data = require('../data/data')

//using express router
const express = require('express');
const router = express.Router();


//endpoint for filtering data in query string using key value pairs in for in loop


router.use('/', async (req, res) => {
    const filters = req.query;
    const filterData = data.filter(title => {
        let isValid = true;
        for (key in filters) {
            // console.log(title[key], filters[key]);
            isValid = isValid && title[key] === filters[key]
        }
        return isValid;
    })
    console.log(filterData);
    res.json(filterData);
});


module.exports = router;