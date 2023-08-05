const tolerance = 0.00001;
function fixed_point(f, first_guess){
    function close_enough(x, y){
        display(abs(x -y));
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

const x = fixed_point(x => math_log10(1000)/math_log10(x), 10);

display(x);
/*
function display(m){
    console.log(m);
}
function math_log10(t){
    return Math.log10(t);
}
*/