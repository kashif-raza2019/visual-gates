// Server File for Visual Gates
// A Gate Visualiser cum Simulator in Node JS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// importing routes
const indexRoute = require('./routes/indexRoute');

app.use('/public', express.static(__dirname + '/public'));
app.use('/', indexRoute);


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

