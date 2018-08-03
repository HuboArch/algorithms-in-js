import Node from "SinglyLinkedListNode";

export default class SinglyLinkedList {
    constructor() {
        // 带有头结点的链表
        this.head = new Node();
    }

    /**
     * 清空链表
     */
    clearList() {
        let pNode   = this.head.next,
            tmpCell = null;

        while (pNode !== null) {
            tmpCell = pNode.next;
            pNode   = null;
            pNode   = tmpCell;
        }
        this.head.next = null;
    }

    /**
     * 销毁链表
     */
    destroyList() {
        this.clearList();

        this.head = null;
    }
}
