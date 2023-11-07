import { fibonacci, fibonacciIterative, fibonacciMemoized, gcd, getPalindromeSubstrings, isPalindrome, mergeSort, quickSort } from "./worksheets/worksheet3";
import { ListNode, canConstruct, canJump, decodeString, deleteDuplicates, generateParenthesis, isIsomorphic, majorityElement, maxProfit, merge, mergeAlternately, minPathSum, minimumTotal, permute, removeNthFromEnd, removeStars, rob, swapPairs, uniquePathsWithObstacles } from './worksheets/leetcode';
import { LinkedList } from "./worksheets/worksheet4";
import { TreeNode, breadthFirstTraversal, countLeafNodes, countNodes, deleteFromBST, inOrder, insertIntoBST } from "./worksheets/worksheet5";


let root = new TreeNode(3);

insertIntoBST(5, root);
insertIntoBST(1, root);
insertIntoBST(12, root);
insertIntoBST(4, root);
insertIntoBST(8, root);
insertIntoBST(22, root);
insertIntoBST(2, root);
insertIntoBST(-1, root);

console.log(countLeafNodes(root));