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
const Wrapper_1 = __importDefault(require("../components/Wrapper"));
const DefaultErrorTip_1 = __importDefault(require("../components/DefaultErrorTip"));
const DefaultLoading_1 = __importDefault(require("../components/DefaultLoading"));
const constants_1 = require("./constants");
const ChartArmor = function ({ render, data, loadingCom = react_1.default.createElement(DefaultLoading_1.default, null), errorCom = react_1.default.createElement(DefaultErrorTip_1.default, null), containerWidth = constants_1.DEFAULT_CHART_WIDTH, containerHeight = constants_1.DEFAULT_CHART_HEIGHT, containerType = constants_1.CONTAINER_TYPE.DIV, }) {
    const chartRef = react_1.useRef(null);
    const [hasError, setHasError] = react_1.useState(false);
    react_1.useEffect(() => {
        try {
            if (data) {
                render(chartRef.current, data);
            }
            setHasError(false);
        }
        catch (error) {
            console.error(error);
            setHasError(true);
        }
    }, [data]);
    const container = containerType === constants_1.CONTAINER_TYPE.SVG ? (react_1.default.createElement("svg", { ref: chartRef, style: { width: containerWidth, height: containerHeight } })) : (react_1.default.createElement("div", { ref: chartRef, style: { width: containerWidth, height: containerHeight } }));
    return hasError ? (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, errorCom)) : (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, data ? container : loadingCom));
};
exports.default = ChartArmor;
//# sourceMappingURL=index.js.map