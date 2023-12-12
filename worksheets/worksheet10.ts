export class GraphNode {
    val: number;

    constructor(val: number) {
        this.val = val;
    }
}

export class Graph {
    data: Map<GraphNode, Array<GraphNode>>;

    constructor() {
        this.data = new Map<GraphNode, Array<GraphNode>>();
    }

    addVertex(val: number): GraphNode {
        let vertex = new GraphNode(val);
        this.data.set(vertex, []);
        return vertex;
    }

    addEdge(val1: number, val2: number) {
        let vertex1: GraphNode | null = this.search(val1);
        let vertex2: GraphNode | null = this.search(val2);
        if (vertex1 == null || vertex2 == null) { return; }

        let vertex1Edges = this.data.get(vertex1);
        for (var node of vertex1Edges) {
            if (node == vertex2) {
                //edge already exists;
                return;
            }
        }
        this._addEdgeInternal(vertex1, vertex2);
    }

    deleteEdge(val1: number, val2: number) {
        let vertex1: GraphNode | null = this.search(val1);
        let vertex2: GraphNode | null = this.search(val2);
        if (vertex1 == null || vertex2 == null) { return; }
    
        this._deleteEdgeInternal(vertex1, vertex2);
    }

    _deleteEdgeInternal(vertex1: GraphNode, vertex2: GraphNode) {
        let vertex1Edges = this.data.get(vertex1); 
        for (let index = 0; index < vertex1Edges.length; index++) {
            if (vertex1Edges[index] == vertex2) {
                //remove at index
                vertex1Edges.splice(index, 1);
            }
        }
        this.data.set(vertex1, vertex1Edges);

        let vertex2Edges = this.data.get(vertex2); 
        for (let index = 0; index < vertex2Edges.length; index++) {
            if (vertex2Edges[index] == vertex1) {
                //remove at index
                vertex2Edges.splice(index, 1);
            }
        }
        this.data.set(vertex2, vertex2Edges);
    }

    _addEdgeInternal(vertex1: GraphNode, vertex2: GraphNode) {
        let vertex1Edges = this.data.get(vertex1);
        vertex1Edges!.push(vertex2);
        this.data.set(vertex1, vertex1Edges);

        let vertex2Edges = this.data.get(vertex2);
        vertex2Edges!.push(vertex1);
        this.data.set(vertex2, vertex2Edges);
    }

    deleteVertex(val: number) {
        let vertex: GraphNode = this.search(val);
        if (vertex == null) { return; }

        for (const [other, edges] of this.data) {
            if (edges.includes(vertex)) {
                this._deleteEdgeInternal(other, vertex);
            }
        }
        this.data.delete(vertex);
    }

    search(val: number): GraphNode | null {
        for (var node of this.data.keys()) {
            if (node.val == val) {
                return node;
            }
        }
        return null;
    }
}