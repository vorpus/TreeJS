const BST = require('./bst');
const RBNode = require('./rbnode');

class RBT extends BST {
  constructor() {
    super();
  }

  add(node) {
    let nodeToAdd = this.getRBNodeObj(node);
    if (this.root) {
      let nearest = this.find(nodeToAdd.value);
      nearest.append(nodeToAdd);

      this.colorRotate(nodeToAdd);
    } else {
      this.root = nodeToAdd;
      this.root.colorBlack();
    }
  }

  leftRotate(node) {
    let p = node.parent;
    if (node.leftChild) {
      p.append(node.leftChild);
    } else {
      p.setRightChild(null);
    }
    if (node.parent.parent) {
      let g = node.parent.parent;
      g.append(node);
    } else {
      this.root = node;
    }
    node.append(p);
  }

  rightRotate(node) {
    let p = node.parent;
    if (node.rightChild) {
      p.append(node.rightChild);
    } else {
      p.setLeftChild(null);
    }
    if (node.parent.parent) {
      let g = node.parent.parent;
      g.append(node);
    } else {
      this.root = node;
    }
    node.append(p);
  }

  findCase(node) {
    let rotationsCase = '';
    if (node.parent.value < node.parent.parent.value) {
      rotationsCase += 'L';
    } else {
      rotationsCase += 'R';
    }
    if (node.value < node.parent.value) {
      rotationsCase += 'L';
    } else {
      rotationsCase += 'R';
    }
    return rotationsCase;
  }

  colorRotate(node) {
    if (!node.parent) {
      node.colorBlack();
      return;
    }
    if (node.parent.color === 'r') {
      if (node.uncle()) {
        if (node.uncle().color === 'r') {
          node.parent.colorBlack();
          node.uncle().colorBlack();
          node.parent.parent.colorRed();
          this.colorRotate(node.parent.parent);
        }
      } else {
        let rotationType = this.findCase(node);
        switch(rotationType) {
          case 'RR':
            this.leftRotate(node.parent);
            node.parent.colorSwap(node.parent.leftChild);
            break;
          case 'LL':
            this.rightRotate(node.parent);
            node.parent.colorSwap(node.parent.rightChild);
            break;
          case 'LR':
            this.leftRotate(node);
            this.rightRotate(node);
            node.colorSwap(node.rightChild);
            break;
          case 'RL':
            this.rightRotate(node);
            this.leftRotate(node);
            node.colorSwap(node.leftChild);
            break;
          default:
            debugger
        }
      }
    }
    this.root.colorBlack();
  }

  getRBNodeObj(nodeVal) {
    let nodeLike;
    if (nodeVal instanceof RBNode) {
      nodeLike = nodeVal;
    } else {
      nodeLike = new RBNode(nodeVal);
    }
    return nodeLike;
  }

}

module.exports = RBT;
