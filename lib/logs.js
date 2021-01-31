"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logErrorCreation = exports.logFinishCreation = exports.logLoadParamFolder = exports.logLoadConfigFile = void 0;

var logLoadConfigFile = function logLoadConfigFile(configPath) {
  console.log("\n\x1B[33mLoading SVG by config file");
  console.log("\x1B[37mconfig file: \x1B[1m".concat(configPath, "\x1B[0m"));
};

exports.logLoadConfigFile = logLoadConfigFile;

var logLoadParamFolder = function logLoadParamFolder() {
  console.log("\n\x1B[33mLoading SVG collection by params");
};

exports.logLoadParamFolder = logLoadParamFolder;

var logFinishCreation = function logFinishCreation(folderPath, outputFile) {
  console.log("\n\x1B[32mSprite created!");
  console.log("\x1B[37mfolder files: \x1B[1m".concat(folderPath, "\x1B[0m"));
  console.log("\x1B[37moutput file: \x1B[1m".concat(outputFile, "\x1B[0m\n\n"));
};

exports.logFinishCreation = logFinishCreation;

var logErrorCreation = function logErrorCreation(err, outputFile) {
  console.log("\n\x1B[31mSprite not created!");
  console.log("\x1B[37moutput file: \x1B[1m".concat(outputFile, "\x1B[0m"));
  console.log("\x1B[35mCause: \x1B[1m".concat(err, "\x1B[0m\n"));
};

exports.logErrorCreation = logErrorCreation;