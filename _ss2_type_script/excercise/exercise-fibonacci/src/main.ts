let array: number[] = [0];
let sum: number = 0;

function fibonacci(x: number) :number {
    if(x<=2) {
        return 1
    }
    return fibonacci(x - 1) + fibonacci(x - 2)
}

function showFibonacci(n:number) {
    for (let i = 1; i <n ; i++){
        array.push(fibonacci(i));
        sum+=fibonacci(i);
    }
    console.log(n + " số fibonacci đầu tiên là: " + array.toString())
    console.log("Tổng của " + n + " số trên là: " + sum)
}

showFibonacci(10);





