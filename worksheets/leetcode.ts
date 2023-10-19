export function generateParenthesis(n: number): string[] { // 22
    let result: string[] = [];

    function dp(openN, closedN, path: string) {
        if (openN == closedN && closedN == n) {
            result.push(path);
            return
        }
        if (openN < n) {
            dp(openN + 1, closedN, path + '(');
        }
        if (closedN < openN) {
            dp(openN, closedN + 1, path + ')');
        }
    }

    dp(0, 0, '');

    return result;
};

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

//[1,2,3,4] -> [2,1,4,3]
//[1,2,3,4,5,6,7,8] -> [2,1,4,3,6,5,8,7]
//[1,2,3] -> [2,1,3]
//[1] -> [1]
//[] -> []
export function swapPairs(head: ListNode | null): ListNode | null { // 24
    if (head == null) {
        return head;
    }
    if (head.next == null) {
        return head;
    }
    let newHead = null;
    let previous = null;
    let current: ListNode = head;
    while (current != null) {
        let tempNext = current.next;
        if (tempNext == null) {
            return newHead;
        }
        current.next = tempNext.next
        tempNext.next = current;

        if (previous != null) {
            previous.next = tempNext;
        }

        if (newHead == null) {
            newHead = tempNext;
        }

        previous = current;
        current = current.next
    }
    return newHead;
}

export function letterCombinations(digits: string): string[] {
    let mapping = new Map<string, string[]>([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]],
    ]);

    let result: string[] = [];
    function dp(digit: string, path: string) {
        if (digit.length == 1) {
            for (let letter of mapping.get(digit)) {
                result.push(path + letter);
            }
            return
        }
        for (let letter of mapping.get(digit)) {
            result.push(path + letter);
        }       
    }
    for (let i = 0; i < digits.length; i++) {
        let char = digits.charAt(i);
        
    }
    return result;
};

//nums1 = [-1,0,0,3,3,3,0,0,0];
//nums2 = [1,2,2];

export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m === 0 ){
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }
    //first m elements of nums1 are actual numbers, the rest (nums1.length - m) are filler zeros.
    let nums1Counter = 0;
    let nums2Counter = 0;
    
    while (nums2Counter < n) {
        let smallestInNums2 = nums2[nums2Counter];
        if (smallestInNums2 <= nums1[nums1Counter] || nums1Counter >= (m + nums2Counter)) {
            //shift everything forward
            for (let j = n + m - 1; j > nums1Counter; j--) {
                nums1[j] = nums1[j-1] 
            }
            nums1[nums1Counter] = undefined;
            //push in between
            nums1[nums1Counter] = smallestInNums2;
            nums2Counter++; 
        }
        nums1Counter++;
    }
};
//aa
//aab
//=> true
export function canConstruct(ransomNote: string, magazine: string): boolean {
    let count = new Map<string, number>([]);

    for (let char of magazine) {
        if (!count.has(char)) {
            count.set(char, 0)
        }
        count.set(char, count.get(char) + 1);
    }

    for (let char of ransomNote) {
        if (!count.has(char)) {
            return false;
        }
        if (count.get(char) == 0) {
            return false;
        }
        count.set(char, count.get(char) - 1);
    }
    return true
};

export function isIsomorphic(s: string, t: string) {
    function convertToNumbers(input: string): string {
        let found: string[] = [];
        let result = ''
        for (let i = 0; i < input.length; i++) {
            let numberToReplaceWith = found.findIndex((char) => char == input.charAt(i));
            if (numberToReplaceWith === -1) {
                numberToReplaceWith = found.length;
                found.push(input.charAt(i));
            }
            result += ' ' + numberToReplaceWith.toString();
        }
        console.log(found);
        return result
    }   
    
    console.log(convertToNumbers("abcdefghijklmnopqrstuvwxyzva"));
    console.log(convertToNumbers("abcdefghijklmnopqrstuvwxyzck"));
    return convertToNumbers(s) === convertToNumbers(t);
};