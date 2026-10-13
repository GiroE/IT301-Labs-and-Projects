// Var vs let vs const


/* let x = 5;
console.log(`This is the type of x when x = 5: ${typeof x}`); //gives data type of x, ` = string literal
x = 'hi'; // var allows redeclaration and reassignment
console.log(`This is the type of x when x = hi: ${typeof x}`); //gives data type of x, ` = string literal

/* Comment
Multiple lines
*/

/* let x = 7;
if (x>6) {
    var greet = 'hi';
}
console.log(greet); // var is function scoped, so it can be accessed outside of the if block */

let answer = Number(prompt('How old are you?')); // Number() converts string to number
document.write(`My age is: ${answer}`); // document.write() writes to the HTML document
