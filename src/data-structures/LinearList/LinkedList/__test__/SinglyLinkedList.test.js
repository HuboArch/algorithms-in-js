import LinkedList from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {

    it('should create an empty linked list', () => {
        const linkedList = new LinkedList();

        expect(linkedList.toString()).toBe('');
    });

});
