<<<<<<< HEAD
function product_iter(t, a, b, result){
    return a > b
        ? result
        :product_iter(t, a + 1, b, result * t(a));
}

function wallis_term(n){
    return square(2*n)/(square(2*n)-1);
}
function square(m){
    return m*m;
}

product_iter(wallis_term,1,2,1);
=======
function product_iter(t, a, b, result){
    return a > b
        ? result
        :product_iter(t, a + 1, b, result * t(a));
}

function wallis_term(n){
    return square(2*n)/(square(2*n)-1);
}
function square(m){
    return m*m;
}

display(2*product_iter(wallis_term,1,10,1));

display(2*product_iter(wallis_term,1,100000,1));
>>>>>>> c0d244eb39580809d3d81fcdbe42dc8a8ec3aead
