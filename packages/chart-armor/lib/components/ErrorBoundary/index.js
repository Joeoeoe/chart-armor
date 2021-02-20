"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DefaultErrorTip_1 = __importDefault(require("../DefaultErrorTip"));
class ErrorBoundary extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error) {
        // You can also log the error to an error reporting service
        console.log(error);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return react_1.default.createElement(DefaultErrorTip_1.default, null);
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
//# sourceMappingURL=index.js.map