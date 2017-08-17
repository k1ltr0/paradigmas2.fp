const createStore = () => {

  let data = {};

  return {
	get: function(key){
		return data[key];
	},
	set: function(key, value){
		//if(typeof value == string)
		data[key] = value;
		return data[key];
	},
	keys: function(){
		return Object.keys(data);
	},
	clear: function(){
		return data = {};
	}
  };
};

var store = createStore();

//store.set("estrella", "*");
//console.log(store.get("estrella")); // *

module.exports = createStore;
