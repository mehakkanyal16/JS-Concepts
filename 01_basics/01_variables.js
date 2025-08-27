const a=2025;   //const → constant variable, value cannot be reassigned.Block-scoped. 

let b="mehak@gmail.com"  //let → block-scoped variable, can be reassigned. Introduced in ES6 (modern JS).

var c="123456"   //var → function-scoped (older JS way).Can be redeclared & reassigned.Can cause unexpected behavior, so avoid in modern JS.

d="mumbai"  //No keyword (let/const/var) used → becomes global variable automatically.


console.table([a,b,c,d]) //Prints an array of values in tabular form.Easy to read/debug compared to console.log().

