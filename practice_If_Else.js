console.log("1 START =====================");
var year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("this year " + year + " is a leap year");
    } else {
      console.log("this year " + year + " not leap year");
    }
  } else {
    console.log("this year " + year + " is a leap year");
  }
} else {
  console.log("this year " + year + " not leap year");
}

console.log("2 START =====================");
var age = 19;
console.log(age >= 18 ? "please voteing" : "please not voteing");
