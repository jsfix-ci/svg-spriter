import fs from 'fs';
import { program } from 'commander';

import configLoader from './loader/configLoader';
import folderLoader from './loader/folder';

import { logLoadConfigFile, logLoadParamFolder, logFinishCreation, logErrorCreation } from './logs';

export default () => {
  program
    .version("0.0.1")
    .option("-c --config <config>", "A config file")
    .option("-f --folder <folder>", "A SVGs folder path")
    .option("-o --output <output>", "A file to be outputted")
    .parse(process.argv);

  const options = program.opts();

  let content = '';
  let folderPath = options.folder || '';
  let outputFile = options.output || '';

  /** Should load based config file */
  if (!!options.config) {
    logLoadConfigFile(options.config);
    const config = configLoader(options.config);
    content = config.content;
    outputFile = config.output;
    folderPath = config.folderPath;
  }

  if (!options.config && !!options.folder) {
    logLoadParamFolder();
    content = folderLoader(options.folder);
  }

  fs.writeFile(outputFile, content, function (err) {
    if (err) {
      logErrorCreation(err, outputFile);
    } else {
      logFinishCreation(folderPath, outputFile);
    }
  });
};
