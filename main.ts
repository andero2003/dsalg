import { fibonacci, fibonacciIterative, fibonacciMemoized, gcd, getPalindromeSubstrings, isPalindrome, mergeSort, quickSort } from "./worksheets/worksheet3";
import { ListNode, canConstruct, canJump, decodeString, deleteDuplicates, generateParenthesis, isIsomorphic, majorityElement, maxProfit, merge, mergeAlternately, minPathSum, minimumTotal, permute, removeNthFromEnd, removeStars, rob, swapPairs, uniquePathsWithObstacles } from './worksheets/leetcode';
import { LinkedList } from "./worksheets/worksheet4";
import { TreeNode, breadthFirstTraversal, countLeafNodes, countNodes, deleteFromBST, inOrder, insertIntoBST } from "./worksheets/worksheet5";
import { AVLTree, SplayTree } from "./worksheets/worksheet6";

const splayTree = new SplayTree();
const values = [10,20,30,40,50,25];

values.forEach((val) => {
    splayTree.insert(val);
})

breadthFirstTraversal(splayTree.root, (node) => {
    console.log(`${node?.val} `);
});