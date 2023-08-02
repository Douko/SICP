//EXERCISE 1-28
function is_even(n){
    return n&1==1
        ? false
        :true
}
function fact_odd(d) {
    return is_even(d)
        ? fact_odd(half(d))
        :d
}
function half(t){
    return t/2
}
function square(t){
    return t*t
}
function random(n) {
    return Math.floor(2 + Math.random()*(n-2))
}
function exp_mod(a,n,m){
    return n===0
        ? 1
        : is_even(n)
        ? square(exp_mod(a, half(n),m))%m
        :(a*exp_mod(a, n-1,m))%m
}

function not_aviable(m){
    return is_even(m)
        ?true
        :m<=1
        ?true
        :false
}

function square_m(t,m){
    return test1(t,m)
        ?test2(t,m)
        :square(t)
}
function test1(t,m){
    return square(t)%m==1
}
function test2(t,m){
    return ((t%m==1)||(t%m==m-1))
        ?square(t)
        :0
}

function miller_rabin_test(a,n,m) {
    return is_even(n)
        ?square_m(miller_rabin_test(a, half(n),m),m)%m
        :exp_mod(a,n,m)
}
function primality_test_exec(m){
    return miller_rabin_test(random(m),m-1,m)
}
function primality_test(m){
    return not_aviable(m)
        ?console.log('please introduce an odd number greater than 1')
        :primality_test_exec(m)==1
        ? console.log('prime')
        : console.log('not prime')
}

primality_test(561)
primality_test(1105)
primality_test(1729)
primality_test(6601)
primality_test(6602)
primality_test(-5)
/*console.log(miller_rabin_test(5,560,561));
console.log(primality_test_exec(15));

*/