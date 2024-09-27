let messages = ["Happy birthday to Jeslyn",
    "Happy birthday to you",
    "Happy birthday to my dear"];

let i = messages.length;
let s = Math.floor(Math.random() * i);

document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';
