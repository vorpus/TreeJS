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
	  const tree = new RBT();
	
	  window.tree = tree;
	
	  // tree.add(2);
	  // tree.add(1);
	  // tree.add(4);
	  // tree.add(5);
	  // tree.add(9);
	  // tree.add(3);
	  // tree.add(6);
	  // $('.forest').html(tree.print());
	
	  $('.add-node').on("submit", (e) => {
	    e.preventDefault();
	    tree.add(parseInt($('.val-to-add')[0].value));
	    $('.val-to-add')[0].value = '';
	    $('.forest').html(tree.print());
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
	    // this.root.print();
	    return this.root.print();
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
	
	}
	
	module.exports = RBNode;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map