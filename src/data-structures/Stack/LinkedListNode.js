class LinkedListNode {

    constructor(elem = null, next = null) {
        this.elem = elem;
        this.next = next;
    }

    toString() {
        return this.elem.toString();
    }
}

export default LinkedListNode;
