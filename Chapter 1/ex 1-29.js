
function sum(f, a, next, b,k=()=>1,i=0){
    return a>b
        ?0
        :k(i)*f(a) + sum(f, next(a), next, b,k,i+1)
}

function integral_simpson(f, a, b, dx){
    function fact(i){
        return i===0
            ?1
            :a===b//almost_equal(a,b)
            ?1
            :i%2==0
            ?4
            :2
    }
    function add_dx(x){
        return x + dx
    }
    return sum(f,a,add_dx,b,fact)*dx/3
}



function square(y){
    return y*y
}
function inc(t){
    return t+1
}
console.log(sum(square,1,inc,2))

console.log(integral_simpson(square,0,1,0.001))
//Call stack problem with dx<0.001