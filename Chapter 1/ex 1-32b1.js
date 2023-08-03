
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

function accumulate(combiner, null_value, term, a, next, b){
    return a>b
        ?null_value
        :combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b));
}

display(accumulate(product, 1, square,1,inc,5 ));
display(accumulate(sum, 0, square,1,inc,5 ));
/*
function display(m){
    console.log(m);
}
*/