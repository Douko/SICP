function accumulate(combiner, null_value, term, a, next, b, filter){
    function accumulate_iter(result, a){
        function conditional(m){
            return filter(m,b)/***/
                ? m
                : null_value;
        }
        return a>b
            ? result
            : accumulate_iter(combiner(result, term(conditional(a))), next(a));
    }
    return accumulate_iter(null_value, a);
}


function product(a, b) {
    return a*b; 
}
function inc(m){
    return m + 1;
}

function gcd(a,b){
    return b===0
        ?a
        :gcd(b, a%b);
}
function relative_prime(p, q){
    return gcd(q,p)===1;
}


//null_value = 0 for sum, and 1 for product
display(accumulate(product, 1, t=>t, 1, inc, 6, relative_prime));
/*
function display(m){
    console.log(m);
}
*/