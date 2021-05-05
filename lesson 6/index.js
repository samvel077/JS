// function katarogh(fn) {
//     let a = 5;
//     let b = 15;
//     let x = fn(a, b)
//     return x
// }
// const artadryal = (x, y) => {
//     return x * y
// }
// const gumar = (x, y) => {
//     return x + y
// }



// let x = [10, 20 ,30, 40, 50, 60]
// x.map(function(el, index, array){
//     console.log(index);
// })



// let x = [10, 20 ,30, 40, 50, 60]
// x.map((el) => {
//     console.log(el);
// })



// let x = [10, 20 ,30, 40, 50, 60]
// let res = [];
// for (let i = 0; i < x.length; i++) {
//     res.push(x[i] * 2)
// }

// let y = x.map((el, index) => {
//     return el * 2
// })



// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let y = [6, 1, 5, 9, 15, 89, 12, 0, -12, -30, 8]

// let res = y.sort((a, b) => a - b)

// let res = [];
// for (let i = 0; i < x.length; i++) {
//     res.push(x[i] * 2)
// }

// let y = x.map(el => el * 2)

// let z = x.filter(el => el % 2 === 0)



// function chekPalindrome(str) {
//     let str1 = [];
//     str1 = str.split('').reverse().join('');
//     if (str1 === str) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }

// }

// chekPalindrome(prompt())



// let animals = ["dog", "cat", "house", "horse", "mouse"];

// let res = [];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i].includes("o")) {
//     res.push(animals[i]);
//   }
// }

// let res = animals.filter((animal) => animal.indexOf("o") !== -1);

// let x = animals.map((animal) => animal + " " + animal);

// let y = animals.filter((animal) => animal.length < 4);

// let find = animals.find((animal) => animal.startsWith("ho"));

// let filtered = animals.filter((animal) => animal.startsWith("ho"));


// console.log(filtered);



// function isIp(str) {
//     let splited = str.split(".");
//     if (splited.length !== 4) {
//         return false;
//     }
// for (let i = 0; i < splited.length; i++) {
//     if (+splited[i] > 255 || +splited[i] < 0 || splited[i] === "" || isNaN(+splited[i]) || splited[i].startsWith(0)) {
//         return false;
//     }
// }
// return true;
// }




// let ipAdd = prompt();
// let splited = ipAdd.split(".");
// let chekIp = .filter(ipEl => {
//     if (splited.length !== 4) {
//         console.log(false);
//     }
//     if (+splited > 255 || +splited < 0 || splited === "" || isNaN(+splited) || +splited.startsWith(0)) {
//         console.log(false);
//     }
//     else {
//         console.log(true);
//     }
// })













