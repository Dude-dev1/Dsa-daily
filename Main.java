public class Main {
    public static void main(String[] args) {
        Graph g = new Graph(5);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);

        System.out.println("DFS starting from vertex 0:");
        g.DFS(1);   // Output: 0 1 3 2 4 (order may vary slightly)
    }
}
