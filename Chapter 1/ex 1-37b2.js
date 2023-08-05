function cont_frac(n, d, k){
    function cont_rec(i){
        return i>k
            ? 0
            : n(i)/(d(i) + cont_rec(i + 1));
    }
    return cont_rec(1);
}
const Phi = 1+cont_frac(t=>1,t=>1,100);
display(Phi);
/*
function display(m){
    console.log(m);
}
*/