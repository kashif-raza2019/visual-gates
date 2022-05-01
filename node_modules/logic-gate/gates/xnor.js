let xor = require('./xor.js');
let not = require('./not.js');

const check = (...params) => {
    return not(xor(...params))
      
};
module.exports = check;