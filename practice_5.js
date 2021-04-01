console.clear();

// Primitive data types

// String

//***********************************************************//
var name = "harry";
console.log("My string is " + name);
console.log("Data type is " + typeof(name));

// Numbers
var marks = 34.4;
console.log("Data type is " + typeof(marks));

// Boolean
var isDriver = true;
console.log("Data type is " + typeof(isDriver));

// Null
var nullVar = null;
console.log("Data type is " + typeof(nullVar));

// Undefined
var undef = undefined;
console.log("Data type is " + typeof(undef));

// Reference Data Types

// Arrays
var myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + typeof(name));

// Object Literals
var stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log( typeof stMarks);

function findName() {
    
}
console.log( typeof findName);

var date = new Date();


console.clear();
var num;
num = String(45);
console.log(num);
console.log(typeof num);




//***********************************************************//
// Type conversion 
console.log('Welcome to tut5');
var myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
var booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

var date = String(new Date());
// console.log(date, (typeof date));

var arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

var i = 75;
// console.log(i.toString())

var stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

var number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

var mystr = Number("698");
var mynum = 34;

console.log(mystr + mynum);




//***********************************************************//
var res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number(' ')
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN


