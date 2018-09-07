import LinkedList from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {

    it('should create an empty linked list', () => {
        const linkedList = new LinkedList();

        expect(linkedList.toString()).toBe('');
    });

    it('should add an node at the rear of list', () => {
        const linkedList = new LinkedList();

        linkedList.addLast(1);
        linkedList.addLast(2);
        linkedList.addLast(3);

        expect(linkedList.toString()).toBe('1,2,3');
    });

});
