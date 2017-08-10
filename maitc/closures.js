const createLogger = function (namespace){

	return function (str){
		return "[" +namespace+"]:" + str;
	}
}


var myFunc = createLogger("warning");
myFunc("houston, we have a problem");
module.exports = createLogger;
