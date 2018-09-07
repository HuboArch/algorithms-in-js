import Node from "../SinglyLinkedListNode";

describe('SinglyLinkedListNode', () => {
    it('should create a node with value', () => {
        const node = new Node(1);

        expect(node.elem).toBe(1);
        expect(node.next).toBeNull();
    });

    it('should create a node with an object as elem', () => {
        const obj = { name: 'Nicholas', age: 27 };
        const node = new Node(obj);

        expect(node.elem.name).toBe('Nicholas');
        expect(node.elem.age).toBe(27);
        expect(node.next).toBeNull();
    });

    it('should invoke the toString method of property elem', () => {
        const val = 1;
        const node = new Node(val);

        expect(node.toString()).toBe('1');
    });
});
