exports.extend = (...args) => {
	//exports.extend = extend;

	var obj = Object.assign({}, ...args);
	return obj;
}