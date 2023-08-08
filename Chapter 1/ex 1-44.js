function compose(g,h){
    return x=>g(h(x));
}
 
function repeated(f, k) {
    function iter(result, k) {
        return k===1
            ? result
            : iter(compose(result, f), k-1)
    }
    return iter(f, k)
}
//******************** 
function smooth(f){
    const dx = 0.00001;
    return x=>(f(x-dx) + f(x) + f(x + dx))/3    
}

function n_smooth(f, n){
    return repeated(smooth, n)(f)
}
