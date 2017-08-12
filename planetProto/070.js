// -> Define un objeto llamado `Robot`
// -> Define un método llamado `new` en `Robot`
// -> Cuando llamamos a `Robot.new()` debe retornar un objeto nuevo con Robot
//    como prototipo
//    Por ejemplo: var robby = Robot.new();
//    `Robot` debe ser el prototipo de `robby`

__
var Robot = {
    new: function() {
        // Crea un objeto de tipo robot
        var robby = Object.create(Robot);
        return robby;
    }
};









// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
    Robot: Robot
}