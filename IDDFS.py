def iddfs(graph, start, goal, max_depth):
    """Iterative Deepening DFS"""
    for depth in range(max_depth + 1):
        visited = set()
        result = dls(graph, start, goal, depth, visited)
        if result is not None:
            return result
    return None

def dls(graph, node, goal, depth, visited):
    """Depth-Limited Search"""
    if node == goal:
        return [node]
    
    if depth <= 0:
        return None
    
    visited.add(node)
    
    for neighbor in graph.get(node, []):
        if neighbor not in visited:
            path = dls(graph, neighbor, goal, depth - 1, visited.copy())
            if path is not None:
                return [node] + path
    
    return None

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['G'],
    'F': [],
    'G': []
}

result = iddfs(graph, 'A', 'F', 1)
print(f"Path found: {result}")