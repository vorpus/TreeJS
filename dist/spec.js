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

	
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);


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
	    console.log(rotationType);
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
	        console.log('lr');
	        this.leftRotate(node);
	        this.rightRotate(node);
	        node.colorSwap(node.rightChild);
	        break;
	      case 'RL':
	        console.log('rl');
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	const TreeNode = __webpack_require__(2)
	describe("BST Node", function() {
	  var nodeF; var nodeT; var nodeFF; var nodeST;
	
	  beforeEach(function() {
	    nodeF = new TreeNode(5);
	    nodeT = new TreeNode(10);
	    nodeFF = new TreeNode(15);
	    nodeST = new TreeNode(17);
	  });
	
	  it("should initialize with a value and no children", function() {
	    expect(nodeF.value).toEqual(5);
	    expect(nodeT.value).toEqual(10);
	  });
	
	  it("should append smaller nodes left", function() {
	    nodeT.append(nodeF);
	    expect(nodeT.leftChild).toEqual(nodeF);
	    expect(nodeT.rightChild).toEqual(null)
	  });
	
	  it("should append larger nodes right", function() {
	    nodeF.append(nodeT);
	    expect(nodeF.leftChild).toEqual(null);
	    expect(nodeF.rightChild).toEqual(nodeT);
	  });
	
	  it("should recursively look for children nodes", function() {
	    nodeF.append(nodeFF);
	    nodeFF.append(nodeST);
	    nodeFF.append(nodeT);
	    expect(nodeF.find(17)).toEqual(nodeST);
	  });
	
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const BST = __webpack_require__(1)
	const TreeNode = __webpack_require__(2)
	
	describe("Binary Search Tree", function() {
	  var bst;
	
	  beforeEach(function() {
	    bst = new BST();
	  });
	
	  it("initializes as empty tree with no nodes", function() {
	    expect(bst.root).toEqual(null);
	  });
	
	  it("assigns a new node on an empty tree to root", function() {
	    bst.add(4);
	    expect(bst.root.value).toEqual(4);
	  });
	
	  it("uses find() to traverse child nodes", function() {
	    bst.add(4);
	    bst.add(2);
	    bst.add(3);
	    bst.add(5);
	    expect(bst.find(5).value).toEqual(5);
	  });
	
	  it("returns the logical parent if a node is not found", function() {
	    bst.add(4);
	    bst.add(2);
	    expect(bst.find(1).value).toEqual(2);
	  })
	
	  it("adds additional nodes if given a value or a node element", function() {
	    let nodeToAdd = new TreeNode(5);
	    bst.add(1);
	    bst.add(nodeToAdd);
	    expect(bst.find(1).value).toEqual(1);
	    expect(bst.find(5).value).toEqual(5);
	  });
	
	});


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const TreeNode = __webpack_require__(2)
	const RBNode = __webpack_require__(4)
	
	describe("Red Black Node", function() {
	  var node;
	
	  beforeEach(function() {
	    node = new RBNode(5);
	  });
	
	  it("extends a binary tree node", function() {
	    expect(node instanceof TreeNode).toBeTruthy();
	  });
	
	  it("should have a color and a value", function() {
	    expect(node.value).toEqual(5);
	    expect(node.color).not.toEqual(null)
	  });
	
	
	
	});


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	const BST = __webpack_require__(1);
	const RBNode = __webpack_require__(4)
	const RBT = __webpack_require__(3)
	
	describe("Red Black Tree", function() {
	  var rbt;
	
	  beforeEach(function() {
	    rbt = new RBT();
	  });
	
	  it("extends binary search tree", function() {
	    expect(rbt instanceof BST).toBeTruthy();
	  });
	
	  it("ensures the last node added is always red", function() {
	    rbt.add(5);
	    rbt.add(3);
	    expect(rbt.find(3).color).toEqual('r');
	    rbt.add(1);
	    expect(rbt.find(1).color).toEqual('r');
	    rbt.add(7);
	    expect(rbt.find(7).color).toEqual('r');
	  });
	
	  it("performs a left rotation if node is right child of parent and parent is right child of grandparent", function() {
	    rbt.add(5);
	    rbt.add(6);
	    rbt.add(7);
	    expect(rbt.root.value).toEqual(6);
	  });
	
	  it("performs a right rotation if node is left child of parent and parent is left child of grandparent", function() {
	    rbt.add(5);
	    rbt.add(4);
	    rbt.add(3);
	    expect(rbt.root.value).toEqual(4);
	  });
	
	  it("recolors to maintain red-black constraints after rotations", function() {
	    rbt.add(5);
	    rbt.add(4);
	    rbt.add(3);
	    expect(rbt.find(5).color).toEqual('r');
	    expect(rbt.find(3).color).toEqual('r');
	    expect(rbt.find(4).color).toEqual('b');
	  });
	
	  it("correctly handles complex R-L and L-R rotations", function() {
	    rbt.add(2);
	    rbt.add(1);
	    rbt.add(4);
	    rbt.add(5);
	    rbt.add(9);
	    rbt.add(3);
	    rbt.add(6);
	    rbt.add(7);
	    expect(rbt.root.value).toEqual(2);
	    expect(rbt.find(6).color).toEqual('r');
	    expect(rbt.find(6).leftChild).toEqual(null);
	    expect(rbt.find(4).color).toEqual('b');
	    expect(rbt.find(4).leftChild.value).toEqual(3);
	  })
	});


/***/ }
/******/ ]);
//# sourceMappingURL=spec.js.map