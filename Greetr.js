//IIFE gives own execution context so that our variables dont collide with global ones
(function (global, $) {
  //Following pattern similar to jQuery where we don't have to use new keyword to create a new jQuery object
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };

  //below variables and objects are part of the execution context created by IIFE
  //so any functions inside it would still have
  //access to them when required because they sit lexically inside this execution context
  //in other words a closure will be created that will contain these variables

  //also these are not accessible outside this file because of execution context here
  var supportedLanguages = ["en", "es"];

  var greetings = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "Logged In",
    es: "Inicio Sesion",
  };

  //contains methods that can be used on the object Greetr
  //automatically assigned to the object created using the function constructor
  Greetr.prototype = {
    fullName: function () {
      return this.firstname + " " + this.lastname;
    },
    //the function will have aceess to supportedLanguages variable
    //because of where it sits lexically, due to closures
    validate: function () {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Language not supported";
      }
    },
    greeting: function () {
      return greetings[this.language] + " " + this.firstname;
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullName();
    },
    //formal is a bollean variable denoting whether we want formal greeting
    greet: function (formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      }
      //if null or undefined it will be coerced to false
      else {
        msg = this.greeting();
      }

      console.log(msg);

      //this points to the calling object and returning it makes the method chainable
      return this;
    },
    //used for auditing purposes, just an example method
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + " " + this.fullName());
      }
      return this;
    },
    //change language on the fly
    setLang: function (lang) {
      this.validate();
      this.language = lang;
      return this;
    },
    //function to use jQuery to dynamically change html on the webpage
    HTMLGreeting: function (selector, formal) {
      console.log("Html Greeting function called!!");

      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "selector not given";
      }

      var msg = formal ? this.formalGreeting() : this.greeting();

      $(selector).html(msg);

      return this;
    },
  };

  //'this' points to new empty object created using function constructor
  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";

    self.validate();
  };
  //since function constructor return new Greetr.init() object, prototype needs to be setup
  Greetr.init.prototype = Greetr.prototype;

  //I want to use G$() to initialize any object, so I point it to Greetr function object
  //and add it to the global object
  global.G$ = global.Greetr = Greetr;
})(window, $);
