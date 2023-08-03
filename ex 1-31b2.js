function product(t, a, b){
    return a > b
        ? 1
        :t(a)*product(t, a + 1, b);
}

function wallis_term(n){
    return square(2*n)/(square(2*n)-1);
}
function square(m){
    return m*m;
}

display(2*product(wallis_term,1,10,1));

display(2*product(wallis_term,1,100000,1));
