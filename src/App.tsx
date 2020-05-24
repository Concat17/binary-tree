import "./App.scss";

import * as React from "react";
import { createTree } from "./logic/createTree";

import { TreeContainer } from "./containers/treeContainer";

import ControlPanel from "./components/ControlPanel";
import Tree from "./components/Tree";

export const App: React.FC<{}> = () => {
  const { tree } = TreeContainer.useContainer();
  return (
    <div styleName="app">
      <ControlPanel />
      <Tree />
    </div>
  );
};
