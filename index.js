// Code your solutions in this file
function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}


function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}