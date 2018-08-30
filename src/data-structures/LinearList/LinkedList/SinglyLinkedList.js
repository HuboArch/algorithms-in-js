import Node       from "SinglyLinkedListNode";
import Comparator from "../../../utils/Comparator";

export default class SinglyLinkedList {

    /**
     * @param [comparatorFunc] {Function}
     */
    constructor(comparatorFunc) {
        /** @var SinglyLinkedListNode */
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
}
