exports.extend = (...args) =>{
    const objCopy = Object.assign({},...args);

    return objCopy;
}

