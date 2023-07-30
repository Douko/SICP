function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
            ? square(expmod(base, exp / 2, m)) % m
            : (base * expmod(base, exp - 1, m)) % m;
}
function fermat_test(n) {
    function try_it(a) {
        return expmod(a,n,n) === a;
    }
    return try_it(1 + Math.floor(Math.random()*(n-1)));
}
function fast_is_prime(n,times) {
    return times === 0
        ? true
        : fermat_test(n)
            ? fast_is_prime(n, times - 1)
            : false;
}

function fast_is_prime_timet(n, times, start_time) {
    return times === 0
        ? console.log(`True. Total time spend: ${get_time() - start_time} `)
        : fermat_test(n)
            ? fast_is_prime_timet(n, times - 1, start_time)
            : console.log(`False. Total time spend: ${get_time() - start_time} `);
}

function is_even(exp) {
    return exp % 2 === 0;
}
function square(t) {
    return t * t;
}
function get_time() {
    return (new Date()).getTime();
}
function display(message) {
    console.log(message);
}

function primes_until(n) {
    function primes_until_iter(n, i, start_time/*, list*/) {
        while (i <= n) {

            if (fast_is_prime(i,3)) {
                display(i);
                display("***");
            }
            /*
            if (!test_list(list, i)) {
                update_list(i, list);
                display(i);
                display("***");
            }
            */
            i++;
        }
        display(`total time: ${get_time() - start_time}`);
    }
    /*
    function test_list(list, i) {
        for (let j = 0; list[j] * list[j] <= i; j++) {
            if (i % list[j] === 0) {
                return true;
            }
        }
    }
    function update_list(n, list) {
        list.push(n)
    }
    */
    return primes_until_iter(n, 2, get_time()/*, []*/)
}
//primes_until(10);
fast_is_prime_timet(1000000, 3, get_time());
//console.log(Math.floor(Math.random()*12));
fast_is_prime_timet(561, 3, get_time());