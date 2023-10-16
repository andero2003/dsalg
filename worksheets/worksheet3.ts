export function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

export function fibonacciMemoized(n: number, memo: Map<number, number> = new Map()): number {
    if (memo.has(n)) {
        return memo.get(n);
    }
    if (n <= 2) {
        return 1;
    }
    let value = fibonacciMemoized(n-1, memo) + fibonacciMemoized(n-2, memo);
    memo.set(n, value);
    return value;
}

export function fibonacciIterative(n: number): number {
    let n1 = 1;
    let n2 = 1;
    for (let i = 2; i < n; i++) {
        let temp = n1;
        n1 = n2;
        n2 = n1 + temp;
    }
    return n2;
}