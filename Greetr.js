//IIFE gives own execution context so that our variables dont collide with global ones
(function (global, $) {
  //Following pattern similar to jQuery where we don't have to use new keyword to create a new jQuery object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  //contains methods that can be used on the object Greetr
  //automatically assigned to the object created using the function constructor
  Greetr.prototype = {};

  //'this' points to new empty object created using function constructor
  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };
  //since function constructor return new Greetr.init() object, prototype needs to be setup
  Greetr.init.prototype = Greetr.prototype;

  //I want to use G$() to initialize any object, so I point it to Greetr function object
  //and add it to the global object
  global.G$ = global.Greetr = Greetr;
})(window, $);
