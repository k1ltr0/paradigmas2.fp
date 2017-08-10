const createLogger = function (namespace) {
	return function (str) {
		return namespace + str;
	};
}

const warn = createLogger('[warning]');
warn('houston, we have a problem');

console.log(warn());

module.exports = createLogger;
