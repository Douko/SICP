function average_damp(f){
    return x=> average(x, f(x));
}
function average(x, y){
    return (x+y)/2;
}
function abs(x){
    return x >= 0
        ? x
        : -x;
}
//************ */
function exp(base, n) {
    return n === 0
        ? 1
        : is_even(n)
        ? square(exp(base, n/2))
        :(base*exp(base, n - 1));
}
function square(t){
    return t*t;
}
function is_even(n){
    return n%2===0;
}
//***********
const tolerance = 0.00001;
function fixed_point(f, first_guess){
    function close_enough(x, y){
        //display(abs(x -y));
        return abs(x - y) <tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        return close_enough(guess, next)
            ? next
            : try_with(next);
    }
    return try_with(first_guess);
}
function fixed_point_of_transform(g, transform, guess){
    return fixed_point(transform(g), guess);
}

function rt_3(x){
    return fixed_point_of_transform(
        y => (exp(y,3)+x)/(2*(square(y))),
        average_damp,
        1
    );
}
//*******************************
function rt_n(x,n){
    function rtf_n(){
        return y=> n<4
           ? (exp(y, n) + x)/(2*exp(y, n-1))
           : n%4===0
           ? ((n-1)*exp(y, n) + x)/(n*exp(y, n-1))
           : n>4
           ? (((math_floor(n/4)*4)-1)*exp(y, n) + x)/(math_floor(n/4)*4*exp(y, n-1))
           : n<2
           ? NaN
           : NaN;
   }
   return fixed_point_of_transform(
        rtf_n(),
        average_damp,
        1
   );
}

//****************

function rt_nv2(x, n){

    const term = (y)=>x/exp(y,n-1);

    function repeated(result, f) {
        function iter(result,i) {
            return i>n
                ?result
                :i%4===0
                ?iter(f(result),i+1)
                :iter(result,i+1);
        }
        return iter(result,2);
    }
    return fixed_point_of_transform(
        repeated(term, average_damp),
        average_damp,
        1
    );
}


display(exp(4,2));
display(exp(5,3));
display(rt_3(8));
display(rt_n(256,8));
display(rt_nv2(4096,12));
display(rt_nv2(2048,11));
/*
function display(m){
    console.log(m);
}

function math_floor(m){
    return Math.floor(m);
}
*/