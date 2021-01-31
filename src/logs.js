export const logLoadConfigFile = (configPath) => {
  console.log('\n\u001b[33mLoading SVG by config file');
  console.log(`\u001b[37mconfig file: \x1b[1m${configPath}\x1b[0m`);
};

export const logLoadParamFolder = () => {
  console.log('\n\u001b[33mLoading SVG collection by params');
};

export const logFinishCreation = (folderPath, outputFile) => {
  console.log(`\n\u001b[32mSprite created!`);
  console.log(`\u001b[37mfolder files: \x1b[1m${folderPath}\x1b[0m`);
  console.log(`\u001b[37moutput file: \x1b[1m${outputFile}\x1b[0m\n\n`);
};

export const logErrorCreation = (err, outputFile) => {
  console.log(`\n\u001b[31mSprite not created!`);
  console.log(`\u001b[37moutput file: \x1b[1m${outputFile}\x1b[0m`);
  console.log(`\u001b[35mCause: \x1b[1m${err}\x1b[0m\n`);
};
