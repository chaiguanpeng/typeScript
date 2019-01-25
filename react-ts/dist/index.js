"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Counter_1 = require("./components/Counter");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
ReactDOM.render((React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(Counter_1.default, null))), document.getElementById("root"));
//# sourceMappingURL=index.js.map