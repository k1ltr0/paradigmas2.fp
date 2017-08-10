var createStore = function (){
  var data = { //El diccionario donde guarda los datos

  };


  return {
  	set: function(key, value){ //Crea el metodo key
  		return data[key] = value //Guarda el parametro q ingresa en key en diccionario
  	},
  	get: function(key){
  		return data[key] //retorna el key que guardo en data
  	},
  	keys: function(){ // ".keys" retorna el arreglo completo de data
  		return Object.keys(data);
  		
  	},
  	clear: function(){ //Limpia data dejandolo vacio
  		return data = {}
  	}
  }
};


module.exports = createStore;
