export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(x?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = x;
        this.left = left;
        this.right = right;
    }
}

export function insertIntoBST(val: number, root: TreeNode) {
    if (val < root.val) {
        //move to left subtree
        if (root.left == null) {
            root.left = new TreeNode(val);
        } else {
            insertIntoBST(val, root.left);
        }
    }
    if (val >= root.val) {
        //move to right subtree
        if (root.right == null) {
            root.right = new TreeNode(val);
        } else {
            insertIntoBST(val, root.right);
        }
    }
}

export function searchInBST(val: number, root: TreeNode) {
    if (root == null) { return null; }
    if (val == root.val) {
        return root;
    }
    if (val < root.val) {
        return searchInBST(val, root.left);
    }
    if (val >= root.val) {
        return searchInBST(val, root.right);
    }
}


export function deleteFromBST(val: number, root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    
    if (val < root.val) {
        root.left = deleteFromBST(val, root.left);
    } else if (val > root.val) {
        root.right = deleteFromBST(val, root.right);
    } else {
        // Node with only one child or no child
        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }
        
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        root.val = findMinValue(root.right);
        
        // Delete the inorder successor
        root.right = deleteFromBST(root.val, root.right);
    }
    return root;
}

function findMinValue(node: TreeNode): number {
    let minv = node.val;
    while (node.left != null) {
        minv = node.left.val;
        node = node.left;
    }
    return minv;
}

export function preOrder(root: TreeNode, callback: Function) {
    if (!root) { return; }
    callback(root);
    preOrder(root.left, callback);
    preOrder(root.right, callback);    
}

export function inOrder(root: TreeNode, callback: Function) {
    if (!root) { return; }
    inOrder(root.left, callback);
    callback(root);
    inOrder(root.right, callback);
}

export function postOrder(root: TreeNode, callback: Function) {
    if (!root) { return; }
    postOrder(root.left, callback);
    postOrder(root.right, callback);
    callback(root);
}

export function breadthFirstTraversal(root: TreeNode, callback: Function) {
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let val = queue.shift();
        callback(val);
        if (val.left) { 
            queue.push(val.left);
        }
        if (val.right) {
            queue.push(val.right);
        }
    }
}

export function countNodes(root: TreeNode) {
    if (!root) { return 0; }
    return 1 + countNodes(root.left) + countNodes(root.right);
}

export function countLeafNodes(root: TreeNode) {
    let count: number = 0;
    inOrder(root, function(node: TreeNode) {
        if (node.left == null && node.right == null) {
            count++;
        }
    });
    return count;
}
