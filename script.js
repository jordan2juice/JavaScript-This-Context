const messageHandler = {
    message1: "The first button was clicked",
    message2: 'The second button was clicked',
    message3: 'The third button was clicked',
//This is referring to the messageHandler//
displayMessage1: function () {
    this.displayMessage1 (this.message1);
},
displayMessage2: function () {
    this.displayMessage2(this.message2);
},
displayMessage3: function () {
    this.displayMessage3(this.message3);
},
displayMessage: function () {
    const p = document.createElement('p');
    p.textContent = message;
    document.body.appendChild(p);
 },
};

btn1 = document.getElementById('button-1').addEventListener('click', messageHandler.displayMessage1.bind(messageHandler));
btn2 = document.getElementById('button-2').addEventListener('click', messageHandler.displayMessage2.bind(messageHandler));
btn3 = document.getElementById('button-3').addEventListener('click', messageHandler.displayMessage3.bind(messageHandler));
