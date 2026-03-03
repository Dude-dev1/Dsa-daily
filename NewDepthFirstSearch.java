public class NewDepthFirstSearch {

	public static void main(String[] args) {
		
		// Depth First Search = Pick a route, keep going.
		//					 If you reach a dead end, or an already visited node,
		//					 backtrack to a previous node with unvisited adjacent neighbors
		
		NewGraph graph = new NewGraph(5);
		
		graph.addNode(new NewNode('A'));
		graph.addNode(new NewNode('B'));
		graph.addNode(new NewNode('C'));
		graph.addNode(new NewNode('D'));
		graph.addNode(new NewNode('E'));
		
		graph.addEdge(0, 1);
		graph.addEdge(1, 2);
		graph.addEdge(1, 4);
		graph.addEdge(2, 3);
		graph.addEdge(2, 4);
		graph.addEdge(4, 0);
		graph.addEdge(4, 2);
		
		graph.print();
		
		graph.depthFirstSearch(3);
	}
}

