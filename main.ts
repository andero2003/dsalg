import { fibonacci, fibonacciIterative, fibonacciMemoized, gcd, getPalindromeSubstrings, isPalindrome, mergeSort, quickSort } from "./worksheets/worksheet3";
import { ListNode, canConstruct, canJump, decodeString, deleteDuplicates, generateParenthesis, isIsomorphic, majorityElement, maxProfit, merge, mergeAlternately, minPathSum, minimumTotal, permute, removeNthFromEnd, removeStars, rob, swapPairs, uniquePathsWithObstacles } from './worksheets/leetcode';
import { LinkedList } from "./worksheets/worksheet4";


let head = new ListNode(1, new ListNode(1, new ListNode(1)));
head = deleteDuplicates(head);
console.log(head);