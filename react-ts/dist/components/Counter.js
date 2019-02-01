"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react"); //必须 * as
var react_redux_1 = require("react-redux");
var counter_1 = require("../store/actions/counter");
//顺序是写死的，先属性，后状态 (Iprops,IState)
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Counter.prototype.render = function () {
        var _a = this.props, number = _a.number, increment = _a.increment, decrement = _a.decrement, incrementDelay = _a.incrementDelay;
        return (React.createElement("div", null,
            React.createElement("p", null, number),
            React.createElement("button", { onClick: increment }, "+"),
            React.createElement("button", { onClick: incrementDelay }, "1s\u540E\u52A01"),
            React.createElement("button", { onClick: decrement }, "-")));
    };
    return Counter;
}(React.Component));
var mapStateToProps = function (state) {
    return state;
};
exports.default = react_redux_1.connect(mapStateToProps, counter_1.default)(Counter);
//# sourceMappingURL=Counter.js.map