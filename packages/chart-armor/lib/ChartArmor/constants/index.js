"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.CONTAINER_TYPE = exports.DEFAULT_TIMEOUT_LIMIT = exports.DEFAULT_CHART_HEIGHT = exports.DEFAULT_CHART_WIDTH = void 0;
exports.DEFAULT_CHART_WIDTH = 500;
exports.DEFAULT_CHART_HEIGHT = 300;
exports.DEFAULT_TIMEOUT_LIMIT = 10000;
var CONTAINER_TYPE;
(function (CONTAINER_TYPE) {
    CONTAINER_TYPE["DIV"] = "div";
    CONTAINER_TYPE["SVG"] = "svg";
})(CONTAINER_TYPE = exports.CONTAINER_TYPE || (exports.CONTAINER_TYPE = {}));
var STATUS;
(function (STATUS) {
    STATUS[STATUS["LOADING"] = 0] = "LOADING";
    STATUS[STATUS["ACHIEVE"] = 1] = "ACHIEVE";
    STATUS[STATUS["TIMEOUT"] = 2] = "TIMEOUT";
    STATUS[STATUS["ERROR"] = 3] = "ERROR";
    STATUS[STATUS["COMPLETE"] = 4] = "COMPLETE";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
//# sourceMappingURL=index.js.map