
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function nameMaker(firstName, middleName, lastName) {
    if (middleName === null) {
        return `${firstName} ${lastName}`;
    }
    return `${firstName} ${middleName} ${lastName}`;
}

export function oddOrEven(x) {
    if ((x % 2) === 0){
        return 'even';
    } else return 'odd';
}

export function petTraits(name, type, age, food, toys){
    return `name: ${name}\n 
    type: ${type}
    age: ${age}
    food: ${food}
    toys: ${toys}`;
}

export function greaterOrLess(x, y, max) {
    if (add(x, y) < max){
        return 'true';
    } else {
        return 'false';
    }
}

/*export function rockPaperScissors(playerOne, playerTwo) {
    if

};*/