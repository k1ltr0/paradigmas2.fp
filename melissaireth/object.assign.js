exports.extend = (...args) =>{
	const copy = Object.assign({}, ...args);
	return copy;
}
