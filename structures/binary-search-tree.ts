class TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: any) {
    const node = new TreeNode(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val: any, node: TreeNode | null = null): TreeNode | boolean {
    if (this.root === null) return false;

    let current = node || this.root;
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

console.log(tree.find(12));
