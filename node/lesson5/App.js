const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const appiRouter = require('./router/appi.router');
const { MONGO_URL, PORT } = require('./configs/config');

const app = express();

_connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', appiRouter);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _connectDB() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
