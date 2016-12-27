const TreeNode = require('./treenode.js')

class BST {
  constructor() {
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
    debugger
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
}

module.exports = BST;
