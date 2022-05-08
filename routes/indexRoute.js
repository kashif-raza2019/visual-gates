const express = require('express');
const router = express();
const path = require('path');
const logic = require('../public/js/logicbuilder');

router.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.post('/logic', (req, res) => {
    let equation = req.body.equation;
    let input = req.body.input;
    let output = req.body.output;
    logic.convertToLogic(equation, input, output);
    // console.log(req.body);
    res.send('Hello World!');
})

module.exports = router;