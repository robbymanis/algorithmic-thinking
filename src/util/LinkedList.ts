/**
 * Node class.
 * 
 * Constructor sets the data and next parameter. If no next node is given it is set to null. 
 * This would be the last element in the linked list.
 */
class LinkedNode {
    /**
     * 
     * @param data data for the new node
     * @param next the pointer to the next node
     */
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

/**
 * Linked List class.
 * 
 * Constructor sets the head of the list to be null.
 */
class LinkedList {
    constructor() {
        this.head = null
    }
    /**
     * creates a node at the start of the linked list
     * @param data data for the new node 
     */
    insertAtStart(data) {
        const newNode = new LinkedNode(data)
        newNode.next = this.head
        this.head = newNode
    }
    printList() {
        let curr = this.head
        while (curr) {
            console.log(`${curr.data} => ${curr.next}`)
            curr = curr.next
        }
    }
}

const linkedList = new LinkedList()

linkedList.insertAtStart(1)
linkedList.insertAtStart(2)
linkedList.insertAtStart(3)

linkedList.printList()