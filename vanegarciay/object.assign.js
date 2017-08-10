exports.extend = (...args) => {
    var copy = Object.assign({}, ...args);
    return copy
}
