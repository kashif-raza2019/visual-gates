const and = require('./and.js');
const not = require('./not.js');

const check = (...params) => {
    return not((and(...params)))    
};
module.exports = check;