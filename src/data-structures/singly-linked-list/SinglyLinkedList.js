import Node                 from "SinglyLinkedListNode";
import SinglyLinkedListNode from "./SinglyLinkedListNode";

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
        let pNode  = this.head.next,
            length = 0;

        while (pNode !== null) {
            length++;

            pNode = pNode.next;
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

        const newNode = new SinglyLinkedListNode(value);

        this.head.next = newNode;
        newNode.next   = tmpCell;

        return this;
    }

    /**
     * 在链表尾部插入结点元素
     *
     * @param {*} value
     * @returns {SinglyLinkedList}
     */
    insertTail(value) {
        let pNode = this.head.next;

        // 获取尾部结点
        while (pNode !== null) {
            pNode = pNode.next;
        }

        pNode.next = new SinglyLinkedListNode(value);

        return this;
    }
}
