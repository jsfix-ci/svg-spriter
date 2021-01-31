"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _commander = _interopRequireDefault(require("commander"));

var _folder = _interopRequireDefault(require("./loader/folder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  _commander["default"].version("0.0.1").option("-f --folder <folder>", "A SVGs folder path").requiredOption("-o --output <output>", "A file to be outputted").parse(process.argv);

  var options = _commander["default"].opts();

  var content = '';

  if (!!options.folder) {
    content = (0, _folder["default"])(options.folder, options.output);
  }

  _fs["default"].writeFile(options.output, content, function (err) {
    if (err) {
      console.error(fileErr);
    } else {
      console.log(options.output);
    }
  });
};

exports["default"] = _default;