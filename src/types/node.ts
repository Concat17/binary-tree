type Node<T> = {
  count: number;
  key: T;
  left: Node<T> | undefined;
  right: Node<T> | undefined;
};
export default Node;
