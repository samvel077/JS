// function centuryFromYear(year) {
//     if (!isNaN(+year)) {
//         return Math.ceil(+year / 100);
//     }
//     return new TypeError('String is not a number')
// }


// function time(time) {
//     if (time.getMonth() <= 3) {
//         console.log(1);
//     }
//     else if (time.getMonth() <= 6) {
//         console.log(2);
//     }
//     else if (time.getMonth() <= 9) {
//         console.log(3);
//     }
//     else if (time.getMonth() <= 12) {
//         console.log(4);
//     }
// }

// time(new Date(prompt()))



// function time(time) {
//     let m = time.getMonth() + 1
//     console.log(Math.ceil(m / 3));
// }

// time(new Date(prompt()))



// let chr;

// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j < i; j++) {
//         chr = chr + ("*");
//     }
//     console.log(chr);
//     chr = '';
// }



// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log(i + ' Fizz');
//     }
//     else if (i % 5 === 0) {
//         console.log(i + ' Buzz');
//     }
//     else if (i % 3 === 1) {
//         console.log(i);
//     }
//     else if (i % 5 === 1) {
//         console.log(i);
//     }
//     else {
//         console.log(i);
//     }
// }



// function tiemMin(min) {
//     let hours = min / 60;
//     let hhours = Math.floor(hours);
//     let minutes = (hours - hhours) * 60;
//     let mminutes = Math.round(minutes);

//     console.log(hhours + ' sham' + " " + mminutes + ' rope');
// }

// tiemMin(prompt())


// let arr = [4, 'abc', 'abc', 'abc', 3, 3, 'abc', 3, 'abc', 5, 4, 9, 3]
// let m = 0;
// let max;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             max++
//         }
//         if (m < max) {
//             m = max
//         }
//     }
//     max = 0;
// }

// console.log(m);



// function mostFrequentItem(arr) {  //[ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
//     let obj = {};
//     arr.forEach(el => {
//         if(!obj[el]){
//             obj[el] = 1
//         } else {
//             obj[el]++
//         }
//     })
//     let max = 0;
//     Object.keys(obj).forEach(el => {
//         if(obj[el] > max){
//             max = obj[el]
//         }
//     })
//     return max
// }



// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while (y) {
//         var t = y;
//         y = x % y;
//         x = t;
//     }
//     return x;
// }

// console.log(gcd_two_numbers(12, 13));
// console.log(gcd_two_numbers(9, 3));

