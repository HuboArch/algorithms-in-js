import LinkedList from './LinkedList';

class Stack {

    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return this.linkedList.isEmpty();
    }

    getSize() {
        return this.linkedList.getSize();
    }

    push(elem) {
        this.linkedList.addFirst(elem);
    }

    pop() {
        this.linkedList.removeFirst();
    }

    peek() {
        return this.linkedList.getFirst();
    }
}

export default Stack;
