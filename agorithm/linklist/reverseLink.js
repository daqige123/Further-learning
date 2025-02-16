class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

function consoleList(head) {
    while (head !== null) {
        console.log(head.val);
        head = head.next;
        // console.log(head)
    }
}

function reverseLink(head) {
    let pre = null, curr = head, temp = null;
    while(curr !== null) {
        temp = curr.next; // 保存下一个节点
        curr.next = pre; // 反转当前节点的next
        pre = curr; // pre指针移动到当前节点
        curr = temp; // curr指针移动到下一个节点
    }
    consoleList(pre);
    return pre;
}
reverseLink(head);