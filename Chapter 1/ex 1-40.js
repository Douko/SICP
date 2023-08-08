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

function abs(x){
    return x >= 0
        ? x
        : -x;
}

function square(t){
    return t*t;
}
//*************************
const dx = 0.00001;
const tolerance = 0.00001;0
function deriv(g){
    return x => (g(x+dx)-g(x))/dx;
}
function newton_transform(g){
    return x => x - g(x) / deriv(g)(x);
}
function newtons_method(g, guess) {
    return fixed_point(newton_transform(g), guess);
}

function sqrt(k){
    return newtons_method(y => square(y) -k, 1)
}



function cubic(a,b,c){
    return x => x*x*x + x*x*a + x*b + c;
}
display(newtons_method(cubic(0,0,1),1));
display(newtons_method(cubic(6,11,6),1));
/*
function display(m){
    console.log(m);
}
console.log(sqrt(9));
*/










