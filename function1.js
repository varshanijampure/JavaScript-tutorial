// ASSIGNMENT FOR FUNCTIONS
//1. FUNCTION WHICH ACCEPT 3 NUMBERS AND RETURNS ADDITION OF 3 NUMBERS

function addNum(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;
}

var result = addNum(10,20,30);
console.log(result);


//2. FUNCTION TAKES TIME AND DISTANCE AS I/P AND RETURNS SPEED.

function calcuSpeed(distance,time){
    //var speed = distance/time;
    return distance/time;
}

//var result = calcuSpeed(1,10)
console.log(calcuSpeed(1,10));

//3. Calculate Area of Circle

function calcuArea(pi,radius){
    return pi*radius*radius;
}

console.log(calcuArea(3.14,2));

//4. calculate factorial of number

function calcuFactorial(n){
    return numFact = n * (n - 1);
}
console.log(calcuFactorial(5));

//5. Function which takes integer as input and returns true if it Even.

function calcuEvenOdd(n){
    if (n%2 == 0)
        return true;
    else 
        return false;
}
console.log(calcuEvenOdd(5));

// Different way to calculate Even and Odd
function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
  
function isOdd(n) {
    return isEven(Number(n) + 1);
  }
console.log(calcuEvenOdd(3));

//6. Function which takes integer as input and returns true if it Odd.

function calcuOdd(n){
   return(n%2 != 0);
}
console.log(calcuOdd(4));

// Same program different way

function calcuEvenOdd(n){
    if (n%2 !== 0)
        return true;
    else 
        return false;
}
console.log(calcuEvenOdd(6));


//7. An integer as input and return true if it is prime number or return false.

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(isPrime(4));
  
//DBT 8. An integer as input and returns true if it is palindrome fslse if it is not.

//function isPalindrome(num)
var num = 12121;
var numBkp = num;
var rev = 0;
while(num != 0){
    rev = (rev*10 +(num%10));
    num = num/10;
    num = parseInt(num/10);
}
if(numBkp == rev)
    console.log(numBkp + ' : is palindrome');
else
console.log(numBkp + ' : is not a palindrome');

// 9.An integer as input and returns a Fibonacci series of that size.

function fibonacci(num) 
{
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++) {  
    
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 
console.log(fibonacci(5));
console.log(fibonacci(8));

//Doubt
var looping = function(n) {
var a = 0, b = 1, f = 1; 
for(var i = 2; i <= n; i++) { 
    f = a + b; 
    a = b; 
    b = f; 
} return f; 
};
console.log(looping(5));
console.log(looping(8));

// 10. An integer as input and returns true if it divisible by 6 and false if it is not.

function divBysix(n) {
    if (n % 6 === 0) 
          return true;  
    else {
          return false;    
      }
  };
  console.log('divby6 : ' +divBysix(6));

  //

  function divBysixa(n) {
      return (n % 6 == 0);
  }
  console.log('divby 6 : ' +divBysixa(6));
  