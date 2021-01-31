"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _folder = _interopRequireDefault(require("./folder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(configPath) {
  /** Load config file */
  var configContent = _fs["default"].readFileSync(configPath);
  /** Parse the configContent into json object */


  var config = JSON.parse(configContent);
  /** Define base path to be load */

  var basePath = _path["default"].dirname(configPath);
  /** Defines input and output for folder loader */


  var folderPath = "".concat(basePath, "/").concat(_path["default"].normalize(config.folder));
  var outputFile = "".concat(basePath, "/").concat(_path["default"].normalize(config.output.path), "/").concat(config.output.filename);
  /** Get content from folder loader */

  var content = (0, _folder["default"])(folderPath);
  return {
    output: outputFile,
    folderPath: folderPath,
    content: content
  };
};

exports["default"] = _default;