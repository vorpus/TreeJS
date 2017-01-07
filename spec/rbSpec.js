const BST = require('../lib/bst.js');
const RBNode = require('../lib/rbnode.js')
const RBT = require('../lib/rbt.js')

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
