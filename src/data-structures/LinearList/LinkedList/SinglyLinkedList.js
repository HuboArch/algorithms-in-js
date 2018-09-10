import Node       from "./SinglyLinkedListNode";
import Comparator from "../../../utils/Comparator/Comparator";

export default class SinglyLinkedList {

    /**
     * @param {Function} [comparatorFunc]
     */
    constructor(comparatorFunc) {
        this.dummyHead = new Node();
        this.size = 0;

        this.compare = new Comparator(comparatorFunc);
    }

    /**
     * 获取链表的大小
     *
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * 判断链表是否为空
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * 在指定的索引位置添加元素
     *
     * @param {number} idx
     * @param elem {*}
     */
    add(idx, elem) {
        if (idx < 0 || idx > this.size) {
            throw new Error("Add failed. Illegal argument idx.");
        }

        let prev = this.dummyHead;
        for (let i = 0; i < idx; i++) {
            prev = prev.next;
        }

        let tmpCell = prev.next;
        prev.next = new Node(elem, tmpCell);

        this.size++;
    }

    /**
     * 在链表首部添加元素
     *
     * @param {*} elem
     */
    addFirst(elem) {
        this.add(0, elem);
    }

    /**
     * 在链表尾部添加元素
     *
     * @param {*} elem
     */
    addLast(elem) {
        this.add(this.size, elem);
    }

    /**
     * 删除指定索引位置的结点
     *
     * @param {number} idx
     * @returns {null|*}
     */
    remove(idx) {
        if (idx < 0 || idx >= this.size) {
            throw new Error("Remove failed. Illegal argument idx.");
        }

        prev = this.dummyHead;
        for (let i = 0; i < idx; i++) {
            prev = prev.next;
        }

        let tmpCell = prev.next;
        prev.next = tmpCell.next;
        tmpCell.next = null; // prevent loitering object

        this.size--;

        return tmpCell.elem;
    }

    /**
     * 删除链表的首结点
     */
    removeFirst() {
        this.remove(0);
    }

    /**
     * 删除链表的尾结点
     */
    removeLast() {
        this.remove(this.size - 1);
    }

    /**
     * 获取指定索引位置的结点元素
     *
     * @param {number} idx
     * @returns {*}
     */
    get(idx) {
        if (idx < 0 || idx >= this.size) {
            throw new Error("Get failed. Illegal argument idx.");
        }

        cur = this.dummyHead.next;
        for (let i = 0; i < idx; i++) {
            cur = cur.next;
        }

        return cur.elem;
    }

    /**
     * 获取链表首结点的元素
     *
     * @returns {*}
     */
    getFirst() {
        return this.get(0);
    }

    /**
     * 获取链表尾结点的元素
     *
     * @returns {*}
     */
    getLast() {
        return this.get(this.size - 1);
    }

    /**
     * 判断链表中是否含有特定的元素
     *
     * @param {*} elem
     * @returns {boolean}
     */
    contains(elem) {
        let cur = this.dummyHead.next;
        while (cur !== null) {
            if (this.compare.equal(cur.elem, elem)) {
                return true;
            }

            cur = cur.next;
        }

        return false;
    }

    toString() {
        let nodes = [];
        let cur = this.dummyHead.next;

        while (cur !== null) {
            nodes.push(cur);

            cur = cur.next;
        }

        return nodes.map(node => node.toString()).toString();
    }
}
