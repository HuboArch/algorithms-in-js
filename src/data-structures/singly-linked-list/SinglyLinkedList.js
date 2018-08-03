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
        let p = this.head.next;
        let tmpCell = null;

        while (p !== null) {
            tmpCell = p.next;
            p = null;
            p = tmpCell;
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

    /**
     * 判断链表是否为空
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.head.next === null;
    }

    /**
     * 获取链表的长度
     *
     * @returns {number}
     */
    getLength() {
        let p = this.head.next,
            length = 0;

        while (p !== null) {
            length++;

            p = p.next;
        }
        return length;
    }

    /**
     * 在链表首部插入结点元素
     *
     * @param {*} value
     * @returns {SinglyLinkedList}
     */
    insertHead(value) {
        let tmpCell = this.head.next;

        const newNode = new Node(value);

        this.head.next = newNode;
        newNode.next = tmpCell;

        return this;
    }

    /**
     * 在链表尾部插入结点元素
     *
     * @param {*} value
     * @returns {SinglyLinkedList}
     */
    insertTail(value) {
        let p = this.head.next;

        // 获取尾部结点
        while (p !== null) {
            p = p.next;
        }

        p.next = new Node(value);

        return this;
    }

    /**
     * 任意索引位置后面插入结点元素
     *
     * @param {number} index [0, length-1]
     * @param {*} value
     * @returns {boolean}
     */
    insertNode(index, value) {
        if (index < 0 || index >= this.getLength()) {
            return false;
        }

        let p = this.head;

        for (let j = 0; j <= index; j++) {
            p = p.next;
        }

        let newNode = new Node(value);
        newNode.next = p.next;

        p.next = newNode;

        return true;
    }
}
