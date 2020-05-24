import { binaryTree } from "../types/binaryTree";
import Node from "../types/node";

const lnr = (tree: binaryTree<number>) => {};

export function preorderPrint(root: Node<number>, result = []) {
  if (root === undefined) {
    // Базовый случай
    return result;
  }
  // cout << root->data << " ";
  //console.log(root.key);
  result.push(root.key);
  preorderPrint(root.left, result); //рекурсивный вызов левого поддерева
  preorderPrint(root.right, result); //рекурсивный вызов правого поддерева
  return result;
}

export function inorderPrint(root: Node<number>, result = []) {
  if (root === undefined) {
    // Базовый случай
    return result;
  }
  inorderPrint(root.left, result); //рекурсивный вызов левого поддерева
  result.push(root.key);
  inorderPrint(root.right, result); //рекурсивный вызов правого поддерева
  return result;
}

export function postorderPrint(root: Node<number>, result = []) {
  if (root === undefined) {
    // Базовый случай
    return result;
  }
  postorderPrint(root.left, result); //рекурсивный вызов левого поддерева

  postorderPrint(root.right, result); //рекурсивный вызов правого поддерева
  result.push(root.key);
  return result;
}
