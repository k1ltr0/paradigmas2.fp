exports.extend = (...args) => {
	
	var nuevo = Object.assign({},...args);
	return nuevo;
}

//...args se llama spread operator