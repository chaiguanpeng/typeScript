"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../action-types");
exports.default = {
    increment: function () {
        return { type: types.INCREMENT };
    },
    incrementDelay: function () {
        return function (dispatch, getState) {
            setTimeout(function () {
                dispatch({ type: types.INCREMENT });
            }, 1000);
        };
    },
    decrement: function () {
        return { type: types.DECREMENT };
    }
};
//# sourceMappingURL=counter.js.map