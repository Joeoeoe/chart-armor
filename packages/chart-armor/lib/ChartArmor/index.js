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
const DefaultLoadingTip_1 = __importDefault(require("../components/DefaultLoadingTip"));
const DetaultTimeoutTip_1 = __importDefault(require("../components/DetaultTimeoutTip"));
const constants_1 = require("./constants");
const ChartArmor = function ({ render, data, loadingCom = react_1.default.createElement(DefaultLoadingTip_1.default, null), errorCom = react_1.default.createElement(DefaultErrorTip_1.default, null), timeoutCom = react_1.default.createElement(DetaultTimeoutTip_1.default, null), timeoutLimit = constants_1.DEFAULT_TIMEOUT_LIMIT, containerWidth = constants_1.DEFAULT_CHART_WIDTH, containerHeight = constants_1.DEFAULT_CHART_HEIGHT, containerType = constants_1.CONTAINER_TYPE.DIV, }) {
    const chartRef = react_1.useRef(null);
    const dataRef = react_1.useRef(null);
    const [status, setSataus] = react_1.useState(constants_1.STATUS.LOADING);
    // 数据改变，有数据则直接变为ACHIEVE状态；无数据则表示重新发出请求，变为LOADING状态
    react_1.useEffect(() => {
        if (data) {
            setSataus(constants_1.STATUS.ACHIEVE);
            dataRef.current = data;
        }
        else {
            setSataus(constants_1.STATUS.LOADING);
        }
    }, [data]);
    // 渲染
    react_1.useEffect(() => {
        if (status === constants_1.STATUS.ACHIEVE) {
            try {
                // 某些图表库渲染时不会先清空div内容，会直接插入新的canvas进行绘制，比如G2
                chartRef.current.innerHTML = '';
                render(chartRef.current, dataRef.current);
                // 完成渲染后变为COMPLETE状态，防止一直为ACHIEVE时dependencies改变的重复渲染
                setSataus(constants_1.STATUS.COMPLETE);
            }
            catch (error) {
                console.error(error);
                setSataus(constants_1.STATUS.ERROR);
            }
        }
    }, [render, status]);
    // 超时
    react_1.useEffect(() => {
        // LOADING状态下设置超时计时
        if (status === constants_1.STATUS.LOADING) {
            const timeoutId = setTimeout(() => {
                setSataus(constants_1.STATUS.TIMEOUT);
            }, timeoutLimit);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [status, timeoutLimit]);
    const container = containerType === constants_1.CONTAINER_TYPE.SVG ? (react_1.default.createElement("svg", { ref: chartRef, style: { width: containerWidth, height: containerHeight } })) : (react_1.default.createElement("div", { ref: chartRef, style: { width: containerWidth, height: containerHeight } }));
    switch (status) {
        case constants_1.STATUS.ACHIEVE:
            return (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, container));
        case constants_1.STATUS.LOADING:
            return (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, loadingCom));
        case constants_1.STATUS.ERROR:
            return (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, errorCom));
        case constants_1.STATUS.TIMEOUT:
            return (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, timeoutCom));
        case constants_1.STATUS.COMPLETE:
            return (react_1.default.createElement(Wrapper_1.default, { width: containerWidth, height: containerHeight }, container));
        default:
            throw new Error('ChartArmor status switch...case... lack');
    }
};
exports.default = ChartArmor;
//# sourceMappingURL=index.js.map