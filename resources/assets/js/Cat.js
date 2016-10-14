/* Com instanciar un hereu: Syntax Sugar */

var Cat = function () {
    Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function(){
    console.log("meow");
};

exports.Cat = Cat;