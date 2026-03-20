var greetr = G$("Tushya", "Trivedi", "en");

//we have a function in our library HTMLGreeting that takes in a CSS selector identifying
//the html element where we want to add our greeting on the click of a button

document.querySelector("button").addEventListener("click", function () {
  greetr.setLang($("#language-selector").val());
  console.log("Button clicked!!");
  //   document.querySelector("#logindiv").hidden = true;
  $("#logindiv").hide();
  greetr.HTMLGreeting("#greeting", true);
});
