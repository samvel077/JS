let name = prompt().toUpperCase();

switch (name) {
    case "SAMVEL":
        console.log("Hakobyan");
        break;
    case "YURIK":
        console.log("Ohanyan");
        break;
    case "GOR":
    case "SONA":
        console.log("Sargsyan");
        break;
    case "ANUSH":
        console.log("Hayrapetyan");
        break;
    case "DAVIT":
        console.log("Hakobyan");
        console.log("Chichyan");
        break;
    case "DERENIK":
        console.log("Khachatryan");
        break;
    default:
        console.log("Wrong Name");
}

let num = +prompt();
if (num % 2 === 0) {
    console.log('zuyg');
} else if (isNaN(num)) {
    console.log('wrong number');
} else {
    console.log('kent');
}

// let name = prompt()

// console.log(`Hellow ${name}`);