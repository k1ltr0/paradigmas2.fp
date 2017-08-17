var createLogger = function (namespace) {
    return function(str) {
        return namespace + str;
    }
}

var mensaje = createLogger("waring");
mensaje("holi");

module.exports = createLogger;

