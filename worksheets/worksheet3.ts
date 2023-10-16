import { assert } from "console";

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
    let value: number = fibonacciMemoized(n-1, memo) + fibonacciMemoized(n-2, memo);
    memo.set(n, value);
    return value;
}

export function fibonacciIterative(n: number): number {
    let n1: number = 1;
    let n2: number = 1;
    for (let i: number = 2; i < n; i++) {
        let temp: number = n1;
        n1 = n2;
        n2 = n1 + temp;
    }
    return n2;
}

export function gcd(n1: number, n2: number): number {
    assert(n1 > 0 && n2 > 0 && n1 % 1 === 0 && n2 % 1 === 0, 'Please provide positive integers!');
    if (n1 === n2) {
        return n1;
    }
    let positiveDiff: number = Math.abs(n1 - n2);
    let smaller: number = Math.min(n1, n2);
    return gcd(positiveDiff, smaller);
}