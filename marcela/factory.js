const createStore = () => {

  let data = {};

  return{
  	set: function(key,value){
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
  		data = {};
  		return data;
  	}
  };
};
//var store = createStore('hola', 'chao');
//console.log(store.get('hola'));


module.exports = createStore;
