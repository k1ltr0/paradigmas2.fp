var createStore = function() {
  var data = {};

  return {
    set: function(key, value){
      return data[key] = value;
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
  };
};

createStore();
module.exports = createStore;
