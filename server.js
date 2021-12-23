require('dotenv/config');
const express = require('express')
const app = express();
const routes = require('./routes/routes');
var cors = require('cors');

//JSON parsing middlewares and express config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//enable cors middleware
app.use(cors());

//routing middlewares
app.use('/', routes );

//server start
app.listen(process.env.PORT, () => {
    console.log('Server is listening...')
})