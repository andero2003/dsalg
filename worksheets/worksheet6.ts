export class AVLNode {
    val: number;
    left: AVLNode | null;
    right: AVLNode | null;
    height: number;
    constructor(x?: number, left?: AVLNode | null, right?: AVLNode | null) {
        this.val = x;
        this.left = left;
        this.right = right;
        this.height = 1;
    }
}

export class SplayNode {
    val: number;
    left: SplayNode | null;
    right: SplayNode | null;
    parent: SplayNode;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class AVLTree {
    root: AVLNode;
    constructor() {
        this.root = null;
    }

    _getHeight(node: AVLNode): number {
        return node ? node.height : 0;
    }

    _updateHeight(node: AVLNode): void {
        if (node) {
            node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        }
    }

    _getBalanceFactor(node: AVLNode): number {
        return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
    }

    _rotateRight(y: AVLNode): AVLNode {
        const x: AVLNode = y.left;
        const T2: AVLNode = x.right;

        x.right = y;
        y.left = T2;
        this._updateHeight(y);
        this._updateHeight(x);
        return x;
    }    

    _rotateLeft(x: AVLNode): AVLNode {
        const y: AVLNode = x.right;
        const T2: AVLNode = y.left;
        y.left = x;
        x.right = T2;
        this._updateHeight(x);
        this._updateHeight(y);
        return y;
    }

    _balance(node: AVLNode) {
        this._updateHeight(node);
        let balanceFactor: number = this._getBalanceFactor(node);
        if (balanceFactor > 1) { //left heavy
            if (this._getBalanceFactor(node.left) < 0) {
                node.left = this._rotateLeft(node.left);
            }
            return this._rotateRight(node);
        }
        if (balanceFactor < -1) { //right heavy
            if (this._getBalanceFactor(node.right) > 0) {
                node.right = this._rotateRight(node.right);
            }
            return this._rotateLeft(node);
        }
        return node;
    }

    insert(val: number): void {
        this.root = this._insertRecursive(this.root, val);
    }

    _insertRecursive(node: AVLNode, val: number): AVLNode {
        if (!node) { return new AVLNode(val); }
        if (val < node.val) {
            node.left = this._insertRecursive(node.left, val);
        } else {
            node.right = this._insertRecursive(node.right, val);
        }
        return this._balance(node);
    }

    search(val: number) {
        return this._searchRecursive(this.root, val);
    }

    _searchRecursive(node: AVLNode, val: number): boolean {
        if (!node) { return false; }
        if (val == node.val) {
            return true;
        } else if (val < node.val) {
            return this._searchRecursive(node.left, val);
        } else {
            return this._searchRecursive(node.right, val);
        }
    }

    delete(val: number): void {
        this.root = this._deleteRecursive(this.root, val);
    }

    _deleteRecursive(node: AVLNode, val: number): AVLNode {
        if (!node) { return node; }
        if (val < node.val) {
            node.left = this._deleteRecursive(node.left, val);
        } else if (val > node.val) {
            node.right = this._deleteRecursive(node.right, val);
        } else {
            //case 1 node with one or zero children
            if (!node.left || !node.right) {
                node = node.left || node.right;
            } else {
                //case 2 node with two children
                const temp = this._findMinValue(node.right);
                node.val = temp.val;
                node.right = this._deleteRecursive(node.right, temp.val);
            }
        }
        return this._balance(node);
    }

    _findMinValue(node: AVLNode): AVLNode {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}

export class SplayTree {
    root: SplayNode | null;
    constructor() {
        this.root = null;
    }

    rightRotate(x: SplayNode) {
        let y = x.left;
        x.left = y.right;
        if (y.right) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (!x.parent) {
            this.root = y;
        } else if (x === x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    leftRotate(x: SplayNode) {
        let y = x.right;
        x.right = y.left;
        if (y.left) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (!x.parent) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    splay(x: SplayNode): void {
        while (x.parent) {
            if (!x.parent.parent) {
                if (x.parent.left === x) {
                    this.rightRotate(x.parent);
                } else {
                    this.leftRotate(x.parent);
                }
            } else if (x.parent.left === x && x.parent.parent.left === x.parent) {
                this.rightRotate(x.parent.parent);
                this.rightRotate(x.parent);
            } else if (x.parent.right === x && x.parent.parent.right === x.parent) {
                this.leftRotate(x.parent.parent);
                this.leftRotate(x.parent);
            } else if (x.parent.left === x && x.parent.parent.right === x.parent) {
                this.rightRotate(x.parent);
                this.leftRotate(x.parent);
            } else {
                this.leftRotate(x.parent);
                this.rightRotate(x.parent);
            }
        }
    }

    insert(val: number): void {
        let node = new SplayNode(val);
        let y = null;
        let x = this.root;
        while (x) {
            y = x;
            if (node.val < x.val) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        node.parent = y;
        if (!y) {
            this.root = node;
        } else if (node.val < y.key) {
            y.left = node;
        } else {
            y.right = node;
        }
        this.splay(node);
    }

    search(val: number): SplayNode {
        let x = this.root;
        while (x) {
            if (x.val === val) {
                this.splay(x);
                return x;
            } else if (val < x.val) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        return null;
    }

    delete(val: number): SplayNode {
        let node: SplayNode = this.search(val);
        if (!node) { return; }
        // 如果有左子树，则取出其中的最大值（或者最小值）来代
        this.splay(node);
        if (!node.left) {
            this.transplant(node, node.right);
        } else if (!node.right) {
            this.transplant(node, node.left);
        } else {
            let y = this.minimum(node.right);
            if (y.parent !== node) {
                this.transplant(y, y.right);
                y.right = node.right;
                y.right.parent = y;
            } 
            this.transplant(node, y);
            y.left = node.left;
            y.left.parent = y;
        }
    }

    minimum(node: SplayNode) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    transplant(u: SplayNode, v: SplayNode): void {
        if (!u.parent) {
            this.root = v;
        } else if (u === u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }
        if (v) {
            v.parent = u.parent;
        }
    }
}