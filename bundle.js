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
	
	document.addEventListener("DOMContentLoaded", () => {
	  const tree = new BST();
	
	  window.tree = tree;
	
	  tree.add(4);
	  tree.add(5);
	  tree.add(6);
	  tree.add(1);
	  tree.add(7);
	  tree.add(9);
	  tree.add(3);
	  tree.print();
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map