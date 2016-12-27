const BST = require('./bst.js');
const RBT = require('./rbt.js');

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
