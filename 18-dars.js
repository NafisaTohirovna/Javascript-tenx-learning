// recursiv function

let n = 1;
function foo(){
    n++
    if(n != 20){
        return foo()
    }
    return n
}
console.log(foo());