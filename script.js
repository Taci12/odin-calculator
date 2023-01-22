let a = '', b = '', operator = '';
let screen = document.querySelector('.screen');
let previous = '';
let isA = true;

function add(a, b) {
    return (a + b);
}
function subtract(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b)
}
function squarePower(a) {
    return a * a;
}
function squareRoot(a) {
    return Math.sqrt(a);
}

function operate(operator, a, b) {
    if (operator === '+') {
        a = add(a, b);
        screen.textContent = a;
        reset();
    } else if (operator === '-') {
        a = subtract(a, b);
        screen.textContent = a;
        reset();
    } else if (operator === '*') {
        a = multiply(a, b);
        screen.textContent = a;
        reset();
    } else if (operator === '/') {
        a = divide(a, b);
        screen.textContent = a;
        reset();
    } else if (operator === 'power') {
        a = squarePower(a);
        screen.textContent = a;
        reset();
    } else {
        a = squareRoot(a);
        screen.textContent = a;
        reset();
    }
}

function reset() {
    a = '';
    b = '';
    operator = '';
}
function clear() {
    screen.textContent = '';
    reset();
}
function assignOperator(operator) {
    operator = this.operator;
    console.log(operator);
    isA = false;
}
function addInDisplay(digit) {
    let number = previous + digit;
    previous = number;
    screen.textContent = number;
    if (isA) {
        a = number;
    } else {
        b = number;
    }
}

function solveOperation() {
    operate(a, b, operator);
    clear();
}