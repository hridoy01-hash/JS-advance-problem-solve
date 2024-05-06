// 1. Print all even numbers from 0 – 10

for (let i = 0; i < 10; i++) {
    const element = [i];
    if (element % 2 == 0) {
        console.log(element);
    }
}

function getEvenNumber(arry) {
    return arry.filter(number => number % 2 === 0)
}

let ArrayOFnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 12, 25, 23, 28];
const evenNumber = getEvenNumber(ArrayOFnumbers);
console.log("Even Number", evenNumber);