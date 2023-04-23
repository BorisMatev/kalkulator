let inputString = "";

let input = document.getElementById('input');

let output = document.getElementById('output');

output.innerHTML = "";

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

function clean() {
    inputString = "";
    
    input.setAttribute('value', inputString);

    output.innerHTML = "";
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
    output.innerHTML = eval(inputString);
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
    const num = inputString;
    inputString = 'Math.sqrt(' + inputString + ")";
    input.setAttribute('value', `√${ num }`);
    output.setAttribute('value', inputString);
    equals();
    // √

}

function power() {
    const num = inputString;
    inputString = 'Math.pow(' + inputString + ", 2)";
    input.setAttribute('value', `(${ num })2`);
    output.setAttribute('value', inputString);
    equals();
}

// End of Special Symbols

// let userInput = "";
// let mathInput = [];
// let br = 0;

// const input = document.getElementById('input');
// const output = document.getElementById('output');

// function addToInput(body){
//     userInput += body;
    
//     switch (body) {
//         case "√":{
//             mathInput.push("Math.sqrt(");
//             br = 1;
//             break;
//         }
//         case "^2":{
//             let swap = mathInput.pop();
//             mathInput.push(`Math.pow(${swap},2)`);
//             br = 2;
//             break;
//         }
//         default:{
//             mathInput.push(body);
//             chech();
//             break;
//         }
//     }
//     input.setAttribute('value', userInput);
// }

// function chech() {
//     if (br == 1) {
//         br = 0;
//         mathInput.push(')');
//     }
// }

// function equals() {
//     console.log(mathInput)
//     chech();
//     output.innerHTML = Math.round(eval(mathInput.join('')) * 100) / 100;
// }

// function clean() {
//     userInput = "";
//     input.setAttribute('value', userInput);
//     output.innerHTML = "";
//     mathInput = [];
// }

// function back(){
//     userInput = userInput.slice(0,-1);
//     mathInput.pop();
//     input.setAttribute('value', userInput);
// }