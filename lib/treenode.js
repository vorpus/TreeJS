class TreeNode {
  constructor(value) {
    this.parent = null;
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  print() {
    let toprint = '(';
    if (this.leftChild) {
      toprint += this.leftChild.print();
    }
    toprint += ' '+this.value+' ';
    if (this.rightChild) {
      toprint += this.rightChild.print();
    }
    return toprint+')';
  }

  setVal(value) {
    this.value = value;
  }

  printDiagram() {
    let toprint = '';
    if (this.leftChild) {
      toprint += this.leftChild.printDiagram();
    }
    toprint += ` <div class='nodeval'>${this.value}</div> `;
    if (this.rightChild) {
      toprint += this.rightChild.printDiagram();
    }
    return `<div class='node'> ${toprint} </div>`;
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
