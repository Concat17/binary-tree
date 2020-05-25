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
  if (key === node.key) {
    node.count++;
  }
  return node;
}

export function deleteNode<T>(k: T, p: Node<T>) {
  console.log("Delete");
  if (p === undefined) return undefined;
  if (k < p.key) {
    p.left = deleteNode(k, p.left);
  } else if (k > p.key) {
    p.right = deleteNode(k, p.right);
  } else {
    let q = p.left;
    let r = p.right;
    if (q === undefined && r === undefined) return undefined;
    if (r === undefined) return q;
    if (q === undefined) return r;
  }
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
