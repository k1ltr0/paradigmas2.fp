var createStore = function(){

  var data = {};

  return {
  	set: function(key, value){
  		data[key] = value; //agrego elemento a diccionario
  		return value;
  	},
  	get: function(key){
  		return data[key];
  	},
  	keys: function(){
  		return Object.keys(data);
  	},
  	clear: function(){
  		data = [];
  		return data;
  	}
  };

};

createStore();
module.exports = createStore;
