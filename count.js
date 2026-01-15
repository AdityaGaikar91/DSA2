// Write a function that returns count of digits in a number

function countDigits(n) {
    let count = 0;
    while(n>0){
        n = Math.floor(n/10)
        count++;
    }
    return count
}

console.log(countDigits());
