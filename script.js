let a = '', b = '', operator = '', onScreen = ''
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

function reset() {
    a = '';
    b = '';
    onScreen = '';
    operator = '';
    screen.textContent = onScreen;
}

function clearScreen() {
    onScreen = '';
    screen.textContent = onScreen;
}

function operate(operator, a, b) {
    if (operator === '+') {
        onScreen = add(a, b);

    } else if (operator === '-') {
        onScreen = subtract(a, b);

    } else if (operator === '*') {
        onScreen = multiply(a, b);

    } else if (operator === '/') {
        onScreen = divide(a, b);

    } else if (operator === 'power') {
        onScreen = squarePower(a);

    } else {
        onScreen = squareRoot(a);
    }
    screen.textContent = onScreen;
    return onScreen;
}


