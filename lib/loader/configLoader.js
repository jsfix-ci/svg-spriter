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
  var configContent = _fs["default"].readFileSync(configPath);

  var config = JSON.parse(configContent);

  var basePath = _path["default"].dirname(configPath);

  var folderPath = "".concat(basePath, "/").concat(_path["default"].normalize(config.folder));
  var outputFile = "".concat(basePath, "/").concat(_path["default"].normalize(config.output.path), "/").concat(config.output.filename);
  var content = (0, _folder["default"])(folderPath);
  return {
    output: outputFile,
    content: content
  };
};

exports["default"] = _default;