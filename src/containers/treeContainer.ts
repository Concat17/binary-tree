import { useState } from "react";
import { createContainer } from "unstated-next";

import { binaryTree } from "../types/binaryTree";
import Node from "../types/node";

import { createTree, addNode, addNode2, deleteNode } from "../logic/createTree";

export const TreeContainer = createContainer(() => {
  const [tree, setTree] = useState(createTree(5));
  //tree.addNode(30, tree.root);
  // tree.root = addNode(13, tree.root);
  // tree.root = addNode(10, tree.root);
  // tree.root = addNode(4, tree.root);
  // tree.root = addNode(3, tree.root);
  // tree.root = addNode(4, tree.root);
  // tree.root = addNode(3, tree.root);
  //tree.addNode(120, tree.root);
  //tree.addNode(15, tree.root);
  // tree.addNode(25, tree.root);
  // tree.addNode(40, tree.root);
  // tree.addNode(35, tree.root);
  // tree.addNode(45, tree.root);
  // tree.addNode(60, tree.root);
  // tree.addNode(55, tree.root);
  // tree.addNode(65, tree.root);
  // tree.addNode(100, tree.root);
  // tree.addNode(90, tree.root);

  function addTreeNode<T>(value) {
    const newTree: binaryTree<number> = {
      root: tree.root,
      addNode: tree.addNode,
    };
    newTree.root = addNode(value, newTree.root);

    setTree(newTree);
  }

  function deleteTreeNode<T>(value) {
    const newTree: binaryTree<number> = {
      root: tree.root,
      addNode: tree.addNode,
    };
    newTree.root = deleteNode(value, newTree.root);

    setTree(newTree);
  }

  function leftRotation<T>(r: Node<T>) {
    let nr = r.right; // const newTree = tree;
    // newTree.addNode(23, newTree.root);
    // setTree(newTree);
    let t = nr.left;
    console.log("nr", nr);

    nr.left = r;
    r.right = t;
    //r = nr;
    r = {
      count: nr.count,
      key: nr.key,
      left: nr.left,
      right: nr.right,
    };
    return r;
    console.log("r", r);
  }

  function balanceTree() {
    const newTree: binaryTree<number> = {
      root: tree.root,
      addNode: tree.addNode,
    };
    newTree.root = leftRotation(newTree.root);
    setTree(newTree);
  }

  return { tree, setTree, addTreeNode, balanceTree, deleteTreeNode };
});
