import BTS, { TreeNode } from './binary-search-tree';
import Queue from '../queue';

const tree = new BTS();

tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(6);
tree.insert(8);
tree.insert(3);

// bfs = Breadth First Search.
function bfs(root: TreeNode | null): number[] {
  let node = root;
  const q = new Queue();
  const visitedNodes = [];

  q.enqueue(node);
  while(q.size) {
    node = q.dequeue() as TreeNode;
    visitedNodes.push(node!.value);
    if(node && node.left) q.enqueue(node.left);
    if(node && node.right) q.enqueue(node.right);
  }
  return visitedNodes;
}
const visitedNodesInOrder = bfs(tree.root);
console.log('bfs: ', visitedNodesInOrder)

// dfs = Depth First Search.
/**
 * PreOrder - visit the entire left side vertically, then right
 *            same is true for all children. Mark each node as visited
 *            BEFORE you traverse the child nodes
 */
function dfsPreOrder(root: TreeNode | null): number[] {
  const nodesVisited: number[] = [];
  
  function traverse(node: TreeNode | null) {
    if (!node) return;
    nodesVisited.push(node.value);
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }
  traverse(root);
  return nodesVisited;
}
const dfsPreOrderNodes = dsfPreOrder(tree.root);
console.log('dfs_pre-order: ', dfsPreOrderNodes)
