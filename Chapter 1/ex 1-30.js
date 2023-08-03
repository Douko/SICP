// Type your program in here!


function sum(f,a , next, b, k){
    function iter(a, result,i){
        return a>b
            ? result
            : iter(next(a), result + f(a)*k(i+1),i+1);
    }
    return iter(a, 0,-1);
}

function integral_simpson(f, a, b, dx){
    function fact(i){
        return i===0
            ?1
            :a===b//almost_equal(a,b)
            ?1
            :i%2===0
            ?4
            :2;
    }
    function add_dx(x){
        return x + dx;
    }
    return sum(f,a,add_dx,b,fact)*dx/3;
}



function square(y){
    return y*y;
}
function inc(t){
    return t+1;
}
/*function display(m){
    console.log(m);
}*/
//display(sum(square,1,inc,2));
display(integral_simpson(square,0,1,0.00001));
5;
//Call stack problem with dx<0.001