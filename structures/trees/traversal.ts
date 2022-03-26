import BTS, { TreeNode } from './binary-search-tree';
import Queue from '../queue';

const tree = new BTS();
const q = new Queue();

tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(6);
tree.insert(8);
tree.insert(3);

// bfs = Breadth First Search.
function bfs(root: TreeNode | null): any[] {
  let node = root;
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
console.log(visitedNodesInOrder)
