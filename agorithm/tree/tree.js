class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const node9 = new TreeNode(9, null, null);
const node8 = new TreeNode(8, null, null);
const node7 = new TreeNode(7, null, null);
const node6 = new TreeNode(6, null, null);
const node5 = new TreeNode(5, null, node6);
const node4 = new TreeNode(4, node8, null);
const node3 = new TreeNode(3, null, node7);
const node2 = new TreeNode(2, null, node5);
const node1 = new TreeNode(1, node3, node4);
const root = new TreeNode(0, node1, node2);
//        0
//      1     2
//   3    4     5
//    7  8        6   

function preOrder(root) {
    if (root) {
        console.log(root.value);
        preOrder(root.left);
        preOrder(root.right);
    }
}

// function preOrder2(root) {
//     if (!root) return;
//     let stack  = [], cur = root, res = [];
//     while (cur || stack.length) {
//         if (cur) {
//             res.push(cur.value);
//             stack.push(cur?.right);
//             cur = cur.left;
//         } else {
//             cur = stack.pop();
//         }
//     }
//     console.log(res);
// }

// preOrder2(root);

// function inOrder(root) {
//     if (root) {
//         inOrder(root.left)
//         console.log(root.value)
//         inOrder(root.right)
//     }
// }
// inOrder(root);
// function inOrder2(root) {
//     if (!root) return;
//     let stack = [], cur = root, res = [];
//     while (cur || stack.length) {
//         if (cur) {
//             stack.push(cur) // 中序便利的时候是先遍历中间节点后，再遍历右节点，理论上就应该右节点先进栈，毕竟栈是先进后出
//             cur = cur.left
//         } else {
//             cur = stack.pop();
//             res.push(cur.value);
//             cur = cur.right;
//         }
//     }
//     console.log(res)
// }
function inOrder2(root) {
    if (!root) return;
    let stack = [], cur = root, res = [];
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            res.push(cur.value);
            cur = cur.right;
        }
    }
    console.log(res);
}
// inOrder2(root);
function postOrder(root) {
    if (root) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.value)
    }
}

// postOrder(root);
function postOrder2(root) {
    if (!root) return;
    let res = [], cur = root, stack = [];
    while (cur || stack.length) {
        if (cur) {
            res.unshift(cur.value);
            stack.push(cur);
            cur = cur.right;
        } else {
            cur = stack.pop();
            cur = cur.left;
        }
    }
    console.log(res)
}

function postOrder3(root) {
    let stack = [], cur = root, res = [];
    while (cur || stack.length) {
        // 这种方式跟先续遍历几乎一模一样，方便记忆
        if (cur) {
            res.unshift(cur.val);
            stack.push(cur.left);
            cur = cur.right;
        } else {
            cur = stack.pop();
        }
        // if (cur) {
        //     res.push(cur.val);
        //     stack.push(cur.right);
        //     cur = cur.left;
        // } else {
        //     cur = stack.pop();
        // }
    }
}
postOrder2(root);