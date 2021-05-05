// function factorial(num) {
//     if (num === 1 || num === 0) {
//         return 1
//     }
//     return num * factorial(num - 1)
// }

// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1


// rekursyaov
// function fibNumber(num) {
//     if (num === 0) {
//         return 0
//     }
//     if (num === 1) {
//         return 1
//     }
//     return fibNumber(num - 1) + fibNumber(num - 2)
// }



// // arandz rekursiayi
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }
  
//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   alert( fib(77) ); // 5527939700884757