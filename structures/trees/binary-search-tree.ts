export class TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: any, _branch: TreeNode | null = null): BinarySearchTree {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = _branch || this.root;
    if (val < current.value) {
      if (!current.left) {
        current.left = node;
        return this;
      }
      return this.insert(val, current.left);
    }
    if (val > current.value) {
      if (!current.right) {
        current.right = node;
        return this;
      }
      return this.insert(val, current.right);
    }

    return this;
  }

  find(val: any, _branch: TreeNode | null = null): TreeNode | boolean {
    if (this.root === null) return false;

    let current = _branch || this.root;
    if (val === current.value) return current;

    if (val < current.value && current.left) {
      return this.find(val, current.left);
    }
    if (val > current.value && current.right) {
      return this.find(val, current.right);
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(12);

// console.log(tree.find(12));
