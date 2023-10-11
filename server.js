const express = require('express');
const database = require('./utils/db');
const bodyParser = require('body-parser');
const app = express();
const productsRoute = require('./routes/productRoute');
const port = 3005;

app.use(bodyParser.json());

app.use('/api',productsRoute);

app.listen(port, () => {
    console.log(`Server is Listening on PORT: ${port}`)
})