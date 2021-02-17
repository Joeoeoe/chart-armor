"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DefaultLoading_1 = __importDefault(require("../DefaultLoading"));
const constants_1 = require("./constants");
const ChartArmor = function ({ render, data, loadingCom }) {
    const chartRef = react_1.useRef(null);
    react_1.useEffect(() => {
        if (data) {
            render(chartRef, data);
        }
    }, [data]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: {
                width: constants_1.DEFAULT_CHART_WIDTH,
                height: constants_1.DEFAULT_CHART_HEIGHT,
            } }, data ? (react_1.default.createElement("div", { ref: chartRef, style: { width: constants_1.DEFAULT_CHART_WIDTH, height: constants_1.DEFAULT_CHART_HEIGHT } })) : (react_1.default.createElement(DefaultLoading_1.default, null)))));
};
exports.default = ChartArmor;
//# sourceMappingURL=index.js.map