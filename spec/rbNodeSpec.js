const TreeNode = require('../lib/treenode.js')
const RBNode = require('../lib/rbnode.js')

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
