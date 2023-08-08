function inc(m){
    return m+1;
}
function square(t){
    return t*t;
}

//***************** 

function compose(g,h){
    return x=>g(h(x));
}
display(compose(square,inc)(6));
/*
function display(m){
    console.log(m);
}
*/