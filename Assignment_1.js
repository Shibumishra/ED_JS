console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

// Question 2:
// var enteredAlphabet = 'd'
// Write a program to check vowel or consonant using switch case. Change value of enteredAlphabet and check if your code works fine.
// vowels: ‘a’, ‘e’, ‘i’, ‘o’, ‘u’, ‘A’, ‘E’, ‘I’, ‘O’, ‘U’
// Example
// enteredAlphabet: c
// Output: 'c' is consonant
// enteredAlphabet: a
// Output: 'a' is vowel

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10

console.log("Q1 END =====================");
var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.     ";
console.log(str1 + " " + str2.trim() + " " + str3.trim());

console.log("Q2 END =====================");
var enteredAlphabet = "a";
switch (enteredAlphabet) {
  case "a":
    console.log("is vowel");
    break;
  case "e":
    console.log("is vowel");
    break;
  case "i":
    console.log("is vowel");
    break;
  case "o":
    console.log("is vowel");
    break;
  case "u":
    console.log("is vowel");
    break;
  default:
    console.log("is consonant");
}

console.log("Q3 END =====================");
var opertor = "*";
var num1 = 10;
var num2 = 12;
switch (opertor) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid operato");
}

console.log("Q4 END =====================");
var side1 = 30;
var side2 = 30;
var side3 = 30;
if (side1 == side2 && side2 == side3) {
  console.log("Equilateral triangle.");
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("Isosceles triangle.");
} else {
  console.log("Scalene triangle.");
}

console.log("Q5 END =====================");
var unit = 20;
if (unit <= 50) {
  bill = unit * 0.5;
} else if (unit <= 100) {
  bill = 25 + (unit - 50) * 0.75;
} else if (unit <= 100) {
  bill = 100 + (unit - 150) * 1.2;
} else {
  bill = 250 + (unit - 300) * 1.5;
}

var sur_charge = bill * 0;
var total_bill = bill + sur_charge;
console.log("Electricity bill", total_bill);
