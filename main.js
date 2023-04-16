let inputString = "";

let input = document.getElementById('input');

function skoba() {
    inputString += ' (';
    input.setAttribute('value', inputString);
}
function skoba2() {
    inputString += ') ';
    input.setAttribute('value', inputString);
}

// Numbers

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

// End of Numbers

// Math Functions

function mod() {
    inputString = "";
    
    input.setAttribute('value', inputString);
}

function back(){
    inputString = inputString.slice(0,-1);
    input.setAttribute('value', inputString);
}

function sub() {
    inputString += ' + ';
    input.setAttribute('value', inputString);
}

function divide() {
    inputString += ' / ';
    input.setAttribute('value', inputString);
}

function times() {
    inputString += ' * ';
    input.setAttribute('value', inputString);
}

function minus() {
    inputString += ' - ';
    input.setAttribute('value', inputString);
}

// End of Math Functions

function equals() {
    console.log(eval(inputString));
}

// Special Symbols

function percnt() {
    inputString += '% ';
    input.setAttribute('value', inputString);
}

function pi() {
    inputString += '3.14';
    input.setAttribute('value', inputString);
}

function dot() {
    inputString += '.';
    input.setAttribute('value', inputString);
}

function sqrt() {
    inputString += "√",0;
    input.setAttribute('value', inputString);
}

function power() {
    inputString += '';
    input.setAttribute('value', inputString);
}

// End of Special Symbols

// Output

let output = document.getElementById('output').innerHTML = console.log(eval(inputString));