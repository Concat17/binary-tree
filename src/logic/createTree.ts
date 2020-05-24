import { binaryTree } from "../types/binaryTree";
import Node from "../types/node";

import {
  leftRotation,
  leftRotation2,
  rightRotation,
  rightRotation2,
  balance,
} from "./balance";

function createNode<T>(key: T) {
  const node = { key, count: 1, left: undefined, right: undefined };
  return node;
}

export function addNode<T>(key: T, node: Node<T>) {
  if (key < node.key) {
    node.left === undefined
      ? (node.left = createNode(key))
      : addNode(key, node.left);
  }
  if (key > node.key) {
    node.right === undefined
      ? (node.right = createNode(key))
      : addNode(key, node.right);
  }
  // if (balance(node) < -1) {
  //   if (balance(node.left) > 0) {
  //     const newnodeR = leftRotation2(node.left);
  //     node.left = newnodeR;
  //   }
  //   const newnode = rightRotation2(node);
  //   console.log("nn", node);
  //   console.log("nnew", newnode);
  //   node = newnode;
  //   // node.count = newnode.count;
  //   // node.key = newnode.key;
  //   // node.left = newnode.left;
  //   // node.right = node;
  // }
  // if (balance(node) > 1) {
  //   if (balance(node.right) < 0) {
  //     const newnodeR = rightRotation2(node.right);

  //     node.right = newnodeR;
  //   }
  //   const newnode = leftRotation2(node);
  //   console.log("newnode", newnode);
  //   node = newnode;
  // }
  if (key === node.key) {
    node.count++;
  }
  return node;
}

export function addNode2<T>(key: T, node: Node<T>) {
  if (key < node.key) {
    node.left === undefined
      ? (node.left = createNode(key))
      : addNode(key, node.left);
  }
  if (key > node.key) {
    node.right === undefined
      ? (node.right = createNode(key))
      : addNode(key, node.right);
  }
  if (key === node.key) {
    node.count++;
  }
  return node;
}

export function createTree<T>(rootKey: T) {
  const root: Node<T> = {
    count: 1,
    key: rootKey,
    left: undefined,
    right: undefined,
  };

  const tree: binaryTree<T> = {
    root,
    addNode,
  };
  return tree;
}
