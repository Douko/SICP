
function square(t){
    return t*t;
}
function inc(a){
    return a+1;
}
function product(a,b){
    return a*b;
}
function sum(a,b){
    return a+b;
}

function accumulate(combiner, result, term, a, next, b){
    return a>b
        ?result
        :accumulate(combiner, combiner(result, term(a)), term, next(a), next, b);
}

display(accumulate(product, 1, square,1,inc,5 ));
display(accumulate(sum, 0, square,1,inc,5 ));
/*
function display(m){
    console.log(m);
}
*/