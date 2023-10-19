import { assert } from "console";

export function fibonacci(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function fibonacciMemoized(n: number, memo: Map<number, number> = new Map()): number {
    if (memo.has(n)) {
        return memo.get(n);
    }
    if (n <= 2) {
        return 1;
    }
    let value: number = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
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

export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    let mid: number = Math.floor(arr.length / 2);
    let left: number[] = mergeSort(arr.slice(0, mid));
    let right: number[] = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i: number = 0;
    let j: number = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

export function quickSort(arr: number[], start: number = 0, end: number = arr.length - 1): void {
    if (start < end) {
        let partitionIndex: number = partition(arr, start, end);
        quickSort(arr, start, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, end);
    }
}

function partition(arr: number[], start: number, end: number): number {
    let pivot: number = arr[end];
    let index = start;
    for (let k: number = start; k < end; k++) {
        if (arr[k] <= pivot) {
            [arr[k], arr[index]] = [arr[index], arr[k]];
            index++;
        }
    }
    [arr[index], arr[end]] = [arr[end], arr[index]];
    return index;
}

export function isPalindrome(input: string): boolean {
    if (input.length == 2) {
        return input.charAt(0) == input.charAt(1);
    }
    if (input.length < 2) {
        return true;
    }
    return isPalindrome(input.slice(1, input.length - 1));
}

export function getPalindromeSubstrings(input: string): string[][] {
    let result: string[][] = [];

    return result;
}


