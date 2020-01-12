// Initialize the server
const express = require('express')
const app = express()
const port = 3000

//get other files from places
const routes = require('./routes.js')
const db = require('./db initialize/initializeCon');

//upload the modules
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//use the middleware/serve the client files
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.static('./client'));


//routing logic



//open up the gates! on port 3000 tho
app.listen(port, () => console.log(`Example app listening on port ${port}!`))