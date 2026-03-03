// Given an integer D and a queue of integers, how do you reverse the order of the first D elements of the queue, leaving the 
// other elements in the same relative order? For example, if D=4 and queue has the elements [10, 20, 30, 40, 50, 60, 70, 80, 90]; the output 
// should be [40, 30, 20, 10, 50, 60, 70, 80, 90].


import java.util.*;

public class ReverseQueueFirstKIntegers {

    // Static method to reverse first k elements of the queue
    public static void reverseFirstKElements(Queue<Integer> queue, int k) {
        if (queue == null || k <= 0 || k > queue.size()) {
            return; // handle invalid input
        }

        Stack<Integer> stack = new Stack<>();

        // Step 1: Push first k elements into stack
        for (int i = 0; i < k; i++) {
            stack.push(queue.poll());
        }

        // Step 2: Pop from stack and add back to queue (reverses them)
        while (!stack.isEmpty()) {
            queue.add(stack.pop());
        }

        // Step 3: Move the remaining elements to the back
        for (int i = 0; i < queue.size() - k; i++) {
            queue.add(queue.poll());
        }
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(10);
        queue.add(20);
        queue.add(30);
        queue.add(40);
        queue.add(50);
        queue.add(60);
        queue.add(70);
        queue.add(80);
        queue.add(90);

        int k = 4;
        reverseFirstKElements(queue, k); // call the static method

        System.out.println(queue); // Output: [40, 30, 20, 10, 50, 60, 70, 80, 90]
    }
}