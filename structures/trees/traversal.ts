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

// dfs - Depth First Search.
enum DFSMethod {
  IN_ORDER = 'InOrder',
  PRE_ORDER = 'PreOrder',
  POST_ORDER = 'PostOrder'
}

function dfs(root: TreeNode | null, type: DFSMethod): number[] {
  const nodesVisited: number[] = [];
  
  function traverse(node: TreeNode | null, type: DFSMethod) {
    if (type === 'PreOrder') nodesVisited.push(node!.value); // pre order happens before you traverse all children 
    if (node!.left) traverse(node!.left, type)
    if (type === 'InOrder') nodesVisited.push(node!.value); // in order happens once the entire left side has been traversed
    if (node!.right) traverse(node!.right, type)
    if (type === 'PostOrder') nodesVisited.push(node!.value); // post order happens after you traverse all children
  }
  traverse(root, type);
  return nodesVisited;
}
const preOrder = dfs(tree.root, DFSMethod.PRE_ORDER);
const inOrder = dfs(tree.root, DFSMethod.IN_ORDER);
const postOrder = dfs(tree.root, DFSMethod.POST_ORDER);

console.log('dfs - pre order', preOrder);
console.log('dfs - in order', inOrder);
console.log('dfs - post order', postOrder);
