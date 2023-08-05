function cont_frac(n, d, k){
    function cont_iter(result, k){
        return k < 1
            ? result
            : cont_iter(n(k)/(d(k) + result), k-1)
    }
    return cont_iter(0, k);
}

function tan_cf(x, k) {
    return -(1/x)*cont_frac(t=>-x*x, i=>2*i-1, k)
}

display(tan_cf(Math.PI/4,100));
display(tan_cf(Math.PI/3,100));
/*
function display(m){
    console.log(m);
}
*/