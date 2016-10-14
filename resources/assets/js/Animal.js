/* Codi d'herencia */

var Animal = function() {
    if(this.constructor === Animal) {
        throw new Error("Can't instantiate abstract class!");
    }
};


/* Abstract methods */

Animal.prototype.say = function(){
    throw new Error("Abstract method!");
};

/* Eat some food */

Animal.prototype.eat = function() {
    console.log(" is eating.");
};

exports.Animal = Animal;