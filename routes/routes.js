//import of hardcoded search data
const data = require('../data/data.json')

//using express router
const express = require('express');
const router = express.Router();


//get endpoint with search parameters and parsing the json data
router.get('/search', async (req, res) => {
    res.json(data);
});


module.exports = router;