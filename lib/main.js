const BST = require('./bst.js');
const RBT = require('./rbt.js');

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
