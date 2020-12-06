//Recursive Function
function factorialRF(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorialRF(n - 1);
    }
}
//Loop
function factorialL(n) {
    if (n < 0) return false;
    let result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorialL(4));
console.log(factorialRF(4));
