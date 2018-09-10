import Node from './LinkedListNode';

class LinkedList {

    constructor() {
        this.dummyHead = new Node();
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    addFirst(elem) {
        this.dummyHead.next = new Node(elem, this.dummyHead.next);

        this.size++;
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error('Remove failed. Can not remove from an empty list.');
        }

        const tmpCell = this.dummyHead.next;
        this.dummyHead.next = tmpCell.next;
        tmpCell.next = null; // prevent loitering object

        this.size--;

        return tmpCell.elem;
    }

    getFirst() {
        if (this.isEmpty()) {
            throw new Error('The list is empty.');
        }

        return this.dummyHead.next.elem;
    }

    toString() {
        const nodes = [];
        nodes.push('Top');

        let cur = this.dummyHead.next;
        while (cur !== null) {
            nodes.push(cur);

            cur = cur.next;
        }

        return nodes.map(node => node.toString()).toString();
    }
}

export default LinkedList;
