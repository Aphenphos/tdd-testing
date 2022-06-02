
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