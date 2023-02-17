// A recursive function that counts up to 10
function counter (startNumber) {
    console.log(startNumber);
    startNumber++;
    if (startNumber > 10) {
        return 1;
    }
    counter(startNumber);
}

let testNumber = 0;
counter(testNumber);