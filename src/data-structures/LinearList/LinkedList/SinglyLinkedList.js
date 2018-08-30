import Node       from "SinglyLinkedListNode";
import Comparator from "../../../utils/Comparator";

export default class SinglyLinkedList {

    /**
     * @param [comparatorFunc] {Function}
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
     * @param idx {number}
     * @param elem {*}
     */
    add(idx, elem) {
        if (idx < 0 || idx > this.size) {
            throw new Error("Add failed. Illegal argument idx.");
        }

        prev = this.dummyHead;
        for (let i = 0; i < idx; i++) {
            prev = prev.next;
        }

        let tmpCell = prev.next;
        prev.next = new Node(elem, tmpCell);
        if (tmpCell !== null) {
            tmpCell.next = null; // prevent loitering object
        }

        this.size++;
    }

    /**
     * 在链表首部添加元素
     *
     * @param elem {*}
     */
    addFirst(elem) {
        this.add(0, elem);
    }

    /**
     * 在链表尾部添加元素
     *
     * @param elem {*}
     */
    addLast(elem) {
        this.add(this.size, elem);
    }


}
