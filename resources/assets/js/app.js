
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

var Animals = require('./Animal');
/*var cat = require('./Cat');
var dog = require('./Dog');
*/
Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});

var animal = new Animals.Animal();
/*var cat = new Cat();
var dog = new Dog();

dog.eat();
dog.say();
cat.eat();
cat.say();*/