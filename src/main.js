import fs from 'fs';
import program from "commander";

import folderLoader from './loader/folder';

export default () => {
  program
    .version("0.0.1")
    .option("-f --folder <folder>", "A SVGs folder path")
    .requiredOption("-o --output <output>", "A file to be outputted")
    .parse(process.argv);

  const options = program.opts();

  let content = '';

  if (!!options.folder) {
    content = folderLoader(options.folder, options.output);
  }

  fs.writeFile(options.output, content, function (err) {
    if (err) {
      console.error(fileErr);
    } else {
      console.log(options.output);
    }
  });
};
