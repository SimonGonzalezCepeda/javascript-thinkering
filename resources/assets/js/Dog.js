/* Com instanciar un hereu: Syntax Sugar */

var Dog = function () {
    Animal.apply(this, arguments);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.say = function(){
    console.log("bark");
};

exports.Dog = Dog;