//Q. write a program to find the area of a circle triangle and rectangle!

var area = "circle";
var pi = 3.14;
var l = 5;
var b = 4;
var r = 3;

if (area == "circle") {
  console.log("the area of a circle is" + " " + pi * r ** 2);  /*A = πr² */

} else if (area == "triangle") {
  console.log("the area of a triangle is" + " " + (b * l) / 2);  /*A = b * l / 2*/

} else if (area == "rectangle") {
  console.log("the area of a rectangle is" + " " + b * l);  /*A = a * b*/

} else {
  console.log("the area is not define");
}

// Switch method

switch (area) {
  case "circle":
    console.log("the area of a circle is" + " " + pi * r ** 2);
    break;

  case "triangle":
    console.log("the area of a triangle is" + " " + (b * l) / 2);
    break;

  case "rectangle":
    console.log("the area of a rectangle is" + " " + b * l);
    break;
  default:
    console.log("the area is not define");
}
