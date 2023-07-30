
//RUN IN TERMINAL for time test.
//Code to find all primes until parameter.
function display(message) {
    console.log(message);
}
function get_time() {
    return (new Date()).getTime();
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

primes_until(1_000_000);

