function f(g){
    return g(2);
}
console.log(f(z=>z));
console.log(f(f));