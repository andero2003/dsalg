import { fibonacci, fibonacciIterative, fibonacciMemoized, gcd, getPalindromeSubstrings, isPalindrome, mergeSort, quickSort } from "./worksheets/worksheet3";
import { ListNode, canConstruct, canJump, decodeString, deleteDuplicates, generateParenthesis, isIsomorphic, majorityElement, maxProfit, merge, mergeAlternately, minPathSum, minimumTotal, permute, removeNthFromEnd, removeStars, rob, swapPairs, uniquePathsWithObstacles } from './worksheets/leetcode';
import { LinkedList } from "./worksheets/worksheet4";
import { TreeNode, breadthFirstTraversal, countLeafNodes, countNodes, deleteFromBST, inOrder, insertIntoBST } from "./worksheets/worksheet5";
import { AVLTree, SplayTree } from "./worksheets/worksheet6";
import { chaining, linearProbing, quadraticProbing } from "./worksheets/worksheet8";
import { MaxHeap, heapSort, nthLargestElement } from "./worksheets/worksheet9";
import { Graph } from "./worksheets/worksheet10";

let graph = new Graph();
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(7);
graph.addVertex(10);

graph.addEdge(3, 7);
graph.addEdge(10, 2);
graph.addEdge(7, 10);
graph.deleteEdge(3, 2);
graph.deleteEdge(3, 7);

graph.deleteVertex(7);

console.log(graph);