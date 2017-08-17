const createStore = () => {
    // diccionario
    // var keys = {};

    let data = {};

    return {
        set: function(key, value) {
            data[key] = value;
            return value;
        },
        get: function(key) {
            return data[key];
        },
        keys: function() {
            return Object.keys(data);

        },
        clear: function() {
            // hago el objeto vacio nuevamente
            data = {};
            return data;
        }
    };
};








// Ejemplo
// const store = createStore();
//      console.log(store.keys()); // => []
//      console.log(store.get('foo')); // => undefined
//      console.log(store.set('foo', 'lalala')); // => lalala
//      console.log(store.get('foo')); // => lalala
//      console.log(store.keys()); // => ['foo']
//      console.log(store.clear()); // => {}
//      console.log(store.keys()); // => []
//      console.log(store.get('foo')); // => undefined

module.exports = createStore;