/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const BST = __webpack_require__(1);
	const RBT = __webpack_require__(3);
	
	document.addEventListener("DOMContentLoaded", () => {
	  // const tree = new RBT();
	  let tree = new RBT();
	
	  window.tree = tree;
	
	  tree.add(2);
	  tree.add(1);
	  tree.add(4);
	  tree.add(5);
	  tree.add(9);
	  tree.add(3);
	  tree.add(6);
	  tree.add(7);
	  $('.forest').html(tree.print());
	  $('.forest-diagram').html(tree.printDiagram());
	
	  $('.add-node').on("submit", (e) => {
	    e.preventDefault();
	    let newVal = $('.val-to-add')[0].value;
	    if (newVal === '') {
	      return;
	    }
	    tree.add(parseInt(newVal));
	    $('.val-to-add')[0].value = '';
	    $('.forest').html(tree.print());
	    $('.forest-diagram').html(tree.printDiagram());
	  });
	
	  $('.delete-node').on("submit", (e) => {
	    e.preventDefault();
	    tree.deleteVal(parseInt($('.val-to-delete')[0].value));
	    $('.val-to-delete')[0].value = '';
	    $('.forest').html(tree.print());
	    $('.forest-diagram').html(tree.printDiagram());
	  });
	
	  $('.clear').on("click", () => {
	    tree.clear();
	    $('.forest').html(tree.print());
	    $('.forest-diagram').html(tree.printDiagram());
	  });
	
	  $('.bst-toggle').on("click", () => {
	    $('.bst-display').toggleClass('hidden');
	    if (tree.constructor.name === 'BST') {
	      tree = new RBT();
	      $('.delete-node').addClass('hidden');
	    } else {
	      tree = new BST();
	      $('.delete-node').removeClass('hidden');
	
	    }
	
	    tree.add(2);
	    tree.add(1);
	    tree.add(4);
	    tree.add(5);
	    tree.add(9);
	    tree.add(3);
	    tree.add(6);
	    tree.add(7);
	    $('.forest').html(tree.print());
	    $('.forest-diagram').html(tree.printDiagram());
	  });
	
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const TreeNode = __webpack_require__(2)
	
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
	    let toDelete = this.find(nodeVal);
	    if (toDelete.value === nodeVal) {
	      this.delete(toDelete);
	    }
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


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const BST = __webpack_require__(1);
	const RBNode = __webpack_require__(4);
	
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
	        this.treeRotate(node, rotationType);
	      }
	    }
	    this.root.colorBlack();
	  }
	
	  treeRotate(node, rotationType) {
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
	    }
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const TreeNode = __webpack_require__(2);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map