function square(t){
    return t*t;
}

function compose(g,h){
    return x=>g(h(x));
}

//**********
 
function repeated(f, k) {
    function iter(result, k) {
        return k===1
            ? result
            : iter(compose(result, f), k-1)
    }
    return iter(f, k)
}

display(repeated(square, 2)(5));
/*
function display(m){
    console.log(m);
}
*/