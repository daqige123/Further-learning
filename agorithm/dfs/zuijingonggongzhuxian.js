// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
// 
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const node6= new TreeNode(6, null, null);
const node5= new TreeNode(5, null, node6);
const node4= new TreeNode(4, null, null);
const node3= new TreeNode(3, null, null);
const node2= new TreeNode(2, null, node5);
const node1= new TreeNode(1, node3, node4);
const root= new TreeNode(0, node1, node2);
function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q ) return root;
    let left = lowestCommonAncestor(root.left, p, q);   // 递归去左子树里面找
    let right = lowestCommonAncestor(root.right, p, q); // 递归去右子树里面找
    if (right === null) return left;
    if (left === null) return right;
    return root; 
}