var a = "a";
function foo() {
    var b = "b";
    var d = 1;
    if (d === 1) {
        const e = "e";
    }
    let c = "c";
    console.log(a);// a
    console.log(b);// b
    console.log(c);// c
    console.log(e);// e
}
console.log(a); //the output is a
// console.log(b); not defined (b,c,e are in the function scope, and they're not defined outside of it)
// console.log(c); not defined
// console.log(e); not defined