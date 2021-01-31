"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _parse = require("../utils/parse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(folderPath) {
  /** Load files from folder */
  var files = _fs["default"].readdirSync(folderPath);
  /** Filter files with .svg extension */


  var svgFiles = files.filter(function (file) {
    return /\.svg/.test(file);
  });
  /** Read all file contents and parse it and converts to string */

  var spriteContent = svgFiles.map(function (file) {
    var data = _fs["default"].readFileSync("".concat(folderPath, "/").concat(file));

    return (0, _parse.parseSymbolXML)(data, file);
  }).join('\n');
  /** returns with svg parsed */

  return (0, _parse.parseSvgXML)(spriteContent);
};

exports["default"] = _default;