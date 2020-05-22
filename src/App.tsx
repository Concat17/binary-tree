import * as React from "react";
import {createTree} from "./logic/createTree"

export const App: React.FC<{}> = () => {
  const tree = createTree(20);
  tree.addNode(30, tree.root)
  tree.addNode(10, tree.root)
  tree.addNode(50, tree.root)
  console.log(tree);

  return (
    <div className="app">
      <h1>Halo, there!</h1>
    </div>
  );
};
