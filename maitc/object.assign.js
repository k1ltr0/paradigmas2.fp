exports.extend = (...args) =>{
	
	const obj =  Object.assign({}, ...args);
	return obj;
}
