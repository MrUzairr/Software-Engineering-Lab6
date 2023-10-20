const express = require('express');
const database = require('./utils/db');
const bodyParser = require('body-parser');
const app = express();
const productsRoute = require('./routes/productRoute');
const invoicesRoute = require('./routes/invoiceRoute');
const purchaseHistoryRoute = require('./routes/purchaseHistoryRoute');
const usersRoute = require('./routes/userRoute');
const port = 3005;

app.use(bodyParser.json());

app.use('/api',productsRoute);
app.use('/userapi',usersRoute);
app.use('/invoiceapi',invoicesRoute);
app.use('/purchasehistoryapi',purchaseHistoryRoute);

app.listen(port, () => {
    console.log(`Server is Listening on PORT: ${port}`)
})