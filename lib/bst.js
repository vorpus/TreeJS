const TreeNode = require('./treenode.js')

class BST {
  constructor() {
    this.root = null;
  }

  clear() {
    this.root = null;
  }

  add(node) {
    let nodeToAdd = this.getTreeNodeObj(node);
    if (this.root) {
      let nearest = this.find(nodeToAdd.value);
      nearest.append(nodeToAdd);
    } else {
      this.root = nodeToAdd;
    }

  }

  print() {
    if (this.root) {
      return this.root.print();
    } else {
      return '';
    }
  }

  printDiagram() {
    if (this.root) {
      return this.root.printDiagram();
    } else {
      return '';
    }
  }

  find(value) {
    let foundNode = this.root.find(value);
    return foundNode;
  }

  getTreeNodeObj(nodeVal) {
    let nodeLike;
    if (nodeVal instanceof TreeNode) {
      nodeLike = nodeVal;
    } else {
      nodeLike = new TreeNode(nodeVal);
    }
    return nodeLike;
  }

  deleteVal(nodeVal) {
    let toDelete = this.root.find(nodeVal);
    this.delete(toDelete);
  }

  delete(node) {
    if (node.leftChild && node.rightChild) {
      let minChild = this.min(node);
      node.setVal(minChild.value);
      this.delete(minChild);
    } else if (node.leftChild) {
      if (node.parent.leftChild === node) {
        node.parent.setLeftChild(node.leftChild);
      } else {
        node.parent.setRightChild(node.leftChild);
      }
    } else if (node.rightChild){
      if (node.parent.leftChild === node) {
        node.parent.setLeftChild(node.rightChild);
      } else {
        node.parent.setRightChild(node.rightChild);
      }
    } else {
      if (node.parent.leftChild === node) {
        node.parent.setLeftChild(null);
      } else {
        node.parent.setRightChild(null);
      }

      // no children
    }
  }

  min(node) {
    if (node.leftChild) {
      return this.min(node.leftChild);
    } else {
      return node;
    }
  }
}

module.exports = BST;
