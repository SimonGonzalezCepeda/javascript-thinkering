
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});


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

Animal.prototype.eat = new function() {
    console.log(" is eating.");
};

/* Com instanciar un hereu: Syntax Sugar */

var Cat = function () {
    Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function(){
    console.log("meow");
};