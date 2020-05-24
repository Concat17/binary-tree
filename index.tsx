import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./src/App";

import { TreeContainer } from "./src/containers/treeContainer";

ReactDOM.render(
  <TreeContainer.Provider>
    <App />
  </TreeContainer.Provider>,
  document.getElementById("root")
);
