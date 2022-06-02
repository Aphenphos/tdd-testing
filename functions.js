
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

export function rockPaperScissors(rock,paper,scissors) {
    if (paper + rock){
        'player 1 wins';
    } if (scissors + paper){
        'player 1 wins';
    } if (rock + scissors) {
        'play 1 wins';
    } if (scissors + paper) {
        'player 1 wins';
    } if (paper + paper) {
        'draw';
    } if (rock + rock) {
        'draw';
    } if (scissors + scissors) {
        'draw';
    } else {
        'player 2 wins';
    }}