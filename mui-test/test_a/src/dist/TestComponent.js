"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TestComponent = function TestComponent() {
  return /*#__PURE__*/_react.default.createElement(_Button.default, null, "TestComponent");
};

var _default = TestComponent;
exports.default = _default;