
function firstTask() {
    for (let i = 5; i <= 10; ++i) {
        console.log(i);
    }
}
function secondTask() {
    for (let i = 20; i > 10; --i) {
        if (i == 13) { break; }
        else { console.log(i); }
    }
}
function thirdTask() {
    for (let i = 0; i <= 10; ++i) {
        if (i != 0 && i % 2 == 0) { console.log(i); }
    }
}
function fourthTask() {
    let i = 2;
    while (true) {
        if (i != 16) {
            if (i % 2 == 0) { i++; continue; }
            else { console.log(i); }
            i++;
        }
        else if (i == 16) { false; break; }
    }
}
function fifthTask() {
    var arrayOfNumbers = [];
    for(let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }
    for(let i in arrayOfNumbers) {
        console.log(arrayOfNumbers[i]);
    }
    return arrayOfNumbers;
}  
