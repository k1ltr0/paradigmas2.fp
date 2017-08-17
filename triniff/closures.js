const createLogger = function(namespace){
	return function(str){
		return namespace + str;
	}
}
var warn = createLogger("[warning]: ");
warn('houston, we have a problem');
//... tu código acá

module.exports = createLogger;
