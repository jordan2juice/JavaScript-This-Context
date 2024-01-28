"use strict";

const messageHandler = {
  message1: "The first button was clicked",
  message2: "The second button was clicked",
  message3: "The third button was clicked",
  //This is referring to the messageHandler//
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },
  displayMessage: function (message) {
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  },
};
const displayMessage1 = messageHandler.displayMessage1.bind(messageHandler);

let btn1 = document
  .getElementById("button-1")
  .addEventListener(
    "click",
    messageHandler.displayMessage1.bind(messageHandler)
  );
let btn2 = document
  .getElementById("button-2")
  .addEventListener(
    "click",
    messageHandler.displayMessage2.bind(messageHandler)
  );
let btn3 = document
  .getElementById("button-3")
  .addEventListener(
    "click",
    messageHandler.displayMessage3.bind(messageHandler)
  );

const person = {
  message1: "Hi I'm John",
  message2: "I am 30 years old",
  message3: "I work as a developer",

  displayMessage1: function () {
    this.displayMessage1(this.message1);
  },
  displayMessage2: () => {
    this.displayMessage2(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage3(this.message3);
  },
  displayMessage: function (message) {
    // function implementation
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  },
};

let pBtn = document
  .getElementById("button-4")
  .addEventListener(
    "click",
    messageHandler.displayMessage1.bind(messageHandler)
  );
// With this binding messageHandler this is attached to the messageHandler with message1 property values
let pBtn2 = document
  .getElementById("button-5")
  .addEventListener(
    "click",
    messageHandler.displayMessage2.bind(messageHandler)
  );
// This will create an error because there are no message3 property in messageHandler object, this will not work because
