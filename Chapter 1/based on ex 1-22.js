//Code to find all primes until parameter.
function display(message) {
    console.log(message);
}
function get_time() {
    return (new Date()).getTime();
}

/*code is going slow because he has to print in console */
function primes_until(n) {
    function primes_until_iter(n, i, start_time, list) {
        while (i <= n) {

            if (!test_list(list, i)) {
                update_list(i,list);
                /*
                display(i);
                display("***");
                */
                
            }

            i++;
        }
        display(`total time: ${get_time() - start_time}`);
        console.log(`Total of primes found: ${list.length}`)
        console.log(`The last element is: ${list.slice(-1)}`);
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
//10 seconds or less
primes_until(100_000_000);

