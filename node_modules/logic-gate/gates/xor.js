const not = require('./not.js');
const invoker = require('../helper/invoker.js');
const eval = (first,second) => {
    return ( first || second ) && not( first && second );
}
  

const check = (...params) => {
    return params.reduce(
        (previousValue, currentValue) => {
            return eval(invoker(currentValue), invoker(previousValue))
        },
        false
      );
      
};
module.exports = check;