"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("./logo.svg"));

var _TestComponent = _interopRequireDefault(require("./TestComponent.js"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/React.createElement(_TestComponent.default, null);
}

var _default = App;
exports.default = _default;