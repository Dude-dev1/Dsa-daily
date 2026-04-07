import java.util.EmptyStackException;

class Node {
    int data;
    Node next;

    Node(int data, Node next) {
        this.data = data;
        this.next = next;
    }
}

class StackLinked {
    private Node top;   // top of the stack (initially null)

    // Push an element onto the stack
    public void push(int x) {
        Node newNode = new Node(x, top); // new node points to the current top
        top = newNode;                    // top now points to the new node
    }

    // Pop and return the top element
    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        int value = top.data;
        top = top.next;   // remove the top node
        return value;
    }

    // Peek at the top element without removing it
    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return top.data;
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return top == null;
    }

    // Optional: return the size (by traversing or maintaining a counter)
    // public int size() {
    //     int count = 0;
    //     Node current = top;
    //     while (current != null) {
    //         count++;
    //         current = current.next;
    //     }
    //     return count;
    // }

    public void negateAll() {
        Node current = top;
        while (current != null) {
            current.data = -current.data;   // negate the value
            current = current.next;
        }
    }

    public void reverse() {
        Node prev = null;
        Node current = top;
        while (current != null) {
            Node nextNode = current.next; // store next node
            current.next = prev;          // reverse the link
            prev = current;            // move prev forward
            current = nextNode;          // move current forward

        // System.out.println("Current node data: " + current.data);
        // System.out.println("Next node data: " + (nextNode != null ? nextNode.data : "null"));
        // System.out.println("Previous node data: " + (prev != null ? prev.data : "null"));
        }
        top = prev; // update top to the new head of the reversed list
    }

    public void display(){
        Node current = top; 
        while(current != null){
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.print("null");
    }
}

public class StackLinkedList {
    public static void main(String[] args) {
        StackLinked stack = new StackLinked();

        // Test push
        stack.push(-7);
        stack.push(6);
        stack.push(10);
        stack.push(8);
        stack.push(7);
        stack.push(-3);
        stack.push(2);
        stack.push(0);

        stack.display();

        stack.reverse();
        System.out.println("\nReversed Stack:");
        stack.display();
        
    }
}