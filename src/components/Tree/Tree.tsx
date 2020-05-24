import "./Tree.scss";

import React, { useState, useEffect } from "react";

import { TreeContainer } from "../../containers/treeContainer";
import { binaryTree } from "../../types/binaryTree";
import Node from "../Node";

interface TreeProps<T> {
  tree: binaryTree<T>;
}

function Tree<T>() {
  const { tree, setTree, addTreeNode } = TreeContainer.useContainer();
  //addTreeNode(32);
  useEffect(() => {
    setTree(tree);
  });
  console.log(tree);
  return (
    <div styleName="tree">
      <ul>{walk(tree.root)}</ul>
    </div>
  );
}

export default Tree;

function walk(node) {
  return (
    <li>
      <a href="#">
        <Node value={node.key} side="root" />
      </a>
      {node.left || node.right ? (
        <ul>
          {" "}
          {node.left !== undefined ? walk(node.left) : null}
          {node.right !== undefined ? walk(node.right) : null}
        </ul>
      ) : null}
    </li>
  );
}
