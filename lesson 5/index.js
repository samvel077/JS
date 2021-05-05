// function consoleLogger() {
//     console.log('Hello Jhon');
// }

// consoleLogger()


// function consoleLogger(name) {
//     console.log(name);
// }

// consoleLogger("Jhon");
// consoleLogger("Jane");


// function declaration

// function consoleLogger(n) {
//     let result = n * 4;
//     console.log(result);
//     return result;
// }

// let x = consoleLogger(15) / 6;

// alert(x);


// function expression

// const consoleLogger = function (n) {
//     let result = n * 4;
//     console.log(result);
//     return result;
// }

// let x = consoleLogger(15) / 6;


// arrow function

// const consoleLogger = (n) => {
//     let result = n * 4;
//     console.log(result);
//     return result;
// }

// let x = consoleLogger(15) / 6;


// let n = prompt();
// let a = Array(n);
// for (let i = 0; i < a.length; i++) {
//     a[i] = +prompt()
// }


// function multiplyByTwo(arr, num) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * num);
//   }
//   return result;
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArray2 = [10, 20, 3, 40, 50, 6, 7, 80, 9, 10];
function cut(arr) {
    let funArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 4) {
            funArray.push(arr[i]);
        }
    }
    return funArray;
}

cut(funArray)



let furniture = ['Table', 'Chairs', 'Couch'];
function foo(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].split(""));
    }
    return result
}

foo(furniture)



let myArray = [1, 2, 'One', true]
function foo(myArr) {
    let a = [];
    for (let i = 0; i < myArr.length; i++) {
        if (typeof myArr[i] === "number") {
            a.push(myArr[i] * myArr[i]);
        }
        else if (typeof myArr[i] === "string") {
            a.push(myArr[i].length);
        }
        else {
            a.push(null);
        }
    }
    return a
}

foo(myArr)



let student1Courses = ['Math', 'English', 'Programming']
let student2Courses = ['Geography', 'Spanish', 'Programming']
function findSimilarItems(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                res.push(arr1[i]);
            }
        }
    }
    return res;
}

foo(student1Courses, student2Courses)



function findSimilarItems(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        arr2.includes(arr1[i]) ? res.push(arr1[i]) : null
    }
    return res;
}



function countOfTypes(arr1, arr2) {
    let res = {
        strings: 0,
        numbers: 0,
        booleans: 0,
        objects: 0,
    };
    let newArr = arr1.concat(arr2)
    for (let i = 0; i < newArr.length; i++) {
        if (typeof newArr[i] === 'number') {
            res.numbers++
        }
        if (typeof newArr[i] === 'string') {
            res.strings++
        }
        if (typeof newArr[i] === 'boolean') {
            res.booleans++
        }
        if (typeof newArr[i] === 'object') {
            res.objects++
        }
    }
    return res;
}



function countOfTypes(arr1, arr2) {
    let res = {};
    let newArr = arr1.concat(arr2)
    for (let i = 0; i < newArr.length; i++) {
        if (!res[typeof newArr[i]]) {
            res[typeof newArr[i]] = 1
        } else {
            res[typeof newArr[i]]++
        }
    }
    return res;
}

