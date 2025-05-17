//TYPE CONVERSION :- converting one datatype to another
//Implicit type conversion : JavaScript automatically converts types when necessary.
//Explicit type conversion : You convert values manually using built-in functions.

// console.log('5' + 1);      // '51'   → number 1 is converted to string
// [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// 51

// console.log('5' - 1);      // 4      → string '5' is converted to number
// [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// 4

// console.log(true + 1);     // 2      → true becomes 1
// [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// 2

// console.log(false + 1);    // 1      → false becomes 0
// [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// 1

// + operator: if one operand is a string → converts both to string.
// Other operators (-, *, /): convert to number.

//  let a='4'-true; 4 is a string and true is a boolean , - operator will turn string to number  so output will be 3
//  console.log(a)
//  [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// 3

// console.log("hello"+true) true converts to string because of + operator
// [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// hellotrue

// let a='3'
// let b=2
// console.log(a-b) '-' operator will turn string to number
// [Running] node "c:\Users\akshi\OneDrive\Desktop\WEB dev cohort\JAVASCRIPT\basicsofjs\typeconversion.js"
// 1

