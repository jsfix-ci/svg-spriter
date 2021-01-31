import { default as program } from "commander";

export default () => {
  program
    .version("0.0.1")
    .option("-f --folder <folder>", "A SVGs folder path")
    .requiredOption("-o --output <output>", "A file to be outputted")
    .parse(process.argv);

  const options = program.opts();
  console.log(options);
};
