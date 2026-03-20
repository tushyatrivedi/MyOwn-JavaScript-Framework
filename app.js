//Mimicing jQuery here, we dont have to use new keyword to make a new object
var greetr = G$("Tushya", "Trivedi", "en");

//we have a function in our library HTMLGreeting that takes in a CSS selector identifying
//the html element where we want to add our greeting on the click of a button

document.querySelector("button").addEventListener("click", function () {
  //setting language from the select option value
  greetr.setLang($("#language-selector").val());
  console.log("Button clicked!!");
  //   document.querySelector("#logindiv").hidden = true;
  $("#logindiv").hide();
  //this will add the greeting to the h1
  greetr.HTMLGreeting("#greeting", true);
});
