public class Graph {
    private int vertices;
    private int[][] adjacencyMatrix;

    // Constructor
    public Graph(int vertices) {
        this.vertices = vertices;
        adjacencyMatrix = new int[vertices][vertices];
    }

    // Add an undirected edge
    public void addEdge(int source, int destination) {
        adjacencyMatrix[source][destination] = 1;
        adjacencyMatrix[destination][source] = 1;
    }

    // Print the adjacency matrix with row/column labels A, B, C, ...
    public void printMatrix() {
        // Print column headers
        System.out.print("  ");
        for (int i = 0; i < vertices; i++) {
            System.out.print((char) ('A' + i) + " ");
        }
        System.out.println();

        // Print each row
        for (int i = 0; i < vertices; i++) {
            System.out.print((char) ('A' + i) + " ");
            for (int j = 0; j < vertices; j++) {
                System.out.print(adjacencyMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    // DFS starting from a given vertex (by index)
    public void DFS(int start) {
        boolean[] visited = new boolean[vertices];
        dfsRecursive(start, visited);
        System.out.println(); // new line after traversal
    }

    // Recursive helper – prints vertex as a letter
    private void dfsRecursive(int current, boolean[] visited) {
        visited[current] = true;
        System.out.print((char) ('A' + current) + " "); // print letter

        for (int i = 0; i < vertices; i++) {
            if (adjacencyMatrix[current][i] == 1 && !visited[i]) {
                dfsRecursive(i, visited);
            }
        }
    }

    // Optional: DFS for disconnected graphs (all components)
    public void DFSAll() {
        boolean[] visited = new boolean[vertices];
        for (int i = 0; i < vertices; i++) {
            if (!visited[i]) {
                dfsRecursive(i, visited);
            }
        }
        System.out.println();
    }

    // Main method to demonstrate the graph
    public static void main(String[] args) {
        // Create a graph with 4 vertices (A, B, C, D)
        Graph graph = new Graph(4);

        // Add edges to form a cycle A-B-C-D-A
        graph.addEdge(0, 1); // A-B
        graph.addEdge(1, 2); // B-C
        graph.addEdge(2, 3); // C-D
        graph.addEdge(3, 0); // D-A

        // Print the adjacency matrix
        System.out.println("Adjacency Matrix (4x4):");
        graph.printMatrix();

        // Perform DFS starting from vertex A (index 0)
        System.out.print("\nDFS from A: ");
        graph.DFS(0);
    }
}
