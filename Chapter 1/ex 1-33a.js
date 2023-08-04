function accumulate(combiner, null_value, term, a, next, b, filter){
    function accumulate_iter(result, a){
        function conditional(m){
            return filter(m)
                ? m
                : null_value;
        }
        return a>b
            ? result
            : accumulate_iter(combiner(result, term(conditional(a))), next(a));
    }
    return accumulate_iter(null_value, a);
}


function add(a, b) {
    return a + b; 
}
function inc(m){
    return m + 1;
}
function square(t){
    return t*t;
}


function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return n<test_divisor
        ?NaN
        :square(test_divisor) > n
        ? n
        : divides(test_divisor, n)
        ? test_divisor
        : find_divisor(n, test_divisor + 1);
}
function divides(a, b){
    return b%a === 0;
}
function is_prime(n) {
    return n === smallest_divisor(n);
}


//null_value = 0 for sum, and 1 for product
display(accumulate(add, 0, square, 1, inc, 5, is_prime));
/*
function display(m){
    console.log(m);
}
*/