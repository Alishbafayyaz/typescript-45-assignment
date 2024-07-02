// More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//equality with strings
let book = 'elsa';
console.log("Testing equality with strings:");
console.log(book == "elsa"); // True
console.log(book == "ELSA"); // False
// inequality with strings
console.log("Testing inequality with strings");
console.log(book != "elsa"); // False
console.log(book !== "ELSA"); // True
//Test using the lower case function
console.log("Testing the LowerCase");
console.log(book.toUpperCase() == "ELSA"); //True
console.log(book.toLowerCase() == "ELSA"); //False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Testing equality");
console.log(5 == 5); //True
console.log("Testing Not equal to");
console.log(5 != 5); //False
console.log("Testing Greater than");
console.log(5 > 8); //False
console.log("Testing Less than");
console.log(7 < 9); //True
console.log("Testing Less than equal to");
console.log(5 <= 4); //False 
console.log("Testing Greater than equal to");
console.log(6 >= 6); //True
//Tests using "AND" and "OR" operators
console.log("Testing AND Operator");
console.log((5 < 7) && (7 > 9)); //False
console.log((5 < 7) && (9 > 1)); //True
console.log("Testing NOT Operator");
console.log((5 < 7) || (7 > 9)); //True
console.log((5 < 3) || (5 > 9)); //False
// Test an item in a array
let fruits = ['apple', 'banana', 'mango', 'pineapple'];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes('apple')); // True
console.log(fruits.includes('guave')); // False
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
console.log(!!fruits.includes("mango")); //False 
export {};
