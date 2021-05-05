// let p = document.getElementById("p")
// let button = document.getElementById("btn")
// let inp = document.getElementById("name")

let img = document.querySelector('img')
img.width = 200
// let obj = {
//     a: 7,
//     b: 7
// }
let a;
img.addEventListener('click', () => {
    // if (obj.a !== 1) {
    //     img.width += 50
    //     obj.a-- 
    // }
    // else if (obj.a === 1) {
    //     img.width -=50
    //     obj.b--
    // }
    // if (obj.b === 2) {
    //     obj.a++
    // }
    // if (img.width === 450) {
    //     obj.b = 7
    // }

    if (img.width === 200) {
        a = true
    }
    if (a === true) {
        img.width += 50
    }
    if (img.width === 550) {
        a = false
        img.width -= 50
    }
    if (a === false) {
        img.width -= 50
    }
})


// button.addEventListener('click', () => {
//   alert(inp.value)
//   p.innerText = inp.value
//   inp.value = ''
//     p.style.fontSize = "40px"
//     inp.style.display = "block"
//     inp.width = "100%"  
//     p.style.backgroundColor = 'lightblue'
// })


// var elem = document.getElementById('task');
// elem.addEventListener('click', func);
// var elem1 = document.getElementsByClassName('cls');

// function func() {
//     var sum = 0;
//     for (var i = 0; i < elem1.length; i++) {
//         sum += +elem1[i].value;
//     }
//     var newElem = document.getElementById('sum');
//     newElem.value = sum;
// }