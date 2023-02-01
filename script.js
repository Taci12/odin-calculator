let a = '', b = '', operator = '', onScreen = '';
let screen = document.querySelector('.screen');
let previous = '';
let newOperation = true;
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


function clearScreen() {
    onScreen = '';
    screen.textContent = '';
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
function addInDisplay(newNumber) {
    if (newOperation) {
        screen.textContent = newNumber;
        onScreen = newNumber;
        newOperation = false;
    } else {
        onScreen += newNumber;
        screen.textContent = onScreen;
    }
}

function assignOperator(newOperator) {
    operator = newOperator;
    a = onScreen;
    clearScreen();
}

function pressedBackspaceButton() {
    onScreen = onScreen.slice(0, -1);
    screen.textContent = onScreen;
}

function pressedEqualsButton() {
    b = onScreen;
    a = Number(a);
    b = Number(b);
    onScreen = operate(operator, a, b);
    screen.textContent = onScreen;
    newOperation = true;
}
function pressedClearButton() {
    clearScreen();
    a = '';
    b = '';
    newOperation = true;
}