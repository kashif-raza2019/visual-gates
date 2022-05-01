const or = require('./or.js');
const not = require('./not.js');

const check = (...params) => {
    return not((or(...params)));
};
module.exports = check;