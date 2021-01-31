"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _commander = _interopRequireDefault(require("commander"));

var _configLoader = _interopRequireDefault(require("./loader/configLoader"));

var _folder = _interopRequireDefault(require("./loader/folder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  _commander["default"].version("0.0.1").option("-c --config <config>", "A config file").option("-f --folder <folder>", "A SVGs folder path").option("-o --output <output>", "A file to be outputted").parse(process.argv);

  var options = _commander["default"].opts();

  var content = '';
  var outputFile = options.output || '';
  /** Should load based config file */

  if (!!options.config) {
    var config = (0, _configLoader["default"])(options.config);
    content = config.content;
    outputFile = config.output;
  }

  if (!options.config && !!options.folder) {
    content = (0, _folder["default"])(options.folder);
  }

  _fs["default"].writeFile(outputFile, content, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(options.output);
    }
  });
};

exports["default"] = _default;