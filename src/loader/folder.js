import fs from "fs";

import { parseSvgXML, parseSymbolXML } from '../utils/parse';

export default (folderPath) => {
  /** Load files from folder */
  const files = fs.readdirSync(folderPath);

  /** Filter files with .svg extension */
  const svgFiles = files.filter((file) => /\.svg/.test(file));

  /** Read all file contents and parse it and converts to string */
  const spriteContent = svgFiles.map((file) => {
    const data = fs.readFileSync(`${folderPath}/${file}`);

    return parseSymbolXML(data, file);
  }).join('\n');

  /** returns with svg parsed */
  return parseSvgXML(spriteContent);
};
