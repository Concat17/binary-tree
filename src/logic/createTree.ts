import { binaryTree } from "../types/binaryTree";
import Node from "../types/node";

function createNode<T>(key: T) {
  const node = { key, count: 1, left: undefined, right: undefined };
  return node;
}

function addNode<T>(key: T, node: Node<T>) {
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
