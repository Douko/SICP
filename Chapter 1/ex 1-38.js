function cont_frac(n, d, k){
    function cont_iter(result, k){
        return k < 1
            ? result
            : cont_iter(n(k)/(d(k) + result), k-1)
    }
    return cont_iter(0, k);
}

function d_euler(i){
    return (i+1) % 3 === 0
        ? 2*(i+1)/3
        : 1
}

const e = 2 + cont_frac(t=>1, d_euler, 100)
display(e);
/*
function display(m){
    console.log(m);
}
*/