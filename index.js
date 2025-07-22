// const name = "Mahendra Mer"
// console.log("Hello,"+name)
// console.log(`Hello How Are You ${name}`)


// 1) Check even or odd

// const n = 32
// if(n%2==0)
//     {
//        console.log("even number")
//     }
// else
//     {
//         console.log("odd number")
//     }


// 2) Find the maximum of two number


// const a1=111
// const a2=120

// if(a1>a2)
// {
//     console.log(a1+" is maximum")
// }
// else
// {
//     console.log(a2+" is maximum")
// }


// 3) check leap year

// const year = 2002

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
// {
//   console.log(year + " is a leap year")
// }
//  else
// {
//   console.log(year + " is not a leap year")
// }


// 4) sum of natural number

// const n=5
// let sum=0

// for(let i=1;i<=n;i++)
// {
//     sum += i
// }
// console.log(n)
// console.log(sum)


// 5)Factorial of a number

// function fact(n)
// {
//     let a=1

//     for(let i=1;i<=n;i++)
//     {
//         a*=i;
//     }
//     return a
// }
// console.log(fact(3))


// 6)Multiplication table

// const a=21

// for(let i=1;i<=10;i++)
// {
//     console.log(`${a}*${i}=${a*i}`)
// }


// 7) Reverse a number

// let num = 1234;
// let reversed = 0;


// while (num > 0) 
// {
//   reversed = reversed * 10 + (num % 10)
//   num = (num - (num % 10)) / 10
// }

// console.log(reversed);


// 8. Palindrome Check (Number)

// const number = 1221;
// let reversed = 0;
// let temp = number;

// while (temp > 0) 
// {
//     let digit = temp % 10
//     reversed = reversed * 10 + digit
//     temp = (temp - digit) / 10
// }

// if (number === reversed)
// {
//     console.log(number + " is a Palindrome")
// }
// else 
// {
//     console.log(number + " is NOT a Palindrome")
// }


// 9. Check Prime Number

// let num = 6
// let count = 0


// for(let i = 0; i<= num; i++)
// {
//     if(num %i === 0)
//     {
//         count++
//     }
// }

// if(count === 2)
//     console.log("Prime")
// else
//     console.log("Not prime")


// 10) count digits in a number

// const num = 82382;
// const digits = (num, count = 0) => {
//    if(num){
//       return digits(Math.floor(num / 10), ++count);
//    };
//    return count;
// };
// console.log(digits(num));
// // console.log(digits(53453));
// // console.log(digits(5334534534));



// let user = 123456
// let len = 0
// str = user.toString()

// for(let i=1; i <= str.length; i++){
//         len=i
// }
// console.log(len)



// const path =  require("path");

// console.log('Directory name:', __dirname);
// console.log(path.basename(__dirname + "/myfile.txt"));
// console.log("Full Path:",path.resolve(__dirname,"myfile.txt"))


// const moment = require("moment");
// console.log("Current date and time:",moment().format("DD-MM-YYYY HH:MM:SS"));

// const ls = require("lodash");
// console.log("Capitalize:",ls.capitalize("Hello world"));

// const fs = require("fs")

// fs.writeFile("best.txt","Hello,MCA class",(err)=>
//     {
//         if(err)throw err;
//         console.log("File has been saved");
//     });

// fs.readFile("best.txt","utf8",(err,data)=>
//     {
//         if(err)throw err;
//         console.log("File Content:",data);
//     });