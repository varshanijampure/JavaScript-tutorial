// 11. Function accepts time in seconds and return the time in hours.

function timeSecHr(n) {
        return (n/3600);
  };
  console.log(timeSecHr(5000));

// 12. Function that counts the number of digits in an integer

function countDigits(num) {
    var count =0;
    while(num!=0) {
        num = parseInt(num / 10);
        count ++;
    }
    return count;
}
console.log('The number of digits in 1243000000 = '+countDigits(1243000000));

// 13 program for make the number twice
function makeTwice(num) {
    var count = countDigits(num);
    switch (count) {
        case 1:
            return num*10+num;
        case 2:
            return num*100+num;
        case 3:
            return num*1000+num;
    }
}
console.log(makeTwice(123));

//14. function that counts number of digits in a integer

// 15 find the 100th number in a 4digit
function calcuDighundred(num) {
    var x = parseInt (num/100);
    var y = x%10;
    return y; 
}
console.log('Hundredth number :'+calcuDighundred(7893)); 

// 16 calculate required runrate
function calRunRate(target,maxOvers,currentScore,oversBowled) {
    return ((target/maxOvers) - (currentScore/oversBowled));
}

console.log('The Required net runrate = '+calRunRate(320,50,50,10));

//17 given a 3 digits number

//18 sum of two digits
function sumTwoDigits(a) {
    var y = parseInt (a/10); 
    var z = a%10;
    return y+z;
}
console.log('Sum of 2 digits number is :'+sumTwoDigits(99)); 

//18 sum of two digits
function sumTwoDigits(a) {
    var y = parseInt (a/10); 
    var z = a%10;
    return y+z;
}

console.log('sum of 2 digits'+sumTwoDigits(46));

// 19 given 3 booleans as input return the and of all 3 booleans -- check
function digBoolean(x,y,z) {
    return (x && y && z);
}

console.log('boolean value '+digBoolean(1,true,1));

// 20 Given 3 number as input retun which is greater
function numGreater(num1,num2,num3) {
    return (num1>num2 && num1>num3);
}
console.log('num1 greater than '+numGreater(0,3,2));

//21 number is ascending order
function ascendNum(num1,num2,num3) {
    return (num1 < num2 && num2 < num3);
}

console.log('Is Asending '+ascendNum(2,4,6));

// 22-24 needs doing

// 25 given q number if it is divisible by 3 or 7
function numDiv(num) {
    return (((num%3)==0) || ((num%7)==0));
}

console.log('IS div by 3 or 7 = '+numDiv(28));

// 26 largest of 3 numbers
function threeLargeNum(num1,num2,num3) {

    if(num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log('largest num = '+threeLargeNum(54,119,34));



// 27 DAYS IN MONTH
function dayInMonth(num1,year) {
   var noOfDays;

    switch (num1) {
        //console.log('here 3');
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;

        case 2:
            if((year % 4 == 0)&&(year % 100 != 0)|| (year % 400 == 0))
                return 29;
            else
                return 28;  
        default :
           return 'Input correct Month';
    }
}
console.log('days in  month '+dayInMonth(22,2001));
    var z = a%10;
    return y+z;
}

// 29.

function isDigit(num) {
if (num >= 0 && num <= 9) {
    // it is a number
    return true;
} else {
    // it isn't
    return false
}
}
console.log('It is digit' +isDigit('a'))

// 30.Middchar should be displayed

function midChar(char1)
var position;
var length;

if(str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
} else {
    position = str.length / 2 - 1;
    length = 2;
}

return str.substring(position, position + length)
}

console.log(extractMiddle("handbananna"));