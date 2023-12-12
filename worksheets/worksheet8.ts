import { ListNode } from "./leetcode";

const M = 20;

export function chaining() {
    let arr: Array<ListNode> = new Array<ListNode>(M);

    let values: number[] = [5, 10, 12, 14, 17, 25, 27, 30, 33, 45, 56, 64, 128, 129];
    
    for (let i = 0; i < values.length; i++) {
        let val: number = values[i];
        let hashIndex: number = val % M;
        if (!arr[hashIndex]) {
            arr[hashIndex] = new ListNode(val);
        } else {
            let current: ListNode = arr[hashIndex]
            while (current) {
                if (current.next) {
                    current = current.next
                } else {
                    current.next = new ListNode(val);
                    break;
                }
            }
        }
    }    
    console.log(arr);
}

export function linearProbing() {
    let arr: Array<number> = new Array<number>(M);

    let values: number[] = [5, 10, 12, 14, 17, 25, 27, 30, 33, 45, 56, 64, 128, 129];
    
    for (let i = 0; i < values.length; i++) {
        let val: number = values[i];
        let hashIndex: number = val % M;
        while (arr[hashIndex]) {
            hashIndex = (hashIndex + 1) % M;
        }
        arr[hashIndex] = val;
    }    
    console.log(arr);
}

export function quadraticProbing() {
    let arr: Array<number> = new Array<number>(M);

    let values: number[] = [5, 10, 12, 14, 17, 25, 27, 30, 33, 45, 56, 64, 128, 129];
    
    for (let i = 0; i < values.length; i++) {
        let val: number = values[i];
        let hashIndex: number = val % M;
        let start: number = hashIndex;
        let j = 1;
        while (arr[hashIndex]) {
            hashIndex = (start + j * j) % M;
            j++;
        }
        arr[hashIndex] = val;
    }    
    console.log(arr);
}
