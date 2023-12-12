export class MaxHeap {
    data: number[];
    constructor() {
        this.data = [];
    }

    insert(x: number) {
        this.data.push(x);
        this._heapifyUp();
    }

    popLargest() {
        if (this.size() === 0) { return null; }
        let val: number = this.data[0];
        this._heapifyDown();
        return val;
    }

    swap(i1, i2) {
        let temp: number = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    size() {
        return this.data.length;
    }

    _heapifyUp() {
        let lastIndex: number = this.data.length - 1;
        let parentIndex = Math.floor((lastIndex - 1)/2);
        while (parentIndex >= 0 && this.data[parentIndex] < this.data[lastIndex]) {
            this.swap(parentIndex, lastIndex);
            
            //move upwards
            lastIndex = parentIndex;
            parentIndex = Math.floor((parentIndex - 1)/2);
        }
    }

    _heapifyDown() {
        let index = 0;
        const lastIndex = this.data.length - 1;
        // Swap the first and last element
        this.swap(index, lastIndex);
        // Remove the last element (max element)
        this.data.pop();
    
        // Heapify down
        while (index < lastIndex) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestChildIndex = index;
    
            if (leftChildIndex < lastIndex && this.data[leftChildIndex] > this.data[largestChildIndex]) {
                largestChildIndex = leftChildIndex;
            }
    
            if (rightChildIndex < lastIndex && this.data[rightChildIndex] > this.data[largestChildIndex]) {
                largestChildIndex = rightChildIndex;
            }
    
            if (largestChildIndex === index) {
                break; // The node is in the correct position
            }
    
            this.swap(index, largestChildIndex);
            index = largestChildIndex;
        }
    }    
}

export function heapSort(arr: number[]): number[] {
    let heap: MaxHeap = new MaxHeap();
    arr.forEach(val => {
        heap.insert(val);
    });

    let sorted: number[] = [];

    while (heap.size() > 0) {
        sorted.push(heap.popLargest());
    }

    return sorted;
}

export function nthLargestElement(arr: number[], N: number): number {
    let heap: MaxHeap = new MaxHeap();
    arr.forEach(val => {
        heap.insert(val);
    });

    let value = 0;
    for (let index = 0; index < N; index++) {
        value = heap.popLargest();
    }
    return value;
}

export class HuffmanNode {
    name: string;
    frequency: number;
    left?: HuffmanNode;
    right?: HuffmanNode;
    constructor(name: string, frequency: number) {
        this.name = name;
        this.frequency = frequency;
    }
}

export class HuffmanTree {
    root?: HuffmanNode;
    
}