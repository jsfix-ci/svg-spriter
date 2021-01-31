import fs from 'fs';
import path from 'path';

import folderLoader from './folder';

export default (configPath) => {
  /** Load config file */
  const configContent = fs.readFileSync(configPath);

  /** Parse the configContent into json object */
  const config = JSON.parse(configContent);

  /** Define base path to be load */
  const basePath = path.dirname(configPath);

  /** Defines input and output for folder loader */
  const folderPath = `${basePath}/${path.normalize(config.folder)}`;
  const outputFile = `${basePath}/${path.normalize(config.output.path)}/${config.output.filename}`;

  /** Get content from folder loader */
  const content = folderLoader(folderPath);

  return {
    output: outputFile,
    folderPath,
    content,
  };
};
