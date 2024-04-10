const express = require('express')
const app = express();
require('dotenv').config({});

const middleware = require('./middleware');

const PORT = process.env.PORT || 2000;
require('./db')
    .connectDb()
    .then((val) => console.log(val.message))
    .catch((err) => console.log(err))

middleware(app);

app.listen(PORT, () => {
    console.log(`Application Running on PORT: ${PORT}`);
})

