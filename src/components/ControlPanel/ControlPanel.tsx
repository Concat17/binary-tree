import "./ControlPanel.scss";

import React, { useState } from "react";

import { TreeContainer } from "../../containers/treeContainer";

import {
  preorderPrint,
  inorderPrint,
  postorderPrint,
} from "../../logic/treeWalk";

import { solve, balance, leftRotation } from "../../logic/balance";

const ControlPanel = () => {
  const {
    tree,
    setTree,
    addTreeNode,
    balanceTree,
  } = TreeContainer.useContainer();
  const [inputValue, setInputValue] = useState(1);
  return (
    <div styleName="controlPanel">
      <div styleName="inputWrapper">
        <label htmlFor="male">Male</label>
        <input
          type="text"
          name="gender"
          id="nodeValue"
          placeholder="male"
          onChange={() => {
            const target = event.target as HTMLTextAreaElement;
            setInputValue(+target.value);
          }}
        />
      </div>
      <span
        styleName="btn"
        onClick={() => {
          // console.log(34);
          // const newTree = tree;
          // newTree.addNode(23, newTree.root);
          // setTree(newTree);
          addTreeNode(inputValue);
          // console.log(inorderPrint(tree.root));
          // console.log(postorderPrint(tree.root));
          // console.log(preorderPrint(tree.root));
          //tree.root = leftRotation(tree.root);
          console.log(tree);
        }}
      >
        Add node
      </span>
    </div>
  );
};

export default ControlPanel;
