// function isIp(str) {
//   let splited = str.split(".");
//   if (splited.length !== 4) {
//     return false;
//   }
//   for (let i = 0; i < splited.length; i++) {
//     //0
//     if (splited[i].length > 1 && splited[i].startsWith("0")) {
//       return false;
//     }
//     if (
//       +splited[i] > 255 ||
//       +splited[i] < 0 ||
//       splited[i] === "" ||
//       isNaN(+splited[i])
//       // splited[i].startsWith(`0${i}`)
//     ) {
//       return false;
//     }
//   }
//   return true;
// }




// function isIp(str) { //192.135.12.56
//     let splited = str.split("."); // ['192', '135', '12', '56']
//     if (splited.length !== 4) {
//         return false;
//     }
//     let res;
//     splited.forEach((el) => {
//         if (
//             +el > 255 ||
//             +el < 0 ||
//             el === "" ||
//             isNaN(+el) ||
//             (el.length > 1 && el.startsWith("0"))
//         ) {
//             res = false;
//             return res;
//         }
//         res = true;
//         return res;
//     });
//     return res;
// }



// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }

// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


function time() {
    time = new Date();
    time.setFullYear(time.getFullYear() - 1)
    console.log(time);
}

time()