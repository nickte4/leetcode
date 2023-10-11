function cloneGraph(node) {
  if (node === null) {
    return null;
  }
  // keep a list of visited nodes
  const visited = new Map();
  // if clone graph does not have input node
  const clone = (root) => {
    if (!visited.has(root.val)) {
      // create new copy node (reference in visited)
      visited.set(root.val, new Node(root.val));
      // recursively clone neighbors
      visited.get(root.val).neighbors = root.neighbors.map(clone);
    }
    return visited.get(root.val);
  };
  return clone(node);
}
