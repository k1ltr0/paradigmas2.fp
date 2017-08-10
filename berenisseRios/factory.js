var createStore = function() {

  var data = {};

  return {
  	get: function(key){
  		return data[key];
  	},
  	set: function (key, value){
  		data[key] = value;
  		return value;
  	},
  	keys: function(){
  		return Object.keys(data);
  	},
  	clear: function(){
  		data = {};
  		return data;
  	}
  };
};


module.exports = createStore;
