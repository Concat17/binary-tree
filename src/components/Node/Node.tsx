import "./Node.scss";

import React from "react";

interface NodeProps<T> {
  value: T;
  side: string;
}

function Node<T>({ value, side }: NodeProps<T>) {
  return (
    <div styleName={`nodeBody ${side}`}>
      <span styleName="nodeKey">{value}</span>
    </div>
  );
}

export default Node;
