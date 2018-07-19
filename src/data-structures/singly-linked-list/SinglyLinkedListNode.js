export default class SinglyLinkedListNode {
    constructor(data = 0, next = null) {
        this.data = data;
        this.next = next;
    }

    toString() {
        return this.data;
    }
}
