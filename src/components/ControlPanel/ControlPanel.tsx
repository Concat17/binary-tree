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
    deleteTreeNode,
  } = TreeContainer.useContainer();
  const [inputValue, setInputValue] = useState(1);
  const [pre, setPre] = useState("");
  const [inOr, setInOr] = useState("");
  const [post, setPost] = useState("");
  function handleAddNodeClick() {
    addTreeNode(inputValue);
    setPre(preorderPrint(tree.root).join(" "));
    setInOr(inorderPrint(tree.root).join(" "));
    setPost(postorderPrint(tree.root).join(" "));
    console.log(tree);
  }
  return (
    <div styleName="controlPanel">
      <div>
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
            handleAddNodeClick();
          }}
        >
          Add node
        </span>
        <span
          styleName="btn"
          onClick={() => {
            // console.log(34);
            // const newTree = tree;
            // newTree.addNode(23, newTree.root);
            // setTree(newTree);
            deleteTreeNode(inputValue);
            // console.log(inorderPrint(tree.root));
            // console.log(postorderPrint(tree.root));
            // console.log(preorderPrint(tree.root));
            //tree.root = leftRotation(tree.root);
            console.log(tree);
          }}
        >
          Delete node
        </span>
      </div>
      <div styleName="statBlock">
        <span>NLR</span>
        <div styleName="stat">{pre}</div>
      </div>
      <div styleName="statBlock">
        <span>LNR</span>
        <div styleName="stat">{inOr}</div>
      </div>
      <div styleName="statBlock">
        <span>LRN</span>
        <div styleName="stat">{post}</div>
      </div>
    </div>
  );
};

export default ControlPanel;
