"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import getCLIParams from './utils/getCLIParams';
var _default = function _default() {
  _commander["default"].version("0.0.1").option("-d --directory <directory>", "SVG folder").option("-o --output <output>", "Out put to file").parse(process.argv);

  var options = _commander["default"].opts();

  console.log(options); // const cliParams = getCLIParams(process.argv);
  // console.log(cliParams);
};

exports["default"] = _default;