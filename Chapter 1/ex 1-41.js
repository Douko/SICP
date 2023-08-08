function inc(i){
    console.log('=>'+i);
    return i+1;
}
function double(f){
    return m=>{
        console.log(m);
        return f(f(m));
    };
}
display(double(double(double))(inc)(0));
//console.log(double(double)(double(double))(inc)(0));
//console.log(double(double)(inc)(0));
//console.log(double(inc)(double(inc)(0)));
//console.log(double((inc))(0));
console.log(double(inc)(0))
//console.log(double(inc(0)));

/*
function display(m){
    console.log(m)
}
*/