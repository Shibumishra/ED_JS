//Enter a number prime a not!!

var num = 17;
var count=0;
for(var i=1; i<=num; i++){
  if(num%i === 0){
    count++;
  }
}
if(count === 2){
  console.log(num +"prime number");
}else{
console.log(num +"Not prime number");
}


//WAP to print 20 even number
console.log("*******************2nd**********************");
for(var num=0; num<=20; num=num+2){
  console.log(num);
}