import Node from "../types/node";

function Height<T>(node: Node<T>, res = 0) {
  if (node === undefined) {
    return res;
  }
}

export function solve<T>(node: Node<T>) {
  if (node == undefined) {
    return 0;
  }
  let left = solve(node.left) + 1;
  let right = solve(node.right) + 1;

  return Math.max(left, right);
}

export function balance<T>(node: Node<T>) {
  return solve(node.right) - solve(node.left);
}

export function leftRotation<T>(r: Node<T>) {
  console.log("Left");
  let nr = r.right;
  let t = nr.left;
  let copyR: Node<T> = {
    count: r.count,
    key: r.key,
    left: t,
    right: r.right,
  };

  nr = {
    count: nr.count,
    key: nr.key,
    left: copyR,
    right: nr.right,
  };

  //  copyR.right = t;

  return nr;
}

export function leftRotation2<T>(q: Node<T>) {
  const p = q.right;
  q.right = p.left;
  p.left = q;

  return p;
}

export function rightRotation2<T>(p: Node<T>) {
  const q = p.left;
  p.left = q.right;
  q.right = p;
  console.log("right", q);

  return q;
}
export function rightRotation<T>(r: Node<T>) {
  console.log("Right");
  let nr = r.left;
  let t = nr.right;
  let copyR: Node<T> = {
    count: r.count,
    key: r.key,
    left: undefined,
    right: t,
  };

  nr = {
    count: nr.count,
    key: nr.key,
    left: nr.left,
    right: copyR,
  };

  return nr;
  console.log("r", r);
}
