import Node from "SinglyLinkedListNode";

export default class SinglyLinkedList {
    constructor() {
        // 带有虚拟结点(dummy node)的链表
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

        const newNode = new Node(value);
        newNode.next = p.next;

        p.next = newNode;

        return true;
    }

    /**
     * 删除指定索引位置的结点
     *
     * @param index
     * @returns {number} 失败返回 -1
     */
    deleteNode(index) {
        const length = this.getLength();

        if (index < 0 || index > length - 1) {
            return -1;
        }

        // 获取被删除结点的前一个结点
        let prevNode = this.head;

        for (let j = 0; j < index; j++) {
            prevNode = prevNode.next;
        }

        let curNode = prevNode.next;
        let deletedData = curNode.data;

        prevNode.next = curNode.next;
        curNode = null;

        return deletedData;
    }

    /**
     * 获取指定索引位置结点的数据域值
     *
     * @param index
     * @returns {number} 失败返回 -1
     */
    getNode(index) {
        const length = this.getLength();

        if (index < 0 || index > length - 1) {
            return -1;
        }

        let p = this.head;
        for (let j = 0; j <= index; j++) {
            p = p.next;
        }

        return p.data;
    }

    /**
     * 获取指定结点的位置索引
     *
     * @param value
     * @returns {number} [0, length - 1]
     */
    locateNode(value) {
        let p = this.head.next;

        for (let i = 0; p; i++) {
            if (p.data === value) {
                return i;
            }
            p = p.next;
        }

        return -1;
    }
}
