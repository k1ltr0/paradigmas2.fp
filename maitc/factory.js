const createStore = () => {

  let data = {};
  var arr = [];

  return {
  	set: function(key, value){
  		data[key] = value;
  		return value;
  	},
  	get: function(key){
  		return data[key];
  	},
  	keys: function(){
  		return Object.keys(data);
  	},
  	clear: function(){
  		return data = {};

  	}
  }
};


module.exports = createStore;
