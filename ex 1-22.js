//EXERCISE 1.22
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



timed_prime_test(999999999989);
timed_prime_test(3314192745739);
