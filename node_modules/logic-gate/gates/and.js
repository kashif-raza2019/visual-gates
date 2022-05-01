const invoker = require('../helper/invoker.js');
const check = (...params) => {
    return params.reduce(
        (previousValue, currentValue) => {
            return (invoker(currentValue)) && (invoker(previousValue))
        },
        true
      );
      
};
module.exports = check;