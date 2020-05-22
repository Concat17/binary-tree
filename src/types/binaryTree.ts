import Node from "./node";

export type binaryTree<T> = {
  //   balanced: boolean;
  root: Node<T>;
  addNode: (key: T, ref: Node<T>) => void;
};
