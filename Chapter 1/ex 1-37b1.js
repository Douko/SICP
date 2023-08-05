function cont_frac(n, d, k){
    function cont_iter(result, k){
        return k < 1
            ? result
            : cont_iter(n(k)/(d(k) + result), k-1);
    }
    return cont_iter(0, k);
}

const Phi_fixed = 1.618033988749

function aprox_4dec(i){
    display(1+cont_frac(t=>1,t=>1,i));
    return Math.floor(10000*(1+cont_frac(t=>1, t=>1, i)))==Math.floor(10000*Phi_fixed)
        ?i
        :aprox_4dec(i+1)
}
display(aprox_4dec(0));

const Phi = 1+cont_frac(t=>1, t=>1, 100);
display(Phi);
/*
function display(m){
    console.log(m);
}
*/
