const BST = require('../lib/bst.js')
const TreeNode = require('../lib/treenode.js')

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
