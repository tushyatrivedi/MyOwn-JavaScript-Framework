//IIFE gives own execution context so that our variables dont collide with global ones
(function (global, $) {
  //Following pattern similar to jQuery where we don't have to use new keyword to create a new jQuery object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  Greetr.init = function (firstname, lastname, language) {};
})(window, $);
