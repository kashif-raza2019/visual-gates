const express = require('express');
const router = express();
const path = require('path');

router.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;