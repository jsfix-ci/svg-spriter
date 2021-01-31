"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSvgXML = exports.parseSymbolXML = void 0;

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parseAttrs = function parseAttrs(attrs) {
  return attrs.reduce(function (result, current) {
    return "".concat(result, " ").concat(current.name, "=\"").concat(current.value, "\"");
  }, '').trim();
};

var parseSymbolXML = function parseSymbolXML(svgContent, filename) {
  var svg = _cheerio["default"].load(svgContent);

  var symbolAttrs = parseAttrs([{
    name: 'id',
    value: filename.split('.')[0]
  }, // removes extension file
  {
    name: 'viewBox',
    value: svg('svg').prop('viewBox')
  }, {
    name: 'xmlns',
    value: "http://www.w3.org/2000/svg"
  }]);
  var content = svg('svg').html();
  var svgParsed = "<symbol ".concat(symbolAttrs, ">").concat(content, "</symbol>");
  return svgParsed;
};

exports.parseSymbolXML = parseSymbolXML;

var parseSvgXML = function parseSvgXML(content) {
  var xmlAttrs = parseAttrs([{
    name: 'version',
    value: "1.0"
  }, {
    name: 'encoding',
    value: "UTF-8"
  }]);
  var svgAttrs = parseAttrs([{
    name: 'xmlns',
    value: "http://www.w3.org/2000/svg"
  }, {
    name: 'xmlns:xlink',
    value: "http://www.w3.org/1999/xlink"
  }]);
  return "<?xml ".concat(xmlAttrs, "?>\n<svg ").concat(svgAttrs, ">\n").concat(content, "\n</svg>");
};

exports.parseSvgXML = parseSvgXML;