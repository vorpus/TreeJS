const TreeNode = require('./treenode');

class RBNode extends TreeNode {
  constructor(value) {
    super(value);

    this.color = 'r';
  }

  colorRed() {
    this.color = 'r';
  }

  colorBlack() {
    this.color = 'b';
  }

  colorSwap(node) {
    let oldColor = this.color;
    this.color = node.color;
    node.color = oldColor;
  }

  uncle() {
    if(this.parent && this.parent.parent) {
      let grandpa = this.parent.parent;
      if (grandpa.leftChild === this.parent) {
        return grandpa.rightChild;
      } else {
        return grandpa.leftChild;
      }
    }
  }

  print() {
    let toprint = '(';
    if (this.leftChild) {
      toprint += this.leftChild.print();
    }
    // toprint += ` ${this.value} ${this.color} `;
    toprint += ` <strong class=${this.color}>${this.value}</strong> `;
    if (this.rightChild) {
      toprint += this.rightChild.print();
    }
    return toprint+')';
  }

  printDiagram() {
    let toprint = '';
    if (this.leftChild) {
      toprint += this.leftChild.printDiagram();
    }
    toprint += ` <div class='nodeval ${this.color}'>${this.value}</div> `;
    if (this.rightChild) {
      toprint += this.rightChild.printDiagram();
    }
    return `<div class='node'>${toprint}</div>`;
  }

}

module.exports = RBNode;
