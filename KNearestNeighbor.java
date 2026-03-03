import java.util.*;

public class KNearestNeighbor {

     public static double distance(int[] point, int[] queryPoint) {
        // Euclidean distance calculation
        int dx = point[0] - queryPoint[0];
        int dy = point[1] - queryPoint[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    public static int[][] findKNearestNeighbors(int[][] dataPoints, int[] queryPoint, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> Double.compare(distance(b, queryPoint), distance(a, queryPoint)));

        for (int[] point : dataPoints) {
            maxHeap.offer(point);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        int[][] neighbors = new int[k][];
        for (int i = 0; i < k; i++) {
            neighbors[i] = maxHeap.poll();
        }
        return neighbors;
    }


    public static void main(String[] args) {
        int[][] dataPoints = {
            {1, 2},
            {2, 3},
            {3, 1},
            {6, 5},
            {7, 7},
            {8, 6}
        };

        int[] queryPoint = {2, 4};
        int k = 3;

        int[][] neighbors = findKNearestNeighbors(dataPoints, queryPoint, k);
        System.out.println("K nearest neighbors:");
        for (int[] neighbor : neighbors) {
            System.out.println("[" + neighbor[0] + ", " + neighbor[1] + "]");
        }
    }
}
