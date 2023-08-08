//******************** 
function average(x, y){
    return (x + y)/2;
}
function square(t){
    return t*t;
}
function abs(x){
    return x >=0
        ? x
        : -x;
}
//*********************** 
function iterative_improve(good_enough,improve_guess){
    return guess=>good_enough(guess)
                ? guess
                : iterative_improve(good_enough,improve_guess)(improve_guess(guess));
}   

function improve(x){
    return guess=>average(guess, x/guess);
}
function is_good_enough(x){
    return guess=>abs(square(guess) - x) < 0.001;
}
//---------------------
function sqrtv2(x){
    return iterative_improve(is_good_enough(x), improve(x))(1);
}

display(sqrtv2(4));
/*
function display(m){
    console.log(m);
}
const sum=(x)=>(y)=>x+2*y;
console.log(sum(1)(2));
*/