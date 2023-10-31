import { fibonacci, fibonacciIterative, fibonacciMemoized, gcd, getPalindromeSubstrings, isPalindrome, mergeSort, quickSort } from "./worksheets/worksheet3";
import { ListNode, canConstruct, canJump, decodeString, generateParenthesis, isIsomorphic, majorityElement, maxProfit, merge, mergeAlternately, minPathSum, minimumTotal, permute, removeStars, rob, swapPairs, uniquePathsWithObstacles } from './worksheets/leetcode';
import { LinkedList } from "./worksheets/worksheet4";


let linkedList = new LinkedList();
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(1);
linkedList.insert(7);

linkedList.reverse();

linkedList.traverse(console.log);
