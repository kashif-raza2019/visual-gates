const isFunction = require('is-function');

const invoke = (value) => {
    if (isFunction(value)) {
        value = value()  
    }
    return Boolean(value);

}

module.exports = invoke;