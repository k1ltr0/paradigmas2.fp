const createStore = () => {

  let data = {};

  return {
  	set: function(key,value){
  		data[key] = value;
  		return data[key];
  	},
  	get: function(key){
  		return data[key];
  	},
  	keys: function(){
  		return Object.keys(data); //devuelve las keys
  	},
  	clear: function(){
  		data = {};
  		return data;
  	}
  };
};

module.exports = createStore;
