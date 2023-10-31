export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export class LinkedList {
    head?: ListNode
    tail?: ListNode
    length: number
    constructor(head?: ListNode) {
        this.head = head;
        this.tail = head;
        this.length = (head === null ? 0 : 1);
    }

    isEmpty(): boolean {
        return this.head == null;
    }

    insert(value: any): void {
        let node: ListNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        if (this.tail != null) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    search(target: any): ListNode | null {
        if (this.isEmpty()) {
            return null;
        }
        let current: ListNode = this.head;
        while (current != null) {
            if (current.val == target) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    
    delete(target: any): ListNode | null { 
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.val == target) {
            let currentHead: ListNode = this.head;
            this.head = currentHead.next;
            if (currentHead == this.tail) {
                this.tail = null;
            }
            this.length--;
            return currentHead;
        }
        let current: ListNode = this.head;
        let previous: ListNode = null;
        while (current) {
            if (current.val == target && previous != null) {
                if (this.tail == current) {
                    this.tail = null;
                }
                this.length--;
                previous.next = current.next;
                return current;
            }
            previous = current;
            current = current.next; 
        }
        return null;
    }

    traverse(callback: Function) {
        let current: ListNode = this.head;
        while (current) {
            callback(current);
            current = current.next;
        }
    }

    sort(): void {
        if (this.isEmpty()) {
            return;
        }
        for (let i = 0; i < this.length; i++) {
            let swapped = false; 
            for (let j = 0; j < this.length - i - 1; j++) {
                let node1: ListNode = this.getByIndex(j);
                let node2: ListNode = this.getByIndex(j+1);
                if (node2 != null && node1.val > node2.val) {
                    let temp = node1.val
                    node1.val = node2.val;
                    node2.val = temp;
                    swapped = true;
                }
            }
            if (!swapped) { break; }
        }
    }
    getByIndex(j: number): ListNode {
        let i = 0;
        let current: ListNode = this.head;
        while (i < j) {
            i++;
            current = current.next;
        }
        return current;
    }

    //
    // 3 -> 4 -> 1 -> 7
    // 7 -> 1 -> 4 -> 3

    reverse(): void {
        if (this.isEmpty() || this.head.next == null) { return; }
        let previous: ListNode = null;
        let current: ListNode = this.head;
        let tempNext: ListNode = null;

        while (current != null) {
            tempNext = current.next;
            current.next = previous;
            previous = current;
            current = tempNext;
        }

        this.head = previous;
    }
}