//EXERCISE 1.21
console.log('Exercise 1.21');

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    for (let i = test_divisor; i <= n; i++) {
        if (n % i === 0) {
            return i;
        }
        else if (i * i > n) {
            return n;
        }
    }
}
/*
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
            ? test_divisor
            : find_divisor(n, test_divisor + 1);
}
*/
function divides(a, b) {
    return b % a === 0;
}
function square(n) {
    return n*n
}
console.log(smallest_divisor(19999));

