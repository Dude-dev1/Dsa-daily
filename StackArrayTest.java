import java.util.EmptyStackException;
import java.util.Arrays;

class Stack {
    private int[] stack;
    private int capacity;
    private int top;

    public Stack(int size) {
        capacity = size;
        stack = new int[capacity];
        top = -1;
    }

    public void push(int x) {
        if (top == capacity - 1) {
            throw new StackOverflowError("Stack is full");
        }
        stack[++top] = x;
    }

    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        int value = stack[top];
        stack[top--] = 0;
        return value;
    }

    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return stack[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public void printInternalState() {
        System.out.println(Arrays.toString(stack));
    }

    public int reverse(){
        int[] reversedStack = new int[capacity];
        for (int i = 0; i <= top; i++) {
            reversedStack[i] = stack[top - i];
        }
        stack = reversedStack;
        return top;
    }

    public void negate(){
        for(int i = 0; i <= top; i++) {
            stack[i] = -stack[i];
        }
    }
}

public class StackArrayTest {
    public static void main(String[] args) {
        Stack stack = new Stack(8);

        // populate the stack
        stack.push(0);
        stack.push(2);
        stack.push(-3);
        stack.push(7);
        stack.push(8);
        stack.push(10);
        stack.push(6);
        stack.push(-7);

        // print the internal state of the stack
        stack.printInternalState();   

        // check if the stack is empty
        System.out.println("Is stack empty? " + stack.isEmpty());

        // negate all the elements in the stack
        System.out.println("Negated stack:");
        stack.negate();
        stack.printInternalState();

        // reverse the elements in the stack
        System.out.println("Reversed stack:");
        stack.reverse();
        stack.printInternalState();

    }
}