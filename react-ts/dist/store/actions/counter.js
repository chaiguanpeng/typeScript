"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types = require("../action-types");
exports.default = {
    increment: function () {
        return { type: types.INCREMENT };
    },
    decrement: function () {
        return { type: types.DECREMENT };
    }
};
//# sourceMappingURL=counter.js.map