const TreeNode = require('../lib/treenode.js')
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
