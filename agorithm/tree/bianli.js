class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const node6 = new TreeNode(6, null, null);
const node5 = new TreeNode(5, null, node6);
const node4 = new TreeNode(4, null, null);
const node3 = new TreeNode(3, null, null);
const node2 = new TreeNode(2, null, node5);
const node1 = new TreeNode(1, node3, node4);
const root = new TreeNode(0, node1, node2);
//      0
//    1    2
//  3   4    5
 //            6
// 前序遍历
function preOrder(root) {
    if (root) {
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
}
// preOrder(root)

function preOrder2(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];
    while (cur || stack.length) {
        if (cur) {
            res.push(cur.val);
            stack.push(cur.right);
            cur = cur.left;
        } else {
            cur = stack.pop();
        }
    }
    console.log(res);
}
// preOrder2(root);

// 中序遍历
function inOrder(root) {
    if (root) {
        inOrder(root.left);
        console.log(root.val);
        inOrder(root.right);
    }
}
// inOrder(root)

function inOrder2(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    console.log(res);
}
// inOrder2(root)

// 后续遍历
function postOrder(root) {
    if (root) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.val);
    }
}
// postOrder(root);

function postOrder2(root) {
    if (!root) return [];
    let cur = root, res = [], stack = [];
    while (cur || stack.length) {
        if (cur) {
            res.unshift(cur.val);
            stack.push(cur);
            cur = cur.right;
        } else {
            cur = stack.pop();
            cur = cur.left;
        }
    }
    console.log(res);
}
// postOrder2(root);

// 层序遍历
function levelOrder(root) {
    let res = [];
    if (root === null) return res;
    let que = [];
    let cur = root;
    que.push(cur);
    while (que.length !== 0) {
        let size = que.length;
        let level = []
        for (let i = 0; i < size; i++) {
           
            // level.push(que[i].val);
            // if (que[i].left !== null) que.push(que[i].left);
            // if (que[i].right !== null) que.push(que[i].right);
            // que.shift(); 不能将shift放在最后面，因为如果放在最后，shift以后，下一个que(1)就变成que[0]了。可以修改为
            level.push(que[0].val);
            if (que[0].left !== null) que.push(que[0].left);
            if (que[0].right !== null) que.push(que[0].right);
            que.shift();

            // 这里最好是用node来记录每一次弹出来的结点
            // let node = que.shift();
            // level.push(node.val);
            // if (node.left) que.push(node.left);
            // if (node.right) que.push(node.right);
        }
        res.push(level);
    }
    console.log(res);
}
levelOrder(root)