//Just to read
//Frist version
function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
        ? (expmod(base, exp/2, m)*expmod(base, exp/2, m))%m
        :(base*expmod(base, exp - 1, m))%m;
}
//Second version
function expmod(base, exp, m) {
    return exp === 0
        ? 1
        : is_even(exp)
        ? square(expmod(base, exp/2, m))%m
        :(base*expmod(base, exp - 1, m))%m;
}

function square(n) {
    return n*n;
}

/*The difference between the first and second version is that
in the first we are telling to the interpreter that he ha to 
calculate every term in expmod()*expmod(). While in the
second form he can let the execution until he
reach the more depth level of iteration. 
That means that 
in frist version he has to calculete n term, he has to do n steps,
but in the second form he just has to calculate log(n) terms.
for example to exp(n, 7,m) 
he has to calculate: 
(base*square(base*(square(base*1%m)%m)%m)%m)%m
4 steps (if we count base*1 as 0) + 5 steps for %m
instead that:
(base*(base*(base*(base*(base*(base%m)%m)%m)%m)%m)%m)%m
6 steps + 7 steps for %m.
Note: In each step the interpreter is calculating the module of 
the base, so that it does not exceed the maximum value limit 
for an integer in javascript
*/
