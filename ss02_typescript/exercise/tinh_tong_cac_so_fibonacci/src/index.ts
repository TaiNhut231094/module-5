// happy coding 👻

function fibonacci(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let sum = 0;

function xuatDayFibonacci(n : number) : void {
    for (let i = 0; i < n; i++) {
        sum += fibonacci(i);
        console.log(fibonacci(i));
    }
}
xuatDayFibonacci(20);

console.log(`Tổng dãy số Fibonacci là: ${sum}`);
