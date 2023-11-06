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
        return result
    }   
    
    return convertToNumbers(s) === convertToNumbers(t);
};

export function majorityElement(nums: number[]): number {
    let mapping = new Map<number, number>();
    for (let num of nums) {
        if (!mapping.has(num)) {
            mapping.set(num, 0);
        }
        mapping.set(num, mapping.get(num) + 1);
        if (mapping.get(num) > Math.floor(nums.length/2)) {
            return num;
        }
    }
};

//[7,1,5,3,6,4];
// 1 -> 6: profit = 5
export function maxProfit(prices: number[]): number {
    let max = 0;
    let sell = 1;
    let buy = 0;

    while(sell < prices.length) {
        if(prices[sell] > prices[buy]) {
            max = Math.max(max, prices[sell] - prices[buy])
        } else {
            buy = sell;
        }
        sell++;
    }

    return max;
};

/*
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.
*/
export function minimumTotal(triangle: number[][]): number {
    let n = triangle.length;
    let memo = new Map<string, number>;
    function dp(row: number, col: number) {
        let id = row.toString() + ',' + col.toString();
        if (memo.has(id)) {
            return memo.get(id);
        }
        if (row === n - 1) {
            return triangle[row][col];
        }
        let value = triangle[row][col] + Math.min(dp(row+1, col), dp(row+1, col+1));
        memo.set(id, value);
        return value;
    }
    return dp(0,0);
};

export function minPathSum(grid: number[][]): number {
    let totalRows = grid.length;
    let totalCols = grid[0].length;
    let memo = new Map<string, number>;
    function dp(row: number, col: number) {
        let id = row.toString() + ',' + col.toString();
        if (memo.has(id)) {
            return memo.get(id);
        }
        if (row === totalRows - 1 && col === totalCols - 1) {
            return grid[row][col];
        }
        if (row >= totalRows || col >= totalCols) { //out of bounds
            return Infinity;
        }
        let value = grid[row][col] + Math.min(dp(row+1, col), dp(row, col+1));
        memo.set(id, value);
        return value;
    }
    return dp(0,0);    
};

export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let totalRows = obstacleGrid.length;
    let totalCols = obstacleGrid[0].length;
    let memo = new Map<string, number>();
    function dp(row: number, col: number) {
        let id = row.toString() + ',' + col.toString();
        if (memo.has(id)) {
            return memo.get(id);
        }
        if (row >= totalRows || col >= totalCols) { //out of bounds or on obstacle
            return 0;
        }
        if (obstacleGrid[row][col] == 1 ) {
            return 0;
        }
        if (row === totalRows - 1 && col === totalCols - 1) {
            return 1;
        }

        memo.set(id, dp(row+1, col) + dp(row, col+1));
        return memo.get(id);
    }
    return dp(0,0);        
};

export function rob(nums: number[]): number {
    let n = nums.length;
    let memo = new Map<number, number>();

    function dp(startIndex: number) {
        //rob this house or rob next house
        if (memo.has(startIndex)) {
            return memo.get(startIndex);
        }
        if (startIndex > n - 1) {
            return 0;
        }
        if (startIndex === n - 1) {
            return nums[startIndex];
        }
        let value = Math.max(nums[startIndex] + dp(startIndex + 2), nums[startIndex+1] + dp(startIndex+3));
        memo.set(startIndex, value);
        return value;
    }
    return dp(0);
};

export function mergeAlternately(word1: string, word2: string): string {
    let longerLength: number = Math.max(word1.length, word2.length);
    let result: string = "";
    for (let i = 0; i < longerLength; i++) {
        if (i < word1.length) {
            result += word1.charAt(i);
        }
        if (i < word2.length) {
            result += word2.charAt(i);
        }
    }
    return result;
};

export function removeStars(s: string): string {
    let stack = [];
    for (let char of s) {
        if (char === "*") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};

//3[a]2[bc] => aaabcbc
//3[a2[c]] => accaccacc
export function decodeString(s: string): string {
    let stack: string[] = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char != ']') {
            stack.push(char);
        } else {
            let substr: string = "";
            while (stack[stack.length - 1] != '[') {
                substr = stack.pop() + substr;
            }
            stack.pop(); // pop the bracket
            let k: string = "";
            while (stack.length > 0 && !isNaN(parseInt(stack[stack.length-1]))) {
                k = stack.pop() + k;
            }
            stack.push(substr.repeat(parseInt(k)));
        }
    }
    return stack.join('');
};

export function permute(nums: number[]): number[][] {
    let result: number[][] = [];
    if (nums.length == 1) {
        return [[...nums]];
    }
    for (let i = 0; i < nums.length; i++) {
        let n: number = nums.shift();
        let perms: number[][] = permute(nums);
        for (let perm of perms) {
            perm.push(n);
            result.push(perm);
        }
        nums.push(n);
    }
    return result;
};

export function canJump(nums: number[]): boolean {
    let memo = new Map<number, boolean>();
    function dp(currentIndex: number): boolean {
        if (memo.has(currentIndex)) {
            return memo.get(currentIndex);
        }
        if (currentIndex == nums.length - 1) {
            memo.set(currentIndex, true);
            return true;
        }
        let maxJump = nums[currentIndex];
        if (maxJump == 0 || currentIndex >= nums.length) {
            memo.set(currentIndex, false);
            return false;
        }
        for (let i = 1; i < maxJump + 1; i++) {
            if (dp(currentIndex + i)) {
                return true;
            }
        }
        memo.set(currentIndex, false);
        return false;
    }

    return dp(0);
};

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head.next == null) {
        return null;
    }

    let readyToRemove: boolean = false

    function recurse(node: ListNode) {
        if (node.next == null) {
            if (n == 1) {
                readyToRemove = true;
            }
            return 1;
        }
        let val: number = 1 + recurse(node.next);
        if (readyToRemove) {
            readyToRemove = false;
            node.next = node.next.next;
            return;
        }
        if (val == n) {
            readyToRemove = true;
        }
        return val;
    }
    recurse(head);

    if (readyToRemove) {
        head = head.next;
    }

    return head;
};

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let seen = new Map<number, boolean>();
    let current: ListNode = head;
    let previous: ListNode = head;
    while (current) {
        if (seen.has(current.val)) {
            previous.next = current.next;
        } else {
            previous = current;
        }
        seen.set(current.val, true);
        current = current.next;
    }
    return head;
};