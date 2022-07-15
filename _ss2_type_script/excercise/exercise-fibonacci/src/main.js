var array = [0];
var sum = 0;
function fibonacci(x) {
    if (x <= 2) {
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}
function showFibonacci(n) {
    for (var i = 1; i < n; i++) {
        array.push(fibonacci(i));
        sum += fibonacci(i);
    }
    console.log(n + "số fibonacci đầu tiên là: " + array.toString());
    console.log("Tổng của " + n + " số trên là: " + sum);
}
showFibonacci(10);
