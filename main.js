let inputString = "";

let input = document.getElementById('input');

function back(){
    inputString = inputString.slice(0,-1);
    input.setAttribute('value', inputString);
}

function skoba() {
    inputString += ' ( ';
    input.setAttribute('value', inputString);
}
function skoba2() {
    inputString += ' ) ';
    input.setAttribute('value', inputString);
}
function one() {
    inputString += '1';
    input.setAttribute('value', inputString);
}
function two() {
    inputString += '2';
    input.setAttribute('value', inputString);
}
function three() {
    inputString += '3';
    input.setAttribute('value', inputString);
}
function four() {
    inputString += '4';
    input.setAttribute('value', inputString);
}
function five() {
    inputString += '5';
    input.setAttribute('value', inputString);
}
function six() {
    inputString += '6';
    input.setAttribute('value', inputString);
}
function seven() {
    inputString += '7';
    input.setAttribute('value', inputString);
}
function eight() {
    inputString += '8';
    input.setAttribute('value', inputString);
}
function nine() {
    inputString += '9';
    input.setAttribute('value', inputString);
}
function zero() {
    inputString += '0';
    input.setAttribute('value', inputString);
}
function mod() {
    inputString = "";
    
    input.setAttribute('value', inputString);
}

function sub() {
    inputString += ' + ';
    input.setAttribute('value', inputString);
}

function equals() {
    console.log(eval(inputString));
}