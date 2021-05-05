#!/usr/bin/env node
const chokidar = require("chokidar");
const debounce = require("lodash.debounce");
const program = require("caporal");

program
  .version("0.0.1")
  .argument("[filename]", "Name of file to execute")
  .action((args) => {
    console.log(args)
  });

program.parse(process.argv)

// const start = debounce(() => {
//   console.log("STARTING USERS PROGRAM");
// }, 100);

// chokidar
//   .watch(".")
//   .on("add", start)
//   .on("change", () => console.log("FILE CHANGED"))
//   .on("unlink", () => console.log("FILE UNLINKED"));
