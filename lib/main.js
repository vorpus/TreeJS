const BST = require('./bst.js');

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
