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
//console.log(smallest_divisor(19999));
//EXERCISE 1.22
console.log("--------------------");
console.log('Exercise 1.22');
//let list = [];
function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time());
}
function start_prime_test(n, start_time) {
    return is_prime(n)
        ? report_prime(get_time() - start_time)
        : true;
}
function report_prime(elapsed_time) {
    display("***");
    display(elapsed_time);
}

function display(message) {
    console.log(message);
}
function get_time() {
    return (new Date()).getTime();
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function primes_until(n) {
    function primes_until_iter(n, i, start_time, list) {
        while (i <= n) {

            if (!test_list(list, i)) {
                update_list(i,list);
                display(i);
                display("***");
            }

            i++;
        }
        display(`total time: ${get_time() - start_time}`);
    }
    function test_list(list, i) {
        for (let j = 0; list[j] * list[j] <= i; j++) {
            if (i % list[j] === 0) {
                return true;
            }
        }
    }
    function update_list(n,list) {
        list.push(n)
    }
    return primes_until_iter(n, 2, get_time(), [])
}


//timed_prime_test(999999999989);
timed_prime_test(3314192745739);
//primes_until(1_000_000);

