const invoker = require('../helper/invoker.js');
const check = (...params) => {
    if (params.length !== 1) {
        throw new Error('Expected only one input')
    }
    let p = invoker(params[0]);
    return !p
};
module.exports = check;