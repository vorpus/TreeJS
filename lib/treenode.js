class TreeNode {
  constructor(value) {
    this.parent = null;
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  print() {
    if (this.leftChild) {
      this.leftChild.print();
    }
    console.log(this.value);
    if (this.rightChild) {
      this.rightChild.print();
    }
  }

  setParent(parent) {
    this.parent = parent;
  }

  append(node) {
    if (node.value >= this.value) {
      node.setParent(this);
      this.setRightChild(node);
    } else {
      node.setParent(this);
      this.setLeftChild(node);
    }
  }

  setLeftChild(leftChild) {
    this.leftChild = leftChild;
  }

  setRightChild(rightChild) {
    this.rightChild = rightChild;
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else if (value < this.value) {
      if (!this.leftChild) {
        return this;
      } else {
        return this.leftChild.find(value);
      }
    } else {
      if (!this.rightChild) {
        return this;
      } else {
        return this.rightChild.find(value);
      }
    }
  }
}

module.exports = TreeNode;
