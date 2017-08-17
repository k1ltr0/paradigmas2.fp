// -> Creamos un objeto llamado `machine`
var machine = {};

// -> Usa Object.create para creae otro objeto llamado `robot` con `machine`
//    como prototipo
var robot = Object.create(machine);
//Object.getPrototypeOf(robot);

// -> Usa Object.create para crear otro objeto llamado `robby` con `robot`
//    como prototipo
__
var robby = Object.create(robot);
//Object.getPrototypeOf(robby);

// -> Cuál es el resultado de `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> Cuál es el resultado de `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> Qué objeto es el prototipo directo de `robby`?
claim.same(Object.getPrototypeOf(robby), robot);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
    machine: machine,
    robot: robot,
    robby: robby
}