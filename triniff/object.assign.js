exports.extend = (...args) => {
	var obj = Object.assign({}, ...args);
	return obj;
};
